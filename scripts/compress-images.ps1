Add-Type -AssemblyName System.Drawing

$maxBytes = 200KB
$folder = "C:\Users\MG QC\bayarfidya\public\images"

function Compress-Jpg($path, $maxBytes) {
    $existing = Get-Item $path
    if ($existing.Length -le $maxBytes) {
        Write-Output ("{0} already under target ({1}KB)" -f $existing.Name, [math]::Round($existing.Length/1KB,1))
        return
    }
    $img = [System.Drawing.Image]::FromFile($path)
    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $quality = 90
    $saved = $false
    while ($quality -ge 15) {
        $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$quality)
        $ms = New-Object System.IO.MemoryStream
        $img.Save($ms, $encoder, $ep)
        $size = $ms.Length
        Write-Output ("{0} quality={1} size={2}KB" -f (Split-Path $path -Leaf), $quality, [math]::Round($size/1KB,1))
        if ($size -le $maxBytes) {
            $bytes = $ms.ToArray()
            $ms.Dispose()
            $img.Dispose()
            [System.IO.File]::WriteAllBytes($path, $bytes)
            $saved = $true
            break
        }
        $ms.Dispose()
        $quality -= 5
    }
    if (-not $saved) {
        $img.Dispose()
        Write-Output ("WARN: could not compress {0} below target with quality alone" -f $path)
    }
}

function Compress-Png($path, $maxBytes) {
    $info = Get-Item $path
    if ($info.Length -le $maxBytes) {
        Write-Output ("{0} already under target ({1}KB)" -f $info.Name, [math]::Round($info.Length/1KB,1))
        return
    }
    $img = [System.Drawing.Image]::FromFile($path)
    $scale = 1.0
    $tmp = "$path.tmp.png"
    while ($scale -gt 0.2) {
        $w = [int]($img.Width * $scale)
        $h = [int]($img.Height * $scale)
        $bmp = New-Object System.Drawing.Bitmap $w, $h
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.DrawImage($img, 0, 0, $w, $h)
        $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
        $g.Dispose()
        $bmp.Dispose()
        $size = (Get-Item $tmp).Length
        Write-Output ("{0} scale={1} size={2}KB" -f (Split-Path $path -Leaf), $scale, [math]::Round($size/1KB,1))
        if ($size -le $maxBytes) {
            break
        }
        $scale -= 0.1
    }
    $img.Dispose()
    Copy-Item $tmp $path -Force
    Remove-Item $tmp -Force
}

Get-ChildItem $folder -File | ForEach-Object {
    $ext = $_.Extension.ToLower()
    if ($ext -eq ".jpg" -or $ext -eq ".jpeg") {
        Compress-Jpg $_.FullName $maxBytes
    } elseif ($ext -eq ".png") {
        Compress-Png $_.FullName $maxBytes
    }
}

Write-Output "---- FINAL SIZES ----"
Get-ChildItem $folder -File | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1KB,1)}}
