import { Heart, Users, Award, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } })
}

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 py-12">
      <div className="max-w-7xl mx-auto p-6">
        <motion.div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-primary-100" initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl font-bold text-center text-primary-700 mb-8 drop-shadow">Hakkımızda</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card hover:shadow-xl transition-shadow duration-300 bg-primary-50">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Heart className="h-8 w-8 text-primary-600 animate-pulse" />
              </div>
              <h3 className="text-2xl font-semibold text-primary-700 mb-3 text-center">Misyonumuz</h3>
              <p className="text-gray-700 text-center">
                Ülkemizin yer altı kaynaklarının aranması, bulunan kaynakların üretilerek ekonomiye kazandırılması hususunda görev üstlenebilecek donanıma ve sorumluluk alabilecek öz güvene sahip yer bilimci mühendislerin yetişmesine olanak sağlamak amacıyla, Yer Bilimleri dalında okuyan öğrencilere ile vefat etmiş ve yardıma ihtiyacı olan TPAO personeli çocuklarına karşılıksız burs vermek ve yer bilimleri dalının bilimsel gelişimine katkıda bulunmak.
              </p>
            </div>
            <div className="card hover:shadow-xl transition-shadow duration-300 bg-secondary-50">
              <div className="bg-secondary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Award className="h-8 w-8 text-secondary-600 animate-bounce" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary-700 mb-3 text-center">Vizyonumuz</h3>
              <p className="text-gray-700 text-center">
                Ülkemizin sahip olduğu doğal kaynakların stratejik önemine vurgu yaparak, bu kaynakların ülke ekonomisine kazandırılması hususuyla yerli ve milli aramacılık faaliyetlerine hız kazandıracak insan kaynağını keşfetmek ve bu potansiyelin gelişimine katkı koyabilmek.
              </p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-primary-700 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center card hover:shadow-xl transition-shadow duration-300 bg-primary-50">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600 animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Şeffaflık</h3>
              <p className="text-gray-700">
                Tüm faaliyetlerimizde şeffaf ve hesap verebilir olmayı ilke ediniriz.
              </p>
            </div>
            <div className="text-center card hover:shadow-xl transition-shadow duration-300 bg-secondary-50">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600 animate-bounce" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-700 mb-2">Eşitlik</h3>
              <p className="text-gray-700">
                Her öğrenciye eşit fırsatlar sunmayı ve ayrımcılık yapmamayı hedefleriz.
              </p>
            </div>
            <div className="text-center card hover:shadow-xl transition-shadow duration-300 bg-primary-50">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-600 animate-pulse" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">Kalite</h3>
              <p className="text-gray-700">
                Eğitim kalitesini artırmak için sürekli kendimizi geliştiririz.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 