'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Shield, Users, TrendingUp, Building2, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
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
                <a href="#beranda" className="text-blue-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Beranda</a>
                <a href="#tentang" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Tentang Kami</a>
                <a href="#layanan" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Layanan</a>
                <a href="#kontak" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Kontak</a>
                <a href="/privacy" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Terms & Conditions</a>
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
              <a href="#beranda" className="text-blue-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Tentang Kami</a>
              <a href="#layanan" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Privacy Policy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Terms & Conditions</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KOPERASI SIMPAN PINJAM
              <span className="block text-yellow-400 mt-2">AGUNG KARYA MANDIRI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Mitra Terpercaya untuk Kesejahteraan Ekonomi Anggota
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors">
                Simulasi Pinjaman
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Menjadi Anggota
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-white" viewBox="0 0 1440 48" fill="currentColor">
            <path d="M0,48 L1440,48 L1440,0 C1200,32 960,32 720,0 C480,32 240,32 0,0 L0,48 Z"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koperasi Simpan Pinjam Agung Karya Mandiri adalah lembaga keuangan yang berkomitmen untuk meningkatkan kesejahteraan ekonomi anggota melalui produk simpanan dan pinjaman yang adil dan menguntungkan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Terpercaya</h3>
              <p className="text-gray-600">Berizin resmi dan diawasi oleh pemerintah, menjaga keamanan dana anggota dengan prinsip transparansi.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Profesional</h3>
              <p className="text-gray-600">Dikelola oleh tim profesional yang berpengalaman di bidang koperasi dan lembaga keuangan.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Berkembang</h3>
              <p className="text-gray-600">Terus berkembang untuk memberikan layanan terbaik dan mendukung pertumbuhan ekonomi anggota.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Produk simpanan dan pinjaman yang disesuaikan dengan kebutuhan anggota
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Simpanan</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Simpanan Pokok dengan bunga kompetitif</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Simpanan Wajib untuk keanggotaan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Simpanan Sukarela dengan fleksibilitas tinggi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Deposito Berjangka dengan return optimal</span>
                </li>
              </ul>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Info Lebih Lanjut
              </button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Pinjaman</h3>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pinjaman Produktif untuk usaha</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pinjaman Konsumtif dengan bunga rendah</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pinjaman Modal Kerja fleksibel</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Proses cepat dan syarat mudah</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Ajukan Sekarang
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-xl text-blue-100">
              Siap membantu kebutuhan finansial Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-blue-100">JL. PERMANDIAN BAROMBONG, Desa/Kelurahan Barombong, Kec. Tamalate, Kota Makassar, Provinsi Sulawesi Selatan</p>
                    <p className="text-blue-100">Kode Pos: 90225</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-blue-100">082382466214</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">info@koperasiagungkaryamandiri.co.id</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-yellow-400 mr-4" />
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-blue-100">Senin - Jumat: 08:00 - 17:00</p>
                    <p className="text-blue-100">Sabtu: 08:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400" placeholder="Masukkan nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea rows="4" className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300 focus:outline-none focus:border-yellow-400" placeholder="Tulis pesan Anda..."></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors">
                  Kirim Pesan
                </button>
              </form>
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
                  <ChevronRight className="h-5 w-5" />
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