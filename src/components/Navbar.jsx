import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Ozan Sungurlu Kimdir', href: '/ozan-sungurlu' },
    { name: 'Kuruluş Amacı', href: '/kurulus-amaci' },
    { name: 'Kurul Üyeleri', href: '/kurul-uyeleri' },
    { name: 'Burs Başvuru', href: '/burs-basvuru' },
    { name: 'Bağış', href: '/donation' },
  ]

  return (
<nav className="bg-white shadow-md h-[100px] px-4 md:px-12 flex items-center justify-between sticky top-0 z-50">
<div className="flex items-center">
<Link to="/" className='block'>
      <img
  src="/1.png"
  alt="Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı"
  className="h-32 max-h-32 w-auto object-contain mr-10"

/>
</Link>


      </div>
      <div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
              } px-3 py-2 text-sm font-medium transition-colors duration-200`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 