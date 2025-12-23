'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, UserCheck, Database, FileText } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPage() {
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
                <span className="text-blue-600 px-3 py-2 text-sm font-medium border-b-2 border-blue-600">Privacy Policy</span>
                <Link href="/terms" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Terms & Conditions</Link>
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
              <span className="text-blue-600 block px-3 py-2 text-base font-medium border-l-4 border-blue-600">Privacy Policy</span>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Terms & Conditions</Link>
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
              <Shield className="h-12 w-12 text-yellow-400 mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                <p className="text-blue-100 mt-2">Kebijakan Privasi KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</p>
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
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Kebijakan Privasi</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Di <strong>KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</strong>, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat menggunakan layanan kami.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
                <p className="text-blue-900 font-semibold mb-2">
                  Terakhir Diperbarui: 1 Januari 2024
                </p>
                <p className="text-blue-800">
                  Kebijakan ini berlaku untuk semua layanan yang disediakan oleh KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI dan dapat diperbarui dari waktu ke waktu.
                </p>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-blue-600" />
                Informasi yang Kami Kumpulkan
              </h3>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Informasi Pribadi</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Nama lengkap, tanggal lahir, dan informasi identitas lainnya</li>
                  <li>Alamat lengkap sesuai KTP</li>
                  <li>Nomor telepon dan alamat email</li>
                  <li>Nomor KTP, NPWP, dan dokumen identitas lainnya</li>
                  <li>Informasi pekerjaan dan penghasilan</li>
                  <li>Informasi rekening bank</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Informasi Keuangan</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Data simpanan dan transaksi keuangan</li>
                  <li>Riwayat pinjaman dan pembayaran</li>
                  <li>Informasi kredit dan scoring</li>
                  <li>Data agunan dan jaminan</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-blue-600" />
                Penggunaan Informasi
              </h3>
              
              <p className="text-gray-700 mb-6">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Memproses aplikasi simpanan dan pinjaman</li>
                <li>Verifikasi identitas dan penilaian kredit</li>
                <li>Memberikan layanan yang Anda minta</li>
                <li>Mengirimkan informasi penting tentang akun Anda</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Mencegah penipuan dan aktivitas ilegal</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-blue-600" />
                Keamanan Data
              </h3>
              
              <p className="text-gray-700 mb-6">
                <strong>KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</strong> berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas hanya untuk authorized personnel</li>
                <li>Sistem keamanan berlapis untuk melindungi data</li>
                <li>Audit keamanan berkala</li>
                <li>Komplain dengan standar keamanan industri</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <UserCheck className="h-6 w-6 mr-2 text-blue-600" />
                Hak Anda Sebagai Data Subject
              </h3>
              
              <p className="text-gray-700 mb-6">
                Sesuai dengan peraturan perlindungan data, Anda memiliki hak untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Mengakses data pribadi yang kami simpan</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi (jika memenuhi syarat)</li>
                <li>Membatasi pemrosesan data</li>
                <li>Memindahkan data ke penyedia layanan lain</li>
                <li>Menolak pemrosesan data untuk tujuan pemasaran</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Pembagian Informasi</h3>
              
              <p className="text-gray-700 mb-6">
                Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Namun, kami dapat membagikan informasi dalam kondisi berikut:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Dengan persetujuan Anda yang jelas</li>
                <li>Untuk mematuhi kewajiban hukum</li>
                <li>Dengan otoritas pemerintah yang berwenang</li>
                <li>Dengan mitra bisnis yang tepercaya (dengan perlindungan yang sama)</li>
                <li>Untuk melindungi hak, harta, atau keselamatan kami atau orang lain</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Cookies dan Teknologi Pelacakan</h3>
              
              <p className="text-gray-700 mb-6">
                Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies membantu kami:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis traffic website</li>
                <li>Mempersonalisasi konten</li>
                <li>Meningkatkan keamanan</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Penyimpanan Data</h3>
              
              <p className="text-gray-700 mb-6">
                Data pribadi Anda akan disimpan selama diperlukan untuk:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6 ml-4">
                <li>Memenuhi tujuan pengumpulan data</li>
                <li>Mematuhi persyaratan hukum dan peraturan</li>
                <li>Menyelesaikan perselisihan</li>
                <li>Melaksanakan perjanjian</li>
              </ul>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Perubahan Kebijakan</h3>
              
              <p className="text-gray-700 mb-6">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau email. Penggunaan berkelanjutan layanan kami berarti Anda menerima perubahan tersebut.
              </p>

              <h3 className="text-xl font-bold text-blue-900 mb-4">Kontak Kami</h3>
              
              <div className="bg-blue-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak Anda sebagai data subject, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@koperasiagungkaryamandiri.co.id</p>
                  <p><strong>Telepon:</strong> 082382466214</p>
                  <p><strong>Alamat:</strong> JL. PERMANDIAN BAROMBONG, Desa/Kelurahan Barombong, Kec. Tamalate, Kota Makassar, Provinsi Sulawesi Selatan, Kode Pos 90225</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mt-8">
                <p className="text-gray-700">
                  <strong>KOPERASI SIMPAN PINJAM AGUNG KARYA MANDIRI</strong> berkomitmen untuk melindungi privasi Anda dan memperlakukan data pribadi dengan tanggung jawab penuh. Terima kasih atas kepercayaan Anda kepada kami.
                </p>
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
                <li><span className="text-yellow-400">Privacy Policy</span></li>
                <li><a href="/terms" className="text-blue-300 hover:text-white transition-colors">Terms & Conditions</a></li>
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