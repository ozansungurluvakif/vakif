import { Link, useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useEffect } from 'react'

const Footer = () => {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="col-span-1 md:col-span-2 flex items-center space-x-8">
            <Link to='/'>
            <img src="/1.png" alt="Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı" className="w-80 h-40 object-contain rounded-lg shadow" />
            </Link>  
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hakkimizda" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/ozan-sungurlu" className="text-gray-300 hover:text-white transition-colors">
                  Ozan Sungurlu Kimdir
                </Link>
              </li>
              <li>
                <Link to="/kurulus-amaci" className="text-gray-300 hover:text-white transition-colors">
                Kuruluş Amacı
                </Link>
              </li>  
              <li>
                <Link to="/kurul-uyeleri" className="text-gray-300 hover:text-white transition-colors">
                  Kurul Üyeleri
                </Link>
              </li>
              <li>
                <Link to="/burs-basvuru" className="text-gray-300 hover:text-white transition-colors">
                  Burs Başvuru
                </Link>
              </li>
              <li>
                <Link to="/uyelik-basvuru" className="text-gray-300 hover:text-white transition-colors">
                  Üyelik Başvuru
                </Link>
              </li>
              <li>
                <Link to="/donation" className="text-gray-300 hover:text-white transition-colors">
                  Bağış
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Adres bilgisi buraya gelecek</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+90 (312) 000 00 00</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">info@ozansungurluvakfi.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 