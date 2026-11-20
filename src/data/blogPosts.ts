// Data artikel blog — konten direplikasi 100% dari bayarfidyah.com/blog
// Gambar sementara memakai foto dokumentasi lokal, akan diganti setelah gambar asli diupload ke /public/images/blog/

export type BlogBlock =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'h3'; text: string }
	| { type: 'ul'; items: string[] }
	| { type: 'ol'; items: string[] }
	| { type: 'quote'; arabic?: string; text: string }
	| { type: 'note'; label: string; href?: string }
	| { type: 'cta'; text: string };

export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	image: string;
	date: string;
	author: string;
	authorPhoto?: string;
	writer?: string;
	editor?: string;
	content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'orag-yang-berhak-menerima-fidyah',
		title: 'Inilah 5 Orang yang Berhak Menerima Fidyah, Siapa Saja?',
		excerpt:
			'Fidyah harus disalurkan kepada golongan yang tepat sasaran. Simak 5 kelompok yang berhak menerima fidyah agar penyaluran Anda sah dan bermanfaat.',
		image: '/images/blog 1.png',
		date: '25 September 2026',
		author: 'Santi Puspita',
		writer: 'Santi Puspita Ningrum',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Fidyah merupakan kewajiban yang harus ditunaikan oleh seorang Muslim dalam kondisi tertentu ketika tidak mampu menjalankan puasa Ramadhan. Fidyah diberikan dalam bentuk makanan kepada orang yang membutuhkan sebagai pengganti puasa yang tidak dapat dikerjakan.',
			},
			{
				type: 'p',
				text: 'Namun, fidyah tidak boleh diberikan kepada sembarang orang. Ada ketentuan mengenai siapa yang berhak menerima fidyah. Lantas, siapa saja orang yang berhak menerima fidyah? Mari simak penjelasan artikel berikut!',
			},
			{ type: 'h2', text: 'Orang yang Berhak Menerima Fidyah' },
			{
				type: 'p',
				text: 'Fidyah pada dasarnya diberikan kepada fakir dan miskin. Hal ini sebagaimana disebutkan dalam QS. Al-Baqarah ayat 184:',
			},
			{
				type: 'quote',
				arabic: 'وَعَلَى الَّذِيْنَ يُطِيْقُوْنَهُ فِدْيَةٌ طَعَامُ مِسْكِيْنٍ',
				text: '"Dan bagi orang yang berat menjalankannya, wajib membayar fidyah, yaitu memberi makan seorang miskin." (QS. Al-Baqarah: 184)',
			},
			{
				type: 'p',
				text: 'Berdasarkan ayat tersebut, orang miskin menjadi salah satu pihak yang berhak menerima fidyah. Penyalurannya dapat dilakukan dengan memberikan makanan kepada mereka yang membutuhkan.',
			},
			{ type: 'h3', text: '1. Fakir' },
			{
				type: 'p',
				text: 'Fakir merupakan orang yang memiliki keterbatasan dalam memenuhi kebutuhan pokoknya. Kondisi ekonomi yang sangat terbatas membuat mereka termasuk golongan yang dapat menerima fidyah.',
			},
			{ type: 'h3', text: '2. Miskin' },
			{
				type: 'p',
				text: 'Orang miskin juga termasuk penerima fidyah. Mereka memiliki penghasilan atau harta, tetapi belum mencukupi kebutuhan pokok sehari-hari.',
			},
			{ type: 'h3', text: '3. Orang yang Membutuhkan Makanan' },
			{
				type: 'p',
				text: 'Fidyah diberikan dalam bentuk makanan sehingga dapat disalurkan kepada orang yang membutuhkan makanan untuk memenuhi kebutuhan sehari-harinya.',
			},
			{ type: 'h3', text: '4. Masyarakat Kurang Mampu' },
			{
				type: 'p',
				text: 'Masyarakat yang berada dalam kondisi ekonomi kurang mampu dan kesulitan memenuhi kebutuhan pokok dapat menjadi sasaran penyaluran fidyah sesuai ketentuan syariat.',
			},
			{ type: 'h3', text: '5. Penerima yang Sesuai Ketentuan Syariat' },
			{
				type: 'p',
				text: 'Penyaluran fidyah perlu diperhatikan agar sampai kepada pihak yang memang berhak menerimanya. Karena itu, fidyah sebaiknya disalurkan kepada fakir dan miskin atau melalui lembaga terpercaya yang dapat menyalurkannya kepada penerima yang tepat.',
			},
			{
				type: 'p',
				text: 'Nah itulah orang-orang yang berhak menerima fidyah. Fidyah bukan sekadar kewajiban yang harus ditunaikan, tetapi juga menjadi bentuk kepedulian kepada mereka yang membutuhkan. Karena itu, pastikan fidyah disalurkan kepada penerima yang sesuai dengan ketentuan syariat.',
			},
			{
				type: 'cta',
				text: 'Anda dapat menunaikan fidyah melalui bayarfidyah.com. Fidyah yang dititipkan akan disalurkan kepada masyarakat yang membutuhkan.',
			},
		],
	},
	{
		slug: 'membayar-fidyah-bagi-lansia',
		title: 'Fidyah bagi Lansia, Begini Ketentuan dan Cara Membayarnya !',
		excerpt:
			'Lansia yang tidak mampu berpuasa mendapat keringanan untuk menunaikan fidyah. Kenali ketentuan dan cara membayarnya dengan benar.',
		image: '/images/blog 2.png',
		date: '14 September 2026',
		author: 'Santi Puspita',
		writer: 'Hilda Asani Mustika',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Puasa Ramadhan merupakan kewajiban ibadah yang harus ditunaikan oleh umat Muslim yang telah mencapai akil baligh, termasuk orang tua. Meskipun sudah lanjut usia, orang tua tetap dikenakan kewajiban puasa di bulan Ramadhan.',
			},
			{
				type: 'p',
				text: 'Namun Islam memberikan keringanan (rukhsah) untuk menggantinya dengan fidyah tapi hanya berlaku bagi seseorang yang sedang berada dalam kondisi tertentu. Lantas bagaimana ketentuan fidyah bagi lansia? Dan bagaimana cara membayarnya? Mari simak penjelasan artikel berikut!',
			},
			{ type: 'h2', text: 'Ketentuan Fidyah bagi Lansia' },
			{
				type: 'p',
				text: 'Orang tua sejatinya masuk golongan akil baligh yang wajib menjalankan puasa Ramadhan. Namun ada kondisi tertentu yang membolehkan mengganti puasa tersebut dengan bayar fidyah bagi orang tua renta.',
			},
			{
				type: 'p',
				text: 'Lansia diperbolehkan untuk mengganti puasa dengan fidyah apabila kondisi fisiknya sudah sangat lemah sehingga tidak memungkinkan berpuasa baik sepanjang bulan puasa ataupun hari-hari lainnya.',
			},
			{
				type: 'p',
				text: 'Umumnya lansia mengalami penurunan fungsi anggota tubuh tidak seperti waktu muda. Oleh karenanya hal demikian diperbolehkan mengingat puasa membutuhkan kondisi fisik yang optimal karena harus menahan diri untuk tidak makan maupun minum dari mulai terbit fajar sampai matahari tenggelam.',
			},
			{ type: 'p', text: 'Sebagaimana firman Allah SWT dalam QS. Al Baqarah ayat 184' },
			{
				type: 'quote',
				arabic: 'وَعَلَى الَّذِيْنَ يُطِيْقُوْنَهُ فِدْيَةٌ طَعَامُ مِسْكِيِنٍ',
				text: '"Dan bagi orang yang berat menjalankannya, wajib membayar fidyah, yaitu memberi makan seorang miskin." (QS. Al-Baqarah: 184)',
			},
			{ type: 'h2', text: 'Cara Membayar Fidyah bagi Lansia' },
			{
				type: 'p',
				text: 'Pembayaran fidyah bagi lansia dapat dilakukan dengan beberapa cara. Fidyah bisa diberikan langsung kepada fakir miskin, baik setiap hari selama Ramadhan maupun dikumpulkan lalu dibayarkan sekaligus di akhir bulan. Selain itu, fidyah juga boleh disalurkan melalui lembaga amil atau pihak terpercaya yang menyalurkannya kepada yang berhak.',
			},
			{
				type: 'cta',
				text: 'Anda bisa tunaikan fidyah di bayarfidyah.com, setiap rupiah yang Anda titipkan akan disalurkan kepada orang miskin yang membutuhkan.',
			},
			{
				type: 'p',
				text: 'Nah itulah ketentuan fidyah bagi lansia dan cara membayarnya, kewajiban puasa tidak bisa gugur begitu saja bahkan lansia pun wajib mengerjakannya jika mampu. Jika tidak mampu maka bisa diganti dengan membayar fidyah.',
			},
			{
				type: 'cta',
				text: 'Yuk jangan tunda lagi kewajiban tersebut, mari tunaikan di bayarfidyah.com sekarang!',
			},
		],
	},
	{
		slug: 'ketentuan-qadha-dan-fidyah',
		title: 'Ketentuan Qadha dan Fidyah bagi yang Tidak Puasa Ramadhan!',
		excerpt:
			'Memahami perbedaan qadha dan fidyah bagi yang meninggalkan puasa Ramadhan, serta kapan masing-masing ketentuan tersebut berlaku.',
		image: '/images/blog 3.png',
		date: '14 September 2026',
		author: 'Santi Puspita',
		writer: 'Hilda Asani Mustika',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Puasa Ramadhan merupakan kewajiban bagi setiap muslim yang telah memenuhi syariat serta mampu untuk melaksanakannya. Sebagai agama yang penuh dengan rahmat, Allah memberikan keringanan berupa qadha atau bayar fidyah bagi orang yang tidak mampu berpuasa atau adanya udzur syar\'i.',
			},
			{
				type: 'p',
				text: 'Lantas, siapa saja yang wajib qadha dan fidyah? Nah simak ulasan artikel berikut ini untuk mengetahui ketentuan qadha dan fidyah bagi yang tidak puasa sesuai dengan panduan syariat.',
			},
			{ type: 'h2', text: 'Ketentuan Qadha dan Bayar Fidyah' },
			{
				type: 'p',
				text: 'Qadha puasa adalah mengganti puasa Ramadhan yang ditinggalkan dengan berpuasa di luar bulan Ramadhan sejumlah hari yang ditinggalkan karena alasan sementara namun secara fisik masih bisa menunaikannya di kemudian hari.',
			},
			{
				type: 'p',
				text: 'Sementara fidyah adalah kewajiban memberi makan orang miskin sebagai pengganti puasa Ramadhan yang tidak bisa ditunaikan karena udzur tertentu yang bersifat permanen.',
			},
			{
				type: 'p',
				text: 'Dilansir dari laman Nu Online, orang yang tidak berpuasa terbagi menjadi 4 kategori beserta konsekuensinya sebagaimana yang termuat dalam kitab Kasyifatus Saja karya dari Syekh Nawawi:',
			},
			{
				type: 'ol',
				items: [
					'Wajib Qadha dan Bayar Fidyah — Golongan yang wajib qadha dan bayar fidyah yaitu orang yang memutuskan untuk tidak berpuasa Ramadhan karena khawatir akan kondisi selain dirinya dan terlambat dalam mengqadha sampai puasa Ramadhan berikutnya datang. Contohnya, ibu hamil atau menyusui yang mengkhawatirkan kesehatan bayinya apabila ia berpuasa, meskipun sebenarnya dia masih mampu untuk melakukannya.',
					'Wajib Qadha Saja — Orang yang tidak perlu membayar fidyah hanya wajib qadha saja yaitu mereka yang tidak puasa karena sakit ayan, musafir (dalam perjalanan jauh), lupa niat di malam harinya, atau menyengaja untuk berbuka. Adapun alasan dibalik ketentuan ini karena tidak adanya dalil yang menunjukkan kewajiban fidyah.',
					'Wajib Bayar Fidyah Tanpa Qadha — Golongan selanjutnya yaitu mereka yang wajib fidyah tanpa qadha di lain hari seperti, lansia tua renta yang sudah tidak mampu untuk menunaikan ibadah puasa dan orang sakit parah yang tidak dapat diharapkan kesembuhannya.',
					'Tidak Wajib Qadha dan Fidyah — Golongan yang tidak dikenai kewajiban qadha maupun fidyah yaitu anak kecil yang belum baligh, orang gila, dan orang kafir asli.',
				],
			},
			{
				type: 'p',
				text: 'Nah itulah ketentuan qadha dan puasa bagi yang tidak berpuasa Ramadhan, jadi tidak puasa bukan berarti terlepas dari tanggung jawab ibadah. Islam telah mengatur ketentuan qadha dan fidyah secara adil dan penuh kasih sayang.',
			},
			{
				type: 'p',
				text: 'Dengan memahami perbedaannya, setiap muslim dapat menunaikan kewajiban sesuai dengan kemampuannya dan tetap meraih pahala dari Allah SWT. Jangan sampai menunda kewajiban qadha maupun fidyah, segera tunaikan sebelum Ramadhan berikutnya datang.',
			},
			{ type: 'h2', text: 'Tunaikan Kewajiban Fidyah Melalui Yayasan Alfatihah' },
			{
				type: 'p',
				text: 'Bagi Anda yang masih mempunyai tanggungan bayar fidyah, yuk segera tunaikan untuk menyempurnakan ibadah puasa Ramadhan.',
			},
			{
				type: 'cta',
				text: 'Bersama Yayasan Alfatihah, setiap rupiah yang Anda titipkan akan disalurkan kepada mereka yang benar-benar membutuhkan sesuai dengan ketentuan syariat. Mari lunasi kewajibanmu dengan mudah dan amanah melalui bayarfidyah.com',
			},
		],
	},
	{
		slug: 'bolehkah-anak-membayar-fidyah-bagi-orang-tua',
		title: 'Bolehkah Anak Membayar Fidyah Orang Tua yang Tidak Mampu?',
		excerpt:
			'Banyak yang bertanya apakah anak boleh menunaikan fidyah untuk orang tuanya yang tidak mampu. Simak penjelasannya di sini.',
		image: '/images/blog 4.png',
		date: '29 Juni 2026',
		author: 'Santi Puspita',
		writer: 'Santi Puspita Ningrum',
		content: [
			{
				type: 'p',
				text: 'Puasa Ramadhan merupakan kewajiban bagi setiap Muslim yang telah baligh dan mampu menjalankannya. Namun, Islam adalah agama yang penuh kasih sayang dan tidak memberatkan hamba-Nya. Bagi orang tua yang telah lanjut usia atau menderita sakit menahun sehingga tidak sanggup berpuasa, Allah SWT memberikan keringanan berupa fidyah sebagai pengganti puasa yang ditinggalkan.',
			},
			{
				type: 'p',
				text: 'Lalu, bagaimana jika orang tua yang wajib membayar fidyah justru tidak memiliki kemampuan ekonomi? Apakah anak harus membayarkannya? Pertanyaan ini sering muncul, terutama bagi mereka yang ingin tetap berbakti kepada orang tua meski dalam kondisi serba terbatas. Yuk, simak penjelasannya berikut ini.',
			},
			{ type: 'h2', text: 'Apakah Anak Wajib Membayar Fidyah Orang Tuanya?' },
			{
				type: 'p',
				text: 'Pada dasarnya, kewajiban membayar fidyah berada pada orang yang meninggalkan puasa. Fidyah menjadi pengganti puasa bagi orang tua yang sudah renta atau mereka yang mengalami sakit menahun dan tidak ada harapan sembuh.',
			},
			{
				type: 'p',
				text: 'Namun, apabila orang tua tersebut benar-benar tidak memiliki kemampuan finansial, anak tidak memiliki kewajiban mutlak untuk menanggung fidyah tersebut. Sebab, Allah SWT tidak membebani seseorang di luar batas kemampuannya.',
			},
			{ type: 'h2', text: 'Bolehkah Anak Membayarkan Fidyah Orang Tuanya?' },
			{
				type: 'p',
				text: 'Meskipun tidak wajib, anak diperbolehkan membayarkan fidyah orang tuanya sebagai bentuk bakti dan kasih sayang kepada kedua orang tua. Bahkan, membantu orang tua menunaikan kewajiban yang tidak mampu mereka laksanakan sendiri termasuk amalan yang mulia.',
			},
			{
				type: 'p',
				text: 'Apabila orang tua masih memiliki harta yang mencukupi, fidyah sebaiknya dibayarkan menggunakan harta tersebut. Namun, jika mereka benar-benar tidak memiliki kemampuan, anak dapat membayarkannya secara sukarela sebagai bentuk pengabdian kepada orang tua.',
			},
			{ type: 'h2', text: 'Bagaimana Jika Orang Tua Sudah Meninggal Dunia?' },
			{
				type: 'p',
				text: 'Jika orang tua meninggal dunia dan masih memiliki tanggungan fidyah, maka fidyah dapat diambil dari harta peninggalannya sebelum warisan dibagikan kepada ahli waris, selama harta tersebut mencukupi.',
			},
			{
				type: 'p',
				text: 'Apabila tidak ada harta yang ditinggalkan, anak atau keluarga dapat membayarkannya secara sukarela sebagai bentuk bakti, doa, dan harapan agar Allah SWT melimpahkan rahmat kepada orang tua yang telah wafat.',
			},
			{ type: 'h2', text: 'Bagaimana Cara Membayar Fidyah untuk Orang Tua?' },
			{ type: 'p', text: 'Membayar fidyah untuk orang tua dapat dilakukan dalam beberapa bentuk, yaitu:' },
			{
				type: 'ul',
				items: [
					'Memberikan makanan siap santap untuk satu kali makan kepada fakir miskin.',
					'Memberikan bahan makanan pokok sebanyak 1 mud (sekitar 675 gram beras) untuk setiap hari puasa yang ditinggalkan.',
					'Membayar sejumlah uang yang nilainya setara dengan satu porsi makanan, sesuai pendapat ulama atau ketentuan lembaga penyalur yang digunakan.',
				],
			},
			{
				type: 'p',
				text: 'Fidyah harus disalurkan kepada fakir miskin dan dapat diberikan secara langsung maupun melalui lembaga penyalur terpercaya.',
			},
			{
				type: 'p',
				text: 'Fidyah merupakan salah satu bentuk keringanan yang Allah SWT berikan kepada orang tua yang tidak lagi mampu berpuasa karena usia lanjut atau sakit menahun. Meski anak tidak diwajibkan menanggung fidyah orang tuanya, membantu membayarkannya merupakan wujud bakti yang bernilai ibadah dan menjadi salah satu cara membalas kasih sayang mereka.',
			},
			{
				type: 'cta',
				text: 'Ingin menjadi penyambung bakti untuk orang tua tercinta? Tunaikan fidyah mereka dengan mudah melalui bayarfidyah.com. InsyaAllah fidyah yang Anda titipkan akan disalurkan kepada penerima yang berhak sesuai syariat, sekaligus menjadi amal kebaikan yang penuh berkah.',
			},
		],
	},
	{
		slug: 'syarat-wajib-fidyah-panduan-lengkap-untuk-umat-muslim',
		title: 'Syarat Wajib Fidyah: Panduan Lengkap untuk Umat Muslim',
		excerpt:
			'Panduan lengkap mengenai syarat-syarat yang membuat seseorang wajib menunaikan fidyah sebagai pengganti puasa Ramadhan.',
		image: '/images/blog 5.png',
		date: '17 Desember 2025',
		author: 'Hilda Asani Mustika',
		authorPhoto: '/images/profil%20blog.png',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Fidyah merupakan salah satu bentuk keringanan yang Allah berikan kepada hambanya yang tidak dapat melaksanakan puasa dengan alasan tertentu. Fidyah sendiri bentuk ibadah pengganti puasa Ramadhan biasanya dengan memberi makan kepada orang miskin.',
			},
			{
				type: 'p',
				text: 'Meskipun ada beberapa orang yang tidak bisa melaksanakan puasa, tetapi tidak semuanya boleh menggantinya dengan membayar fidyah. Lantas apa saja syarat wajib fidyah? Ini penjelasan lengkapnya, simak baik-baik!',
			},
			{ type: 'h2', text: 'Syarat Wajib Fidyah' },
			{ type: 'p', text: 'Berikut ini syarat-syarat yang harus dipenuhi dalam membayar fidyah:' },
			{ type: 'h3', text: '1. Beragama Islam' },
			{
				type: 'p',
				text: 'Syarat yang pertama kewajiban fidyah adalah beragama Islam. Fidyah merupakan salah satu bentuk ibadah yang hanya berlaku bagi umat Muslim sebagai pengganti puasa Ramadhan yang telah ditinggalkan. Oleh karenanya, non muslim tidak diwajibkan membayar fidyah.',
			},
			{ type: 'h3', text: '2. Baligh' },
			{
				type: 'p',
				text: 'Selanjutnya, fidyah hanya diwajibkan bagi umat Muslim yang telah mencapai usia baligh dan sudah dikenai kewajiban puasa.',
			},
			{
				type: 'note',
				label: 'Inilah 5 Kesalahan Membayar Fidyah yang Paling Sering Terjadi, Simak Penjelasannya!',
				href: '/blog/5-kesalahan-membayar-fidyah',
			},
			{ type: 'h3', text: "3. Tidak Mampu Berpuasa Karena Alasan Syar'i" },
			{
				type: 'p',
				text: "Yang dimaksud tidak mampu berpuasa karena alasan syar'i adalah kondisi ketika seseorang memiliki udzur yang dibenarkan dalam Islam sehingga tidak dapat menjalankan puasa Ramadhan sebagaimana mestinya. Adapun alasan syar'i yang diperbolehkan untuk bayar fidyah antara lain:",
			},
			{ type: 'ol', items: ['Lansia Tua Renta', 'Ibu Hamil atau Menyusui', 'Orang yang Sakit Keras'] },
			{ type: 'h3', text: '4. Tidak Mampu Puasa Secara Permanen' },
			{
				type: 'p',
				text: 'Syarat terakhir yakni golongan yang tidak mampu berpuasa secara permanen di masa mendatang baik dikarenakan sakit kronis maupun lansia.',
			},
			{
				type: 'p',
				text: 'Memahami syarat wajib fidyah sangatlah penting karena berkaitan dengan pengganti ibadah wajib yang harus ditunaikan. Fidyah bisa dibayarkan dalam bentuk makanan ataupun uang dengan besaran yang berbeda-beda.',
			},
			{
				type: 'cta',
				text: 'Kami memfasilitasi siapapun yang ingin menunaikan fidyah dengan mudah melalui bayarfidyah.com, yuk segera tuntaskan kewajiban Anda sebelum Ramadhan tiba!',
			},
			{
				type: 'p',
				text: 'Bayarfidyah.com siap menerima titipan dana fidyah dan menyalurkan kepada orang-orang yang berhak dan membutuhkan.',
			},
			{
				type: 'p',
				text: 'Semoga Allah menerima ibadah yang telah kita semua tunaikan, serta membawa keberkahan hidup sampai kapanpun.',
			},
			{
				type: 'note',
				label: 'Kapan Waktu Membayar Fidyah yang Tepat? Jangan Sampai Terlewatkan',
				href: '/blog/waktu-membayar-fidyah-yang-tepat',
			},
		],
	},
	{
		slug: 'hukum-menggabungkan-fidyah-dan-zakat-fitrah',
		title: 'Hukum Menggabungkan Fidyah dan Zakat Fitrah, Bolehkah Disalurkan Sekaligus?',
		excerpt:
			'Fidyah dan zakat fitrah kerap ditunaikan pada waktu yang berdekatan. Apakah keduanya boleh digabung dalam satu penyaluran?',
		image: '/images/blog 6.png',
		date: '9 Desember 2025',
		author: 'Hilda Asani Mustika',
		authorPhoto: '/images/profil%20blog.png',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Menjelang akhir Ramadhan, umat muslim mulai melakukan persiapan untuk membayar zakat fitrah dan fidyah (bagi sebagian kalangan). Tak sedikit dari mereka yang bertanya-tanya bagaimana hukum menggabungkan fidyah dan zakat fitrah? Apakah boleh disalurkan sekaligus?',
			},
			{
				type: 'p',
				text: 'Di balik dua ibadah yang sama-sama membantu fakir miskin, ternyata ada aturan fiqih yang tidak boleh disepelekan. Justru disinilah letak hal yang sering membuat orang keliru tanpa mereka sadari. Simak ulasan berikut ini!',
			},
			{ type: 'h2', text: 'Hukum Menggabungkan Fidyah dan Zakat Fitrah' },
			{
				type: 'p',
				text: 'Secara syariat, ibadah fidyah ataupun zakat fitrah adalah dua ibadah yang berbeda baik dari tujuan, kadar yang harus ditunaikan, sampai dengan niat yang dilafalkan.',
			},
			{ type: 'h3', text: '1. Tujuan' },
			{
				type: 'p',
				text: "Dari segi tujuan, fidyah dilakukan untuk mengganti puasa Ramadhan yang telah ditinggalkan. Dengan begitu, tidak semua orang bisa menunaikan fidyah tanpa adanya alasan syar'i.",
			},
			{
				type: 'p',
				text: 'Sementara zakat fitrah bertujuan untuk mensucikan jiwa dan membahagiakan fakir miskin di hari raya Idul Fitri.',
			},
			{ type: 'h3', text: '2. Kadar' },
			{
				type: 'p',
				text: 'Selain tujuan yang berbeda, kadar dari keduanya pun berbeda jauh. Fidyah dibayarkan senilai 1 mud (775 gram atau 0,75 kg) gandum atau makanan pokok per-hari.',
			},
			{
				type: 'p',
				text: "Sementara besaran yang ditunaikan untuk zakat fitrah sebanyak 1 sha' (2,5 kg atau 3,5 liter beras)",
			},
			{ type: 'note', label: 'Bolehkah Membayar Fidyah dengan Uang?' },
			{ type: 'h3', text: '3. Niat Ibadah Tidak Dapat Disatukan' },
			{
				type: 'p',
				text: 'Dalam kaidah fiqh disebutkan bahwa dua ibadah wajib yang berbeda tidak bisa digabungkan dalam satu niat.',
			},
			{
				type: 'p',
				text: 'Oleh karenanya, fidyah dan zakat fitrah tidak boleh digabungkan menjadi satu ibadah atau satu pembayaran. Kedua ibadah ini boleh disalurkan di waktu yang sama selama kadar dan niatnya berbeda.',
			},
			{
				type: 'p',
				text: 'Nah begitulah hukum menggabungkan fidyah dan zakat fitrah, keduanya boleh disalurkan sekaligus di waktu yang sama selama niat dan kadar yang dikeluarkan berbeda (sesuai dengan yang telah disyariatkan).',
			},
			{
				type: 'cta',
				text: 'Bagi Anda yang ingin mengganti puasa yang telah ditinggalkan dengan fidyah bisa kunjungi laman bayarfidyah.com. Kami juga menyediakan pembayaran zakat fitrah di laman bayarzakat.com.',
			},
			{
				type: 'p',
				text: 'Dana yang Anda titipkan akan disalurkan untuk mereka yang membutuhkan dan sesuai dengan ketentuan syariat secara aman, transparan, serta amanah.',
			},
			{ type: 'p', text: 'Segera tunaikan kewajibanmu, jangan sampai terlewatkan!' },
			{ type: 'note', label: 'Berapa Bayar Fidyah Puasa? Ini Cara Hitungnya Sesuai Syariat!' },
		],
	},
	{
		slug: 'inilah-5-kelebihan-bayar-fidyah-online',
		title: 'Inilah 5 Kelebihan Bayar Fidyah Online! Jadi Tunggu Apa Lagi?',
		excerpt:
			'Membayar fidyah kini lebih mudah dan praktis secara online. Ketahui berbagai kelebihan dan kemudahannya di sini.',
		image: '/images/blog 7.png',
		date: '2 Desember 2025',
		author: 'Yayasan Alfatihah',
		authorPhoto: '/images/logo%20profil%20icon.png',
		writer: 'Hilda Asani Mustika',
		editor: 'Suci Wulandari',
		content: [
			{
				type: 'p',
				text: "Bayarfidyah.com – Menunaikan fidyah merupakan sebuah kewajiban yang wajib dipenuhi oleh umat muslim yang tidak mampu berpuasa karena udzur syar'i. Di masa lalu, pembayaran fidyah dilakukan secara langsung dengan memberikan makanan kepada fakir miskin.",
			},
			{
				type: 'p',
				text: 'Seiring berkembangnya zaman, teknologi digital semakin canggih sehingga menghadirkan kemudahan baru termasuk dalam menunaikan fidyah. Inilah kelebihan bayar fidyah online!',
			},
			{ type: 'h2', text: 'Kelebihan Bayar Fidyah Online' },
			{ type: 'p', text: 'Inilah kelebihan membayar fidyah secara online:' },
			{ type: 'h3', text: '1. Menghemat Waktu dan Tenaga' },
			{
				type: 'p',
				text: 'Salah satu kelebihan utama bayar fidyah secara online adalah efisiensi waktu dan tenaga. Dengan adanya layanan fidyah online, cukup melalui smartphone atau komputer kewajiban dapat tertunaikan.',
			},
			{
				type: 'p',
				text: 'Selain itu, fidyah bisa dilakukan dimana saja dan kapan saja sehingga tidak harus datang langsung ke lembaga amil terutama bagi para pekerja keras, tinggal jauh dari lembaga amil, dan kesulitan lainnya.',
			},
			{ type: 'h3', text: '2. Transparan dan Aman' },
			{
				type: 'p',
				text: 'Keunggulan dari bayar fidyah online yaitu transparan dan terjamin keamanannya. Platform fidyah online pada umumnya dikelola oleh lembaga amil atau mitra resmi terpercaya. Setiap pembayaran selalu disertakan dengan bukti transaksi.',
			},
			{ type: 'h3', text: '3. Banyak Pilihan Metode Pembayaran' },
			{
				type: 'p',
				text: 'Platform pembayaran fidyah secara online biasanya menyediakan berbagai macam metode pembayaran dari mulai m-banking, transfer, maupun dompet digital sehingga bisa melakukan pembayaran secara fleksibel.',
			},
			{ type: 'h3', text: '4. Tepat Sasaran' },
			{
				type: 'p',
				text: 'Melalui lembaga atau yayasan online terpercaya, fidyah disalurkan kepada penerima yang berhak seperti, fakir miskin ataupun lansia yang membutuhkan. Hal ini untuk memastikan fidyah tersalurkan dengan baik dan tepat sasaran.',
			},
			{ type: 'note', label: 'Berapa Bayar Fidyah Puasa? Ini Cara Hitungnya Sesuai Syariat!' },
			{ type: 'h3', text: '5. Menjangkau Lebih Banyak Manfaat' },
			{
				type: 'p',
				text: 'Pembayaran fidyah melalui online ini memungkinkan lembaga untuk menyalurkan fidyah ke berbagai penerima manfaat termasuk ke daerah-daerah terpencil yang jauh dari jangkauan. Dengan begitu, manfaatnya bisa dirasakan lebih luas bagi mereka yang membutuhkan.',
			},
			{
				type: 'p',
				text: 'Demikian 5 kelebihan bayar fidyah online dari mulai menghemat waktu dan tenaga sampai dengan jangkauan penerima manfaatnya lebih luas. Di era digital ini, kemudahan teknologi membuka jalan untuk memberikan kemudahan dalam menunaikan kewajiban tanpa mengurangi pahala sedikit pun.',
			},
			{
				type: 'cta',
				text: 'Bagi Anda yang ingin melaksanakan kewajiban fidyah bisa melalui bayarfidyah.com, platform online terpercaya yang dikelola oleh Yayasan Alfatihah menyediakan pembayaran fidyah dengan mudah. Insya Allah setiap fidyah yang Anda tunaikan memberikan banyak manfaat untuk penerima dan membawa keberkahan bagi pemberi.',
			},
		],
	},
	{
		slug: 'waktu-membayar-fidyah-yang-tepat',
		title: 'Kapan Waktu Membayar Fidyah yang Tepat? Jangan Sampai Terlewat!',
		excerpt:
			"Waktu penunaian fidyah memiliki ketentuan tersendiri agar sah dan tepat sasaran. Jangan sampai terlewat, simak penjelasan lengkapnya.",
		image: '/images/blog 8.png',
		date: '27 November 2025',
		author: 'Yayasan Alfatihah',
		authorPhoto: '/images/logo%20profil%20icon.png',
		writer: 'Hilda Asani Mustika',
		editor: 'Suci Wulandari',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Bagi sebagian orang membayar fidyah tampak sepele, namun banyak yang bingung kapan waktu tepat untuk menunaikannya. Apakah fidyah harus langsung dibayar saat tertinggal puasa atau masih ada tenggat khusus yang diperbolehkan?',
			},
			{
				type: 'p',
				text: 'Mengetahui batasan waktu pembayaran fidyah bukan sekedar urusan formalitas, tetapi juga penting agar ibadah tetap sah dan bernilai. Di artikel ini, kita akan mengulas kapan waktu membayar fidyah yang tepat dan tips praktis agar tidak terlewat.',
			},
			{ type: 'h2', text: 'Waktu Membayar Fidyah yang Tepat' },
			{ type: 'p', text: 'Inilah waktu yang tepat untuk membayar fidyah:' },
			{ type: 'h3', text: '1. Sejak Hari Puasa Ditinggalkan' },
			{
				type: 'p',
				text: "Para ulama membolehkan membayar fidyah pada hari itu juga setelah matahari terbenam dimana dia tidak berpuasa karena alasan syar'i, atau boleh dikumpulkan dahulu sampai bulan Ramadhan berakhir kemudian membayarnya sebesar jumlah hari yang telah ditinggalkan.",
			},
			{ type: 'note', label: 'Cara Bayar Fidyah Sesuai Syariat Islam, Ini Penjelasan Lengkapnya!' },
			{ type: 'h3', text: '2. Setelah Ramadhan' },
			{
				type: 'p',
				text: 'Jika Ramadhan telah berlalu, fidyah tetap sah ditunaikan setelah bulan Ramadhan berlalu. Namun lebih diutamakan apabila fidyah dibayarkan sesegera mungkin agar tidak menumpuk kewajiban.',
			},
			{ type: 'h3', text: '3. Sebelum Ramadhan Berikutnya' },
			{
				type: 'p',
				text: 'Fidyah harus sudah ditunaikan sebelum memasuki Ramadhan berikutnya karena termasuk kewajiban ibadah. Menunda fidyah tanpa alasan sampai dengan tahun berikutnya dapat menambah dosa dan kewajiban. Oleh karena itu, para ulama menekankan pentingnya segera menunaikan fidyah sebelum datangnya Ramadhan berikutnya, agar tanggungan tidak menumpuk.',
			},
			{
				type: 'p',
				text: 'Menunaikan fidyah tepat waktu merupakan bentuk ketaatan kepada Allah dan kepedulian antar sesama melalui pemberian makanan kepada yang membutuhkan.',
			},
			{
				type: 'p',
				text: 'Setiap makanan yang Anda keluarkan menjadi wasilah kebaikan yang terus mengalir, membantu mereka yang membutuhkan sekaligus menggugurkan kewajiban puasa yang tidak mampu ditunaikan.',
			},
			{
				type: 'p',
				text: "Jika Anda termasuk orang yang memiliki udzur syar'i seperti lansia, sakit parah menahun, atau kondisi lainnya yang tidak memungkinkan puasa atau menggantinya, segera tunaikan dan jangan tunda lagi.",
			},
			{
				type: 'cta',
				text: 'Anda bisa menunaikan fidyah di bayarfidyah.com, platform terpercaya dengan berbagai macam metode pembayaran sehingga memudahkan dalam menunaikan kewajiban. Tak hanya itu, fidyah dari anda disalurkan dengan transparan dan tepat sasaran sesuai ketentuan Islam.',
			},
			{ type: 'note', label: 'Hikmah Fidyah: Mengganti Puasa dengan Kebaikan dan Kepedulian' },
		],
	},
	{
		slug: '5-kesalahan-membayar-fidyah',
		title: 'Inilah 5 Kesalahan Membayar Fidyah yang Paling Sering Terjadi, Simak Penjelasannya!',
		excerpt:
			'Masih banyak yang keliru saat menunaikan fidyah. Kenali 5 kesalahan umum ini agar fidyah Anda sah dan tepat sasaran.',
		image: '/images/blog 9.png',
		date: '14 November 2025',
		author: 'Yayasan Alfatihah',
		authorPhoto: '/images/logo%20profil%20icon.png',
		writer: 'Hilda Asani Mustika',
		editor: 'Ghina Shelda Aprelka',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Bayar fidyah merupakan amalan yang dapat meringankan dan menutup kekurangan seorang muslim dalam beribadah. Sayangnya, banyak orang yang tanpa sadar melakukan kesalahan dalam membayar fidyah.',
			},
			{ type: 'note', label: 'Berapa Bayar Fidyah Puasa? Ini Cara Hitungnya Sesuai Syariat!' },
			{
				type: 'p',
				text: 'Kesalahan kecil ini sering luput dari perhatian tapi berpengaruh terhadap keabsahan fidyah yang ditunaikan. Nah untuk menghindari kesalahan tersebut, kita harus mengetahui apa saja kesalahan dalam membayar fidyah yang sering terjadi untuk dijadikan sebagai pembelajaran.',
			},
			{ type: 'h2', text: 'Kesalahan dalam Membayar Fidyah' },
			{ type: 'h3', text: '1. Tidak Mengetahui Ketentuan Jumlah Fidyah yang Benar' },
			{
				type: 'p',
				text: 'Kesalahan umum yang paling sering terjadi dalam membayar fidyah adalah tidak mengetahui ketentuan jumlah fidyah yang benar. Banyak orang yang salah dalam menghitung fidyah sehingga terkadang kelebihan atau bahkan tidak sesuai dengan ketentuan syariat.',
			},
			{ type: 'h3', text: '2. Membayar Fidyah Tanpa Niat' },
			{
				type: 'p',
				text: 'Seringkali fidyah dibayarkan tanpa diawali dengan niat yang jelas dalam hati. Padahal, niat merupakan syarat utama yang menentukan sah atau tidaknya sebuah ibadah. Ketika fidyah dibayarkan hanya sekedar menggugurkan kewajiban, maka nilai ibadahnya pun akan berkurang.',
			},
			{ type: 'h3', text: '3. Membayar Fidyah Terlambat' },
			{
				type: 'p',
				text: 'Dalam islam, menunda membayar fidyah tanpa adanya alasan yang jelas sangat tidak dibenarkan karena dapat mengurangi pahala ibadah. Fidyah sebaiknya ditunaikan sesegera mungkin setelah mengetahui bahwa orang tersebut tidak mampu untuk melaksanakan ibadah puasa atau menggantinya di hari lain.',
			},
			{ type: 'h3', text: '4. Memberikan Fidyah dalam Bentuk yang Tidak Sesuai' },
			{
				type: 'p',
				text: 'Fidyah semestinya berupa makanan pokok yang layak atau nilai yang setara dengan makanan tersebut. Pastikan agar memberikan fidyah sesuai dengan ketentuan yang berlaku dalam Islam.',
			},
			{ type: 'h3', text: '5. Tidak Menentukan Sasaran Penerima yang Tepat' },
			{
				type: 'p',
				text: 'Fidyah wajib diberikan kepada fakir miskin, yaitu mereka yang benar-benar membutuhkan bantuan untuk mencukupi kebutuhan pokoknya. Memberikan fidyah kepada orang yang mampu atau ke lembaga yang tidak jelas dalam penyalurannya, membuat kewajiban fidyah tidak terpenuhi dengan sempurna.',
			},
			{
				type: 'p',
				text: 'Demikian lima kesalahan dalam membayar fidyah yang sering terjadi, baik karena kurangnya pengetahuan maupun kelalaian dalam pelaksanaannya. Oleh karenanya, sebelum menunaikan fidyah pastikan terlebih dahulu sudah memahami ketentuan syariat yang berlaku agar ibadah ini dapat memberikan manfaat maksimal bagi yang membutuhkan dan bernilai pahala di setiap butirnya.',
			},
		],
	},
	{
		slug: 'hukum-dan-ketentuan-fidyah-bagi-ibu-hamil',
		title: 'Hukum dan Ketentuan Fidyah Bagi Ibu Hamil dalam Islam, Ini Penjelasan Lengkapnya!',
		excerpt:
			'Ibu hamil dan menyusui memiliki keringanan khusus terkait puasa Ramadhan. Simak hukum dan ketentuan fidyah bagi mereka.',
		image: '/images/blog 10.png',
		date: '7 November 2025',
		author: 'Yayasan Alfatihah',
		authorPhoto: '/images/logo%20profil%20icon.png',
		writer: 'Hilda Asani Mustika',
		editor: 'Ghina Shelda Aprelka',
		content: [
			{
				type: 'p',
				text: 'Bayarfidyah.com – Bagi seorang perempuan, kehamilan merupakan momentum yang sangat ditunggu-tunggu dengan penuh kebahagiaan. Namun, tak jarang ibu hamil juga merasa dilema saat bulan Ramadhan tiba dalam kondisi sedang mengandung buah hati. Kekhawatiran terhadap kesehatan janin, kebutuhan nutrisi, serta nasihat dari dokter kerap membuat calon ibu tidak dapat menunaikan ibadah puasa.',
			},
			{
				type: 'p',
				text: 'Mengingat kondisi tersebut, Islam memberikan rukhsah (keringanan) bagi ibu hamil untuk meninggalkan puasa apabila tidak mampu berpuasa. Lalu, Apakah harus menggantinya? Apakah wajib membayar fidyah dan qadha puasa?',
			},
			{
				type: 'p',
				text: 'Nah, untuk mengetahui hukum dan ketentuan fidyah ibu hamil, mari kita selami bersama panduan lengkap ini agar tidak ada lagi keraguan.',
			},
			{ type: 'h2', text: 'Hukum Asal Puasa Bagi Ibu Hamil' },
			{
				type: 'p',
				text: 'Dalam syariat Islam, puasa ramadhan merupakan ibadah yang wajib ditunaikan oleh setiap muslim yang sudah baligh dan mampu. Kewajiban tersebut juga berlaku bagi ibu hamil selama tidak membahayakan dirinya maupun janinnya dan mampu untuk melaksanakannya. Jadi hukum asal puasa bagi ibu hamil adalah wajib.',
			},
			{
				type: 'p',
				text: 'Sebaliknya, jika dengan berpuasa dikhawatirkan dapat membahayakan kesehatan ibu maupun janinnya, maka boleh untuk meninggalkan puasa tersebut. Namun sebagai penggantinya, ibu hamil tetap dikenai kewajiban untuk meng-qadha sejumlah hari yang ditinggalkan dan membayar fidyah.',
			},
			{ type: 'p', text: 'Hal ini berlandaskan pada hadits Rasulullah SAW:' },
			{
				type: 'quote',
				text: '"Wanita hamil dan menyusui, jika takut terhadap anak-anaknya, maka mereka berbuka dan memberi makan orang miskin." (HR. Abu Dawud)',
			},
			{ type: 'h2', text: 'Ketentuan Qadha dan Fidyah Bagi Ibu Hamil' },
			{ type: 'h3', text: '1. Wajib Qadha Puasa Saja' },
			{
				type: 'p',
				text: 'Dalam syariat Islam, jika ibu hamil khawatir pada kondisi dirinya saja misalnya lemas, mual secara keterusan, dan lain sebagainya. Maka hanya diwajibkan untuk mengganti (meng-qadha) puasa, tentu setelah kondisi fisiknya sudah membaik dan memungkinkan untuk melaksanakan puasa.',
			},
			{
				type: 'p',
				text: 'Sebagaimana yang dijelaskan oleh Syekh Khatib As-Syirbini dalam karyanya yang berjudul Mugnil Muhtaj',
			},
			{
				type: 'quote',
				text: '"Adapun ibu hamil dan dan ibu menyusui yang tidak berpuasa, jika (alasannya karena) khawatir pada kesehatan mereka saja atau kesehatan mereka dan anaknya, maka kewajibannya mangganti (qadha) puasa tanpa membayar fidyah. Jika khawatir hanya pada anaknya, maka kewajibannya adalah qadha puasa disertai fidyah" (Khatib As-Syirbini, Mugnil Muhtaj, {Beirut, Darul Ma\'rifah: 1997 M} jilid 1).',
			},
			{ type: 'h3', text: '2. Wajib Qadha dan Membayar Fidyah Sekaligus' },
			{
				type: 'p',
				text: "Dalam pandangan madzhab Syafi'i dan Hanbali, jika wanita hamil atau menyusui tidak berpuasa karena khawatir terhadap kondisi janinnya misalkan, keguguran. Maka dikenai kewajiban untuk meng-qadha puasa dan membayar fidyah sejumlah hari yang telah ditinggalkan.",
			},
			{
				type: 'p',
				text: 'Begitu pula jika ibu hamil mengkhawatirkan kondisi janinnya saja, maka ia tetap dikenai kewajiban melaksanakan keduanya yaitu meng-qadha puasa dan membayar fidyah.',
			},
			{
				type: 'p',
				text: 'Ibnu Umar Ra ketika ditanya tentang seorang wanita hamil yang mengkhawatirkan anaknya, maka beliau berkata, "Berbuka dan gantinya memberi makan satu mud gandum setiap harinya kepada orang miskin." (Al-Baihaqi dalam Sunan dari Imam Syafi\'i, sanadnya shahih).',
			},
			{
				type: 'p',
				text: 'Demikianlah penjelasan mengenai hukum dan ketentuan membayar fidyah bagi ibu hamil. Semoga penjelasan ini dapat memberikan pencerahan dan ketenangan bagi para ibu hamil yang mungkin masih ada keraguan terkait kewajiban yang harus ditunaikannya.',
			},
			{
				type: 'p',
				text: 'Islam merupakan agama yang penuh rahmat dan kemudahan, salah satunya dengan adanya fidyah yang memberikan kemudahan bagi mereka yang tidak mampu untuk melaksanakan ibadah puasa.',
			},
			{
				type: 'cta',
				text: 'Kini pembayaran fidyah dapat dilakukan dengan lebih mudah dan aman. Tunaikan fidyah secara praktis melalui bayarfidyah.com, platform terpercaya yang melayani pembayaran fidyah secara online, cepat, dan sesuai syariat.',
			},
		],
	},
];

export function getLatestPosts(limit = 6): BlogPost[] {
	return blogPosts.slice(0, limit);
}
