import { Heart, Banknote } from 'lucide-react';
import { motion } from 'framer-motion';
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
};

const Donation = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100 py-12">
    <div className="max-w-2xl mx-auto p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-primary-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="flex flex-col items-center mb-6">
          <Heart className="w-14 h-14 text-primary-600 mb-2 animate-pulse" />
          <h1 className="text-4xl font-bold mb-2 text-center text-primary-700 drop-shadow">Bağış Yapın</h1>
          <p className="text-lg text-gray-700 text-center max-w-xl">
            Ozan Sungurlu Bilim, Eğitim ve Yardım Vakfı olarak, yer bilimleri alanında öğrenim gören öğrencilere ve yardıma ihtiyacı olan TPAO personeli çocuklarına destek olmayı amaçlıyoruz. Siz de bağışlarınızla bu amaca katkı sağlayabilirsiniz.
          </p>
        </div>
        <motion.div
          className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl p-6 mb-6 shadow flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Banknote className="w-10 h-10 text-secondary-600 mb-2" />
          <h2 className="text-2xl font-semibold mb-2 text-secondary-700">Banka Bilgileri</h2>
          <div className="text-gray-800 text-center space-y-1">
            <p><span className="font-bold">Banka Adı:</span> Türkiye Vakıfbank A.Ş</p>
            <p><span className="font-bold">IBAN:</span> <span className="tracking-wider text-primary-700">TR 6200 0150 0158 0072 8543 3795</span></p>
            <p><span className="font-bold">Hesap Sahibi:</span> Ozan Sungurlu Bilim ve Yardım Vakfı</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Heart className="w-6 h-6 text-green-500 animate-bounce" />
          <span className="text-green-700 font-medium text-md">Bağışlarınız için teşekkür ederiz.</span>
        </motion.div>
      </motion.div>
    </div>
  </div>
);

export default Donation; 