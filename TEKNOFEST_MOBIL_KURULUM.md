# 📱 TEKNOFEST MOBİL KURULUM REHBERİ

## 🚀 Hızlı Başlangıç

### Yöntem 1: Python ile (Önerilen)
```bash
python -m http.server 8080
```

### Yöntem 2: Batch Dosyası ile
- `start_server.bat` dosyasını çift tıklayın
- CMD penceresi açılacak ve server başlayacak

### Yöntem 3: Node.js ile
```bash
node start_server_node.js
```

## 📱 Mobil Cihazlardan Erişim

### WiFi Ağı Üzerinden:
1. Bilgisayar ve mobil cihaz aynı WiFi'ye bağlı olmalı
2. Bilgisayarın IP adresini öğrenin: `ipconfig` (Windows) / `ifconfig` (Linux/Mac)
3. Mobil tarayıcıda: `http://[IP-ADRESI]:8080`

**Örnek:** `http://192.168.1.100:8080`

### Hotspot ile:
1. Bilgisayarda WiFi hotspot açın
2. Mobil cihazı hotspot'a bağlayın
3. Mobil tarayıcıda: `http://192.168.137.1:8080`

## 🔧 Sorun Giderme

### Port Meşgul Hatası:
```bash
# Farklı port deneyin
python -m http.server 8081
```

### Firewall Sorunu:
- Windows Güvenlik Duvarı'nda Python/Node.js'e izin verin
- Port 8080'i açın

### Mobil Erişim Yok:
1. Bilgisayar ve mobil aynı ağda mı?
2. IP adresi doğru mu?
3. Port numarası doğru mu?
4. Firewall engeli var mı?

## 📋 Test Listesi

✅ Bilgisayarda `localhost:8080` açılıyor mu?
✅ IP adresi doğru alınmış mı?
✅ Mobil cihaz aynı ağa bağlı mı?
✅ Mobil tarayıcıda sayfa yükleniyor mu?
✅ Oyun mobil görünümde çalışıyor mu?

## 🎮 Oyun Özellikleri

- **Responsive tasarım** - Tüm ekran boyutlarına uyum
- **Touch optimizasyonu** - Dokunmatik ekranlar için
- **Offline çalışma** - İnternet bağlantısı gerektirmez
- **Hızlı yükleme** - Optimize edilmiş asset'ler

## 📞 Destek

Sorun yaşarsanız:
1. Bu rehberi tekrar kontrol edin
2. Farklı port numarası deneyin
3. Bilgisayarı yeniden başlatın
4. Teknik ekibe başvurun

**Başarılar! 🎉**
