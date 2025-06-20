import { Target, Heart, Users, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } })
}

const Purpose = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 py-12">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-primary-100" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="flex flex-col items-center mb-8">
            <Target className="w-14 h-14 text-primary-600 mb-2 animate-bounce" />
            <h2 className="text-4xl font-bold text-primary-700 mb-4 drop-shadow text-center">
              Kuruluş Amacımız
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg mb-6 text-center">
            Üstlendiği görev ve sorumlulukla adından söz ettiren, petrol ve doğalgaz aramacılık faaliyetlerinde gösterdiği özverili çalışmasıyla tüm çalışma arkadaşlarının takdir ettiği ve de örnek aldığı değerli büyüğümüz rahmetli Ozan Sungurlu arazi çalışmasına katılmak amacıyla yaptığı seyahat sırasında elim bir kaza geçirerek yaşamını yitirmiştir. Vefatından sonra Türkiye Petrolleri Anonim Ortaklığı Genel Müdürlüğünden (TPAO) mesai arkadaşları tarafından adının yaşatılması ve yer bilimlerinde öğrenim görmekte olan ihtiyaç sahibi öğrencilere destek olunması ile vefat etmiş ve yardıma ihtiyacı olan TPAO personeli çocuklarına destek olma amacı ile 1991 yılında Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı kurulmuştur.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <motion.div className="card text-center hover:shadow-xl transition-shadow duration-300 bg-primary-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-600 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Sosyal Sorumluluk</h3>
            <p className="text-gray-700">
              Toplumsal sorumluluk bilinciyle hareket ederek, 
              ihtiyaç sahibi öğrencilere destek olmak.
            </p>
          </motion.div>

          <motion.div className="card text-center hover:shadow-xl transition-shadow duration-300 bg-secondary-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-secondary-600 animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold text-secondary-700 mb-3">Eğitim Desteği</h3>
            <p className="text-gray-700">
              Eğitim alanında kaliteli hizmet sunarak, 
              öğrencilerin potansiyellerini gerçekleştirmelerine yardımcı olmak.
            </p>
          </motion.div>

          <motion.div className="card text-center hover:shadow-xl transition-shadow duration-300 bg-primary-50" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary-600 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold text-primary-700 mb-3">Kültürel Gelişim</h3>
            <p className="text-gray-700">
              Kültür ve sanat alanında projeler geliştirerek, 
              toplumun kültürel gelişimine katkı sağlamak.
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="bg-white rounded-2xl shadow-xl p-8 border border-secondary-100" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold text-secondary-700 mb-6 text-center">Hedeflerimiz</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-600 text-sm font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Eğitimde Fırsat Eşitliği</h3>
                <p className="text-gray-700">
                  Her öğrencinin, maddi durumuna bakılmaksızın kaliteli eğitim alabilmesini sağlamak.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-600 text-sm font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Başarılı Öğrenciler</h3>
                <p className="text-gray-700">
                  Akademik başarısı yüksek öğrencileri destekleyerek, topluma faydalı bireyler yetiştirmek.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-600 text-sm font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Sürdürülebilir Destek</h3>
                <p className="text-gray-700">
                  Uzun vadeli ve sürdürülebilir burs programları ile öğrencilere sürekli destek sağlamak.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-600 text-sm font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Toplumsal Gelişim</h3>
                <p className="text-gray-700">
                  Eğitimli bireyler yetiştirerek toplumun sosyal ve ekonomik gelişimine katkıda bulunmak.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Purpose 