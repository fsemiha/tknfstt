# 🎮 Teknofest Siber Macera Oyunu

> Siber güvenlik eğitimi için interaktif web tabanlı oyun

## 🚀 Canlı Demo

**🌐 Oyunu Oyna:** [https://[KULLANICI-ADI].github.io/teknofest-siber-macera](https://[KULLANICI-ADI].github.io/teknofest-siber-macera)

## 🎯 Özellikler

- 🔐 **Parola Gücü Testi** - Güçlü parola oluşturma
- 🤝 **Paylaş/Sakla Testi** - Kişisel bilgi güvenliği  
- 🎣 **Oltalama Testi** - Phishing saldırı farkındalığı
- 📱 **Mobil Uyumlu** - Tüm cihazlarda çalışır
- 🏆 **Skor Sistemi** - Firebase entegrasyonu
- 🎵 **Ses Efektleri** - Interaktif deneyim

## 🛠️ Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Firebase Realtime Database
- **Fonts:** Gilmer, Conthrax
- **Graphics:** SVG Assets
- **Responsive:** CSS Media Queries
- **Security:** zxcvbn Password Strength Library

## 📱 Mobil Optimizasyon

Oyun tüm ekran boyutlarında mükemmel çalışır:

- 📱 **320px+** - Küçük mobil cihazlar
- 📱 **600px+** - Büyük mobil cihazlar  
- 💻 **900px+** - Tablet cihazlar
- 🖥️ **1200px+** - Masaüstü bilgisayarlar

## 🚀 Yerel Geliştirme

### Python ile
```bash
python -m http.server 8080
# http://localhost:8080
```

### Node.js ile
```bash
node start_server_node.js
# http://localhost:8080
```

### Windows Batch
```bash
start_server.bat
```

## 📁 Proje Yapısı

```
📦 teknofest-siber-macera/
├── 📄 index.html              # Ana sayfa
├── 🎨 style.css              # Responsive CSS
├── 🔧 firebase-config.js     # Firebase ayarları
├── 📁 assets/                # SVG görseller
│   ├── Asset 21.svg          # Panel çerçevesi (Mobil)
│   ├── Asset 27.svg          # Panel çerçevesi (Desktop)
│   └── ...                   # Diğer assets
├── 📁 fonts/                 # Font dosyaları
│   ├── Gilmer Regular.otf
│   ├── Gilmer Bold.otf
│   └── ...
└── 📚 docs/                  # Dokümantasyon
    ├── GITHUB_DEPLOY.md
    └── TEKNOFEST_MOBIL_KURULUM.md
```

## 🔧 Firebase Kurulumu

1. Firebase Console'da proje oluşturun
2. `firebase-config.js` dosyasını güncelleyin:

```javascript
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};
```

3. Database Rules ayarlayın (güvenlik için)

## 🎮 Oyun Kuralları

### Parola Gücü (150 puan max)
- Parolanızı girin ve gücünü test edin
- Güçlü parola ipuçları alın
- Kırılma süresini öğrenin

### Paylaş/Sakla (150 puan max)
- Hangi bilgileri paylaşabileceğinizi seçin
- Kişisel bilgi güvenliği öğrenin
- 6 farklı senaryo

### Oltalama Testi (200 puan max)
- Şüpheli mesajları tespit edin
- Phishing saldırılarını tanıyın
- 5 farklı oltalama örneği

**🏆 Toplam:** 500 puan maksimum

## 📊 Skor Tablosu

- Gerçek zamanlı skor güncellemeleri
- En iyi 20 oyuncu listesi
- Süre ve tarih bilgisi
- Otomatik sıralama

## 🔒 Güvenlik

- XSS koruması
- CSRF koruması  
- Firebase güvenlik kuralları
- Input validasyonu
- Rate limiting

## 📄 Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır.

## 👥 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'i push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📞 Destek

Sorularınız için:
- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/[USERNAME]/teknofest-siber-macera/issues)

## 🏆 Teknofest 2024

Bu oyun **Teknofest Siber Güvenlik** kategorisi için geliştirilmiştir.

**İyi oyunlar! 🎉**

---
⭐ **Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

