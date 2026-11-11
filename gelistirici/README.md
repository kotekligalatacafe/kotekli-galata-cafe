# Kötekli Galata Cafe — Geliştirici teslimi

Bu klasör, ZIP kökündeki yayına hazır sitenin düzenlenebilir kaynaklarını içerir. Paketteki HTML, aşağıdaki kaynaklardan yeniden üretilebilir.

| Dosya | İçerik |
|---|---|
| `kaynak/index.template.html` | Sayfa yapısı, metinler, SEO bilgileri, iletişim bağlantıları ve galeri HTML’i |
| `kaynak/site.css` | Tema, tipografi, telefon ve masaüstü yerleşimleri |
| `kaynak/baslangic.js` | İşletme bilgileri, bağlantıların kurulumu ve mobil navigasyon |
| `kaynak/menu-verisi.js` | Fiyatsız menü, ürün kategorileri ve açıklamalar |
| `kaynak/etkilesimler.js` | Menü kategorileri, galeri büyütme ve Google yorum kartları |
| `kaynak/animasyon.js` | Three.js yüklemesi, 3D arka plan ve performans ayarları |
| `derle.py` | Kaynakları birleştirir ve betik için içerik güvenliği imzasını yeniler |

Görseller ZIP kökündeki `assets/galeri/` klasöründe bulunur. Kaynak JavaScript dosyaları sıralı parçalardır. Derleme betiği bunları tek bir çalışma alanında birleştirir.

## Düzenleme ve yayın çıktısı

1. ZIP’in tamamını çıkarın ve ilgili kaynak dosyasını düzenleyin.
2. ZIP kökünde `python3 gelistirici/derle.py` çalıştırın. Python 3 ve standart kütüphanesi yeterlidir. Bu komut kökteki `index.html` dosyasını yeniler.
3. Mevcut HTML üzerine yazmadan çıktı almak için `python3 gelistirici/derle.py --cikti onizleme.html` kullanın. Görsellerin yüklenmesi için önizleme dosyası `assets/` ile aynı dizinde olmalıdır.
4. Menü, galeri, yorumlar ve iletişim bağlantılarını telefon ve masaüstünde sınayın. Sonra kökteki yayın dosyalarını yükleyin.

## Bakım notları

- İletişim bilgileri hem şablonun görünür HTML’inde hem `baslangic.js` içindeki `BUSINESS` ayarlarında bulunur. Bir işletme bilgisi değiştiğinde iki yerdeki değeri kontrol edin.
- Öne çıkan ürün kartları şablonda, kategori ve ürün verileri `menu-verisi.js` dosyasındadır. Kategori adını değiştirirken kartın kategori hedefini de güncelleyin.
- Galeride küçük önizleme ve büyütülen fotoğraf için ayrı dosyalar kullanılır. Görsel yolları göreli olduğu için site GitHub Pages proje adresinde ve özel alan adında aynı yapıyla çalışabilir.
- Google puanı Google Haritalar bağlantısında görüntülenir. Menü fiyatları QRia üzerinden sunulur. 3D arka plan harici Three.js dosyası kullanır.
- Alan adı ve barındırma ayarları için ZIP kökündeki `README.md` dosyasını izleyin. Yayın çıktısına yalnızca `index.html`, `assets/`, `.nojekyll` ve isteğe bağlı olarak kök `README.md` gerekir. `gelistirici/` klasörünü bakım için saklayın veya firmayla paylaşın.
