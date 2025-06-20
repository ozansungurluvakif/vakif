import { Link } from 'react-router-dom'
import { ArrowRight, Users, GraduationCap, Heart, Award, BookOpen } from 'lucide-react'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { motion } from 'framer-motion'

const galleryImages = [
  { src: '/IMG_20250616_103247.jpg' },
  { src: '/RECTIFY_IMG_20250616_102906.jpg'},
  { src: '/RECTIFY_IMG_20250616_102916.jpg' },
  { src: '/RECTIFY_IMG_20250616_103003.jpg'},
  { src: '/RECTIFY_IMG_20250616_103148.jpg' },
  { src: '/RECTIFY_IMG_20250616_103317.jpg' },
  { src: '/2025gumushane.JPG' },
  { src: '/2025gumushane2.jpeg' },
]

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)
  // Show button after scrolling 300px
  useState(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition"
      aria-label="Yukarı Çık"
    >
      <ArrowRight className="rotate-[-90deg] w-6 h-6" />
    </button>
  ) : null
}

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
}

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

  return (
    <div>
      <ScrollToTop />
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl text-center">
            Eğitimde fırsat eşitliği için çalışan, gençlerin ve toplumun gelişimine katkı sağlayan bir vakıf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/burs-basvuru" className="btn-secondary inline-flex items-center justify-center hover:scale-105 hover:shadow-lg transition-transform duration-200">
              Burs Başvurusu Yap
            </Link>
            <Link to="/uyelik-basvuru" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-200 inline-flex items-center justify-center hover:scale-105 hover:shadow-lg">
              Üyelik Başvurusu
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Vakıf Özeti */}
      <motion.section className="section-padding bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Vakıf Hakkında</h2>
          <p className="text-lg text-gray-700 mb-6">
            Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı; eğitimde fırsat eşitliği sağlamak, ihtiyaç sahibi öğrencilere burs vermek, kültürel ve sosyal projelerle topluma katkı sunmak amacıyla kurulmuştur. Misyonumuz, gençlerin potansiyelini ortaya çıkarmak ve ülkemizin gelişimine destek olmaktır.
          </p>
        </div>
      </motion.section>

      {/* Misyon, Vizyon, Amaç */}
      <motion.section className="section-padding bg-gray-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <h3 className="text-xl font-bold text-primary-700 mb-2">Misyonumuz</h3>
            <p className="text-gray-700">İhtiyaç sahibi öğrencilere karşılıksız burs vererek, eğitimde fırsat eşitliği sağlamak ve yer bilimlerinde bilimsel gelişime katkıda bulunmak.</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold text-secondary-700 mb-2">Vizyonumuz</h3>
            <p className="text-gray-700">Doğal kaynakların ülke ekonomisine kazandırılması için yerli ve milli aramacılık faaliyetlerine katkı sağlayacak insan kaynağını geliştirmek.</p>
          </div>
          <div className="card text-center">
            <h3 className="text-xl font-bold text-primary-700 mb-2">Kuruluş Amacımız</h3>
            <p className="text-gray-700">Eğitim, kültür ve sosyal yardım alanlarında topluma fayda sağlamak, gençlerin gelişimine destek olmak.</p>
          </div>
        </div>
      </motion.section>

      {/* Fotoğraf Galerisi */}
      <motion.section className="section-padding bg-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Vakıf Hatıraları</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={img.src}
                className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
                onClick={() => { setPhotoIndex(idx); setLightboxOpen(true); }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <img src={img.src} alt={img.caption} className="object-cover w-full h-56 transition duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:rotate-1" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm py-1 px-2 text-center opacity-90">{img.caption}</div>
              </motion.div>
            ))}
          </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={galleryImages.map(img => ({ src: img.src, description: img.caption }))}
            index={photoIndex}
            on={{ view: ({ index }) => setPhotoIndex(index) }}
          />
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="section-padding bg-primary-600 text-white" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sen de Destek Ol!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Burs başvurusu yapabilir, vakfımıza üye olabilir veya gönüllü olarak katkı sunabilirsin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/burs-basvuru" className="btn-secondary hover:scale-105 hover:shadow-lg transition-transform duration-200">
              Burs Başvurusu Yap
            </Link>
            <Link to="/uyelik-basvuru" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-2 px-4 rounded-lg transition-colors duration-200 hover:scale-105 hover:shadow-lg">
              Üyelik Başvurusu
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home 