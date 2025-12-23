'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, Scale, Users, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Koperasi Agung Karya Mandiri" 
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="ml-3">
                  <div className="text-sm font-bold text-blue-900">KOPERASI SIMPAN PINJAM</div>
                  <div className="text-lg font-bold text-blue-600">AGUNG KARYA MANDIRI</div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-blue-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Tentang Kami</Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Layanan</Link>
                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</Link>
                <Link href="/privacy" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Privacy Policy</Link>
                <span className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">Terms & Conditions</span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-blue-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Beranda</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Tentang Kami</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Layanan</Link>
              <Link href="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Kontak</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Privacy Policy</Link>
              <span className="text-blue-600 block px-3 py-2 text-base font-medium border-l-4 border-blue-600">Terms & Conditions</span>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/" className="text-blue-200 hover:text-white mr-4">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <div className="flex items-center">
              <FileText className="h-12 w-12 text-yellow-400 mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
                <p className="text-blue-100 mt-2">Syarat dan Ketentuan KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-blue max-w-none">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Syarat dan Ketentuan</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Selamat datang di <strong>KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</strong>. Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan yang diuraikan di bawah ini.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-blue-900 font-semibold mb-2">
                  Terakhir Diperbarui: 1 Januari 2024
                </p>
                <p className="text-blue-800">
                  Syarat dan ketentuan ini mengatur penggunaan semua layanan yang disediakan oleh KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI.
                </p>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-600" />
                Keanggotaan
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Persyaratan Keanggotaan</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Warga Negara Indonesia yang berusia minimal 21 tahun</li>
                  <li>Memiliki KTP yang masih berlaku</li>
                  <li>Memiliki penghasilan tetap atau usaha yang berjalan</li>
                  <li>Menyetujui dan menandatangani anggaran dasar koperasi</li>
                  <li>Melunasi simpanan pokok dan simpanan wajib</li>
                  <li>Melengkapi semua dokumen persyaratan yang diminta</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Hak dan Kewajiban Anggota</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-2">Hak Anggota:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                      <li>Menggunakan semua layanan koperasi</li>
                      <li>Hadir dan bersuara dalam rapat anggota</li>
                      <li>Memilih dan dipilih sebagai pengurus</li>
                      <li>Menerima SHU sesuai dengan ketentuan</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-900 mb-2">Kewajiban Anggota:</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm ml-4">
                      <li>Mematuhi anggaran dasar dan rumah tangga</li>
                      <li>Partisipasi dalam kegiatan koperasi</li>
                      <li>Menjalankan kewajiban keuangan</li>
                      <li>Menjaga nama baik koperasi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-2 text-blue-600" />
                Simpanan
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Jenis Simpanan</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li><strong>Simpanan Pokok:</strong> Sekaligus saat pertama kali bergabung, tidak dapat ditarik kembali</li>
                  <li><strong>Simpanan Wajib:</strong> Dibayarkan setiap bulan sesuai dengan ketentuan</li>
                  <li><strong>Simpanan Sukarela:</strong> Dapat disetor kapan saja dengan jumlah fleksibel</li>
                  <li><strong>Deposito Berjangka:</strong> Simpanan dengan jangka waktu tertentu dan bunga kompetitif</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Gavel className="h-6 w-6 mr-2 text-blue-600" />
                Pinjaman
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Persyaratan Pinjaman</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Menjadi anggota koperasi minimal 6 bulan</li>
                  <li>Memiliki simpanan yang memadai</li>
                  <li>Memiliki kemampuan membayar angsuran</li>
                  <li>Menyerahkan dokumen persyaratan lengkap</li>
                  <li>Menyediakan jaminan sesuai dengan ketentuan</li>
                  <li>Lolos proses analisis kredit</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Ketentuan Pinjaman</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Plafon pinjaman maksimal 20x dari simpanan</li>
                  <li>Jangka waktu pinjaman maksimal 60 bulan</li>
                  <li>Suku bunga kompetitif sesuai dengan ketentuan</li>
                  <li>Angsuran dibayarkan tepat waktu setiap bulan</li>
                  <li>Denda keterlambatan 0.5% per hari dari tunggakan</li>
                  <li>Pelunasan dipercepat tanpa penalti</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-blue-600" />
                Larangan dan Sanksi
              </h3>
              
              <div className="bg-red-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-red-900 mb-3">Larangan</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Menyediakan data palsu atau informasi yang menyesatkan</li>
                  <li>Menyalahgunakan pinjaman untuk tujuan ilegal</li>
                  <li>Memindahkan hak dan kewajiban keanggotaan tanpa persetujuan</li>
                  <li>Mengganggu kelancaran operasional koperasi</li>
                  <li>Mencemarkan nama baik koperasi</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-orange-900 mb-3">Sanksi</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Peringatan tertulis untuk pelanggaran ringan</li>
                  <li>Pembatasan sementara akses layanan</li>
                  <li>Pemutusan keanggotaan untuk pelanggaran berat</li>
                  <li>Tuntutan hukum untuk kerugian yang disebabkan</li>
                  <li>Blacklist dari sistem kredit koperasi</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Perlindungan Data</h3>
              
              <p className="text-gray-700 mb-6">
                Kami melindungi data pribadi Anda sesuai dengan Kebijakan Privasi kami. Dengan menggunakan layanan kami, Anda memberikan persetujuan untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Pengumpulan data yang diperlukan untuk layanan</li>
                <li>Verifikasi informasi yang Anda berikan</li>
                <li>Pemrosesan transaksi keuangan</li>
                <li>Komunikasi terkait layanan</li>
                <li>Kepatuhan terhadap peraturan yang berlaku</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Force Majeure</h3>
              
              <p className="text-gray-700 mb-6">
                Koperasi tidak bertanggung jawab atas keterlambatan atau kegagalan dalam melaksanakan kewajiban yang disebabkan oleh:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Bencana alam yang tidak dapat diprediksi</li>
                <li>Perang, kerusuhan, atau kondisi darurat</li>
                <li>Kebijakan pemerintah yang mempengaruhi operasional</li>
                <li>Gangguan sistem yang disebabkan pihak ketiga</li>
                <li>Pemogokan umum atau kondisi di luar kendali kami</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Perubahan Syarat dan Ketentuan</h3>
              
              <p className="text-gray-700 mb-6">
                Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Pengumuman di website resmi koperasi</li>
                <li>Surat elektronik ke anggota terdaftar</li>
                <li>Pengumuman di kantor koperasi</li>
                <li>Rapat anggota koperasi</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Penyelesaian Sengketa</h3>
              
              <p className="text-gray-700 mb-6">
                Semua sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Musyawarah untuk mencapai mufakat</li>
                <li>Mediasi dengan pihak ketiga netral</li>
                <li>Pengadilan Negeri Makassar sebagai yurisdiksi</li>
                <li>Hukum Republik Indonesia yang berlaku</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Kontak Kami</h3>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> info@koperasiagungkaryamandiri.co.id</p>
                  <p><strong>Telepon:</strong> 082382466214</p>
                  <p><strong>Alamat:</strong> JL. PERMANDIAN BAROMBONG, Desa/Kelurahan Barombong, Kec. Tamalate, Kota Makassar, Provinsi Sulawesi Selatan, Kode Pos 90225</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Pernyataan Persetujuan
                    </p>
                    <p className="text-gray-700">
                      Dengan menggunakan layanan <strong>KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</strong>, Anda menyatakan bahwa telah membaca, memahami, dan setuju untuk mematuhi semua syarat dan ketentuan yang tercantum dalam dokumen ini.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Koperasi Agung Karya Mandiri" 
                  width={32}
                  height={32}
                  className="h-8 w-auto"
                />
                <div className="ml-2">
                  <div className="text-xs font-bold text-yellow-400">KOPERASI SIMPAN PINJAM</div>
                  <div className="text-sm font-bold">AGUNG KARYA MANDIRI</div>
                </div>
              </div>
              <p className="text-blue-300 text-sm">
                Mitra terpercaya untuk kesejahteraan ekonomi anggota sejak berdiri.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Layanan</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Simpanan</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Pinjaman</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Simulasi Kredit</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Karir</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Informasi</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-blue-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><span className="text-yellow-400">Terms & Conditions</span></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-400">Newsletter</h4>
              <p className="text-blue-300 text-sm mb-4">
                Dapatkan informasi terbaru tentang produk dan layanan kami.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-4 py-2 rounded-l-lg bg-blue-900 border border-blue-800 text-white placeholder-blue-400 focus:outline-none focus:border-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-4 py-2 rounded-r-lg transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center">
            <p className="text-blue-400 text-sm">
              © 2024 KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}