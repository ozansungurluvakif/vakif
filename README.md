# Vakıf Web Sitesi

Modern ve kullanıcı dostu bir vakıf web sitesi. React, Tailwind CSS ve Vite kullanılarak geliştirilmiştir.

## Özellikler

- 🏠 **Ana Sayfa** - Vakıf tanıtımı ve istatistikler
- ℹ️ **Hakkımızda** - Vakıf hakkında detaylı bilgi
- 🎯 **Kuruluş Amacı** - Vakfın kuruluş amacı ve hedefleri
- 👁️ **Vizyon & Misyon** - Vakfın vizyonu ve misyonu
- 👥 **Kurul Üyeleri** - Yönetim kurulu üyeleri
- 📝 **Burs Başvuru** - İki belge yükleme özelliği ile burs başvuru formu
- 👤 **Üyelik Başvuru** - Vakfa üyelik başvuru formu
- 📋 **Burs Şartları** - Burs başvuru şartları ve detayları

## Teknolojiler

- **React 18** - Modern React hooks ve functional components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Sayfa yönlendirme
- **React Hook Form** - Form yönetimi ve validasyon
- **Lucide React** - Modern ikonlar
- **Vite** - Hızlı build tool

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd vakif-website
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## Build

Production build için:
```bash
npm run build
```

Build'i önizlemek için:
```bash
npm run preview
```

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Navbar.jsx      # Navigasyon menüsü
│   └── Footer.jsx      # Alt bilgi
├── pages/              # Sayfa bileşenleri
│   ├── Home.jsx        # Ana sayfa
│   ├── About.jsx       # Hakkımızda
│   ├── Purpose.jsx     # Kuruluş amacı
│   ├── VisionMission.jsx # Vizyon & Misyon
│   ├── BoardMembers.jsx # Kurul üyeleri
│   ├── ScholarshipApplication.jsx # Burs başvuru
│   ├── MembershipApplication.jsx # Üyelik başvuru
│   └── ScholarshipRequirements.jsx # Burs şartları
├── App.jsx             # Ana uygulama bileşeni
├── main.jsx            # Uygulama giriş noktası
└── index.css           # Global stiller
```

## Özellikler Detayı

### Burs Başvuru Sistemi
- Kapsamlı form validasyonu
- İki belge yükleme özelliği (PDF formatında)
- Gerçek zamanlı form kontrolü
- Başarılı gönderim bildirimi

### Responsive Tasarım
- Mobil uyumlu tasarım
- Modern ve temiz arayüz
- Kullanıcı dostu navigasyon

### Form Yönetimi
- React Hook Form ile gelişmiş form yönetimi
- Otomatik validasyon
- Hata mesajları
- Loading durumları

## Özelleştirme

### Renkler
Tailwind config dosyasında renk paletini özelleştirebilirsiniz:
```javascript
// tailwind.config.js
colors: {
  primary: {
    // Ana renk paleti
  },
  secondary: {
    // İkincil renk paleti
  }
}
```

### İçerik
Tüm metinler ve içerikler ilgili bileşen dosyalarında düzenlenebilir.

### Resimler
Resimleri `public/` klasörüne ekleyebilir ve bileşenlerde kullanabilirsiniz.

## Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## İletişim

Proje hakkında sorularınız için:
- E-posta: info@vakifadi.com
- Telefon: +90 (212) 123 45 67 