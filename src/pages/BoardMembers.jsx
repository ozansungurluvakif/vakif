import { Users, Mail, Phone, Building } from 'lucide-react'
import { motion } from 'framer-motion'
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } })
}

const boardMembers = [
  {
    name: "Muhammed Fatih AYYILDIZ (Başkan)",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Tuğba LALE",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Mustafa DEMİRCİ",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Emre AVCIOĞLU",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Ebru SUNGURLU ÜLGER",
    institution: "MEHMET OZAN SUNGURLU'NUN KIZI"
  }
];

const backupMembers = [
  {
    name: "Ramazan KARAMAN",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Can İSTANBULLU",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Aziz ŞEN",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  }
];

const auditMembers = [
  {
    name: "Merve AKAGÜNDÜZ YÜKSEL",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Uğur Hakan ÇALKINSIN",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  },
  {
    name: "Ersin Erdem ÜNKARACALAR",
    institution: "TÜRKİYE PETROLLERİ ANONİM ORTAKLIĞI GENEL MÜDÜRLÜĞÜ (TPAO)"
  }
];

const BoardMembers = () => {
  return (
    <div className="section-padding bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
            Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı Yönetim Kurulu Üyeleri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vakfımızın yönetim kurulu üyeleri, alanlarında uzman kişilerden oluşmaktadır.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          {boardMembers.map((member, idx) => (
            <div key={idx} className="card text-center hover:shadow-xl transition-shadow duration-300">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.institution}</p>
            </div>
          ))}
        </motion.div>

        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold text-secondary-700 mb-8 text-center">Yedek Üyeler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {backupMembers.map((member, idx) => (
              <div key={idx} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-700 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl font-bold text-primary-700 mb-8 text-center">Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı Denetim Kurulu Üyeleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditMembers.map((member, idx) => (
              <div key={idx} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.institution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* İletişim */}
        <motion.div className="mt-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <div className="card bg-primary-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Yönetim Kurulu ile İletişim
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Yönetim kurulu üyelerimizle iletişime geçmek için aşağıdaki 
              bilgileri kullanabilirsiniz.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Mail className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <h3 className="font-semibold mb-1">E-posta</h3>
                <p className="text-primary-200">yonetim@vakifadi.com</p>
              </div>
              <div>
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <h3 className="font-semibold mb-1">Telefon</h3>
                <p className="text-primary-200">+90 (212) 123 45 67</p>
              </div>
              <div>
                <Building className="h-8 w-8 mx-auto mb-2 text-primary-200" />
                <h3 className="font-semibold mb-1">Adres</h3>
                <p className="text-primary-200">Vakıf Merkezi, İstanbul</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BoardMembers 