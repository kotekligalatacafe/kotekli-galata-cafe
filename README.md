[README.md](https://github.com/user-attachments/files/34701405/README.md)

# Kötekli Galata Cafe — Yayın paketi

Teslim tarihi: 10 Kasım 2026

## Paketin içeriği

| Dosya | Görevi |
|---|---|
| `index.html` | Sitenin giriş dosyası. Tasarım, işletme bilgileri, fiyatsız menü ve site işlevleri bu dosyada. |
| `assets/galeri/` | Dokuz galeri fotoğrafı ve dokuz hafif önizleme. Klasör yapısını olduğu gibi yükleyin. |
| `.nojekyll` | GitHub Pages’in hazır HTML dosyalarını doğrudan sunması için boş işaret dosyası. |
| `README.md` | Kurulum ve yayın sonrası kontrol kılavuzu. |

Site statik olarak çalışır. Kurulum komutu, veritabanı, sunucu uygulaması veya API anahtarı gerekmez. Galeri görselleri pakettedir. 3D animasyon, Google yazı tipleri, harita ve dış bağlantılar internet erişimi gerektirir.

## Geliştirici kaynakları

`gelistirici/` klasörü bir firmaya devretmek için ayrılmış kaynak kodu ve derleme kılavuzunu içerir. GitHub Pages’e yalnızca aşağıdaki adımda listelenen yayın dosyalarını yükleyin.

## GitHub’a yükleme

1. ZIP’i bir klasöre çıkarın. ZIP dosyasının kendisini yüklemek yerine içindekileri kullanın.
2. GitHub’da sitenin deposunu açın. Web arayüzünde **Add file → Upload files** üzerinden `index.html`, `assets`, `.nojekyll` ve `README.md` dosyalarını deponun en üst düzeyine yükleyin. Finder’da gizli dosyaları görmek için **Command + Shift + .** tuşlarına basabilirsiniz. Dosya seçicide görünmezse GitHub’da **Add file → Create new file** üzerinden `.nojekyll` oluşturabilirsiniz.
3. Yüklemeyi kaydedin. Depoda `index.html` ile `assets/` yan yana görünmeli. Resimleri tek tek depo köküne taşımayın.
4. **Settings → Pages** bölümünde yayın kaynağı olarak **Deploy from a branch** seçin. Dosyaların bulunduğu dalı (genellikle `main`) ve **/(root)** seçeneğini seçip kaydedin.
5. Yayın tamamlandığında **Settings → Pages** bölümündeki site bağlantısını açın. Sayfa açılmazsa **Actions** bölümündeki Pages yayınının durumunu kontrol edin.

[GitHub Pages yayın kaynağı kılavuzu](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Alan adı ve barındırma

### GitHub Pages üzerinde kalırsanız

1. Satın aldığınız alan adını GitHub hesabında doğrulayın.
2. Deponun **Settings → Pages → Custom domain** alanına alan adını kaydedin.
3. Alan adı sağlayıcınızın DNS panelinde, kök alan adı veya `www` kullanımına göre GitHub’ın güncel kılavuzundaki kayıtları ekleyin.
4. DNS doğrulandıktan sonra **Enforce HTTPS** seçeneğini açın. Kök adresi ve `www` adresini ayrı ayrı kontrol edin.

[Alan adını doğrulama](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages) · [Özel alan adı ve DNS ayarları](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) · [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

### Başka bir statik barındırma hizmetine geçerseniz

1. `index.html` ve `assets/` klasörünü barındırma hizmetinin yayın dizinine yan yana koyun. Hizmet bir çıktı klasörü sorarsa bu iki öğenin bulunduğu klasörü seçin.
2. Önce sağlayıcının geçici adresinde açılışı ve görselleri kontrol edin. Sonra alan adınızı sağlayıcının verdiği DNS kayıtlarıyla bağlayın.
3. HTTPS yönlendirmesini ve CDN önbelleğini etkinleştirin. Güncellenen HTML’in ziyaretçilere hızlı ulaşması için HTML’i yeniden doğrulatın veya kısa süre önbelleğe alın. Görseller daha uzun süre önbelleğe alınabilir.
4. İstek sınırlama ve DDoS korumasını sağlayıcının desteklediği ayarlardan yönetin. Geçişi kontrol edene kadar çalışan eski yayını erişilebilir tutun.

## Yayın sonrası kontrol

- Telefonda dikey ve yatay, bilgisayarda dar ve geniş pencerede siteyi açın.
- Mobil menüden her bölüme geçin. Menü kategorilerini, öne çıkan ürün kartlarını ve QR menü bağlantısını deneyin.
- Galeride dokuz fotoğrafın yüklendiğini kontrol edin. Fotoğrafı açıp ileri, geri ve kapatma düğmelerini deneyin.
- Yorum kartlarını kaydırın. Güncel puan bağlantısının doğru Google Haritalar kaydını açtığını kontrol edin.
- Telefon, e-posta, WhatsApp, Instagram ve harita bağlantılarını kontrol edin.
- HTTPS adresinde güvenli bağlantı uyarısı olmadığını doğrulayın. 3D yüklenmediğinde temel gezinmenin çalıştığını kontrol edin.
- Canlı yük testini yayın adresi belli olduğunda ve sağlayıcının test koşulları doğrulandığında yapın. İstekleri kademeli artırarak yanıt süresini ve hata oranını izleyin.

## Teslim doğrulaması

Yerel testte 16, 32 ve 64 paralel işçiyle toplam 3.000 statik dosya isteği başarılı oldu. Bu sonuç canlı barındırma kapasitesini ölçmez. Gerçek telefon ve masaüstü tarayıcı kontrolü ile canlı yük testi yayın sonrasına bırakıldı.

Görselleri değiştirirken dosya adlarıyla `index.html` içindeki bağlantıları eşleştirin. Sayfa içindeki JavaScript düzenlenirse içerik güvenliği politikasındaki betik imzasını da yenileyin.
