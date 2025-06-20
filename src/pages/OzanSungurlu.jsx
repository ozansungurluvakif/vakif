import { Award, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
};

const OzanSungurlu = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 py-12">
    <div className="max-w-3xl mx-auto p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 border border-primary-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col items-center mb-8">
          <Award className="w-14 h-14 text-primary-600 mb-2 animate-bounce" />
          <h1 className="text-4xl font-bold mb-4 text-center text-primary-700 drop-shadow">Ozan Sungurlu Kimdir?</h1>
          <img src="/images.jpg" alt="Ozan Sungurlu" className="mx-auto mb-6 rounded shadow-lg w-64 border-4 border-primary-100" />
        </div>
        <div className="text-justify space-y-4 text-lg text-gray-700">
          <p>
            20 Ekim 1939'da Gümüşhane'de doğan <span className="font-semibold text-primary-700">M. Ozan Sungurlu</span>, ilk ve ortaokulu Gümüşhane'de okumuştur. 1956 yılında Eskişehir Lisesi'ni bitirdikten sonra 1964 yılında İstanbul Üniversitesi Fen Fakültesi Jeoloji Bölümü'nden mezun olmuştur. 22 Aralık 1965'te Bilge Hanım ile evlenmiş; Faik ve Ebru adında iki çocuğu olmuştur.
          </p>
          <p>
            1964-1967 yılları arasında MTA'da Saha Jeoloğu olarak göreve başlamıştır. 1967-1969 yılları arasında askerliğini tamamladıktan sonra TPAO Arama Grubu Başkanlığı'nda Jeolog olarak çalışmaya başlamıştır. Yaptığı birçok önemli çalışmanın ardından 1980 yılında Arama Grubu Başkan Yardımcılığı'na, 1984 yılında Arama Grup Başkanlığı'na ve 1989 yılında da TPAO Genel Müdür Yardımcılığı görevine atanmıştır.
          </p>
          <p>
            1980-1981 yılları arasında Türkiye Petrol Jeologları Derneği Başkanlığı görevinde de bulunan M. Ozan Sungurlu, tüm çalışma hayatı boyunca gösterdiği başarıların yanı sıra, mütevazı kişiliği ve insan sevgisiyle herkesin sevgi ve takdirini kazanmış örnek bir petrol jeoloğu ve yöneticisiydi.
          </p>
          <p>
            Arazi çalışmasında bulunmak amacıyla 19 Eylül 1990 tarihinde çıktığı yolculuk sırasında geçirdiği trafik kazası sonucunda, tüm uğraşlara rağmen kurtarılamayarak 27 Kasım 1990 tarihinde aramızdan ayrılmıştır.
          </p>
          <motion.div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 mt-6" initial="hidden" animate="visible" variants={fadeIn}>
            <BookOpen className="w-6 h-6 text-green-600" />
            <span className="text-green-700 font-medium">Vefatından sonra kendisine ithaf edilen <span className="font-semibold">TÜBİTAK Hizmet Ödülü (1990)</span>, çalışmalarının önem ve değerini anımsatmaya devam etmektedir.</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);

export default OzanSungurlu; 