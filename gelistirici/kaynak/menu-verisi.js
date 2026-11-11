  const MENU = {
    "Kahvaltılar": [
      {
        title: "Kahvaltı Tabakları",
        note: "",
        items: [
          ["Serpme Kahvaltı", "2, 3 veya 4 kişilik. Peynir çeşitleri, salam, sosis, bal, reçel, çikolata, tereyağı, zeytin, ezme, salatalık, domates, meyve, patates kızartması, soğan halkası, kroket, peynirli ıspanaklı börek, sigara böreği, waffle, günün sıcağı, menemen ve pot çay."],
          ["Galata Kahvaltı", "Peynir çeşitleri, salam, sosis, bal, reçel, çikolata, tereyağı, patates kızartması, soğan halkası, kroket, sigara böreği, zeytin, domates, salatalık, haşlanmış yumurta, acuka ve fincan çay."],
          ["Ortaköy Kahvaltı", "Soslu sosis, ıspanaklı peynirli börek, waffle, menemen sosu, patates kızartması, sigara böreği, soğan halkası, kroket, hellim, sahanda sucuklu yumurta ve fincan çay."],
          ["Karaköy Kahvaltı", "Simit ortasında yumurta, beyaz peynir, kaşar, salatalık, domates, zeytin, acuka, patates kızartması, sosis ve fincan çay."],
          ["Şişhane Kahvaltı", "Tütsülenmiş sosis, sucuklu yumurta, patates kızartması, soğan halkası, kroket ve fincan çay."],
          ["Pera Kahvaltı", "Waffle, muz, çilek, çikolata, üzerinde yumurta bulunan cheddarlı ve hindi fümeli tost, fincan çay."]
        ]
      },
      {
        title: "Omletler ve Sahanda Seçenekler",
        note: "Omletler domates ve salatalıkla servis edilir.",
        items: [
          ["Omlet"],
          ["Kaşarlı Omlet"],
          ["Beyaz Peynirli Omlet"],
          ["Karışık Omlet", "Kaşar ve sucuk."],
          ["Üç Peynirli Omlet", "Kaşar, beyaz peynir ve lor."],
          ["Mantarlı Omlet"],
          ["Sahanda Yumurta"],
          ["Sahanda Sucuklu Yumurta"],
          ["Sahanda Sucuk"],
          ["Sahanda Kavurmalı Yumurta"]
        ]
      },
      {
        title: "Menemenler",
        note: "",
        items: [
          ["Menemen"],
          ["Kaşarlı Menemen"],
          ["Çakallı Menemeni"],
          ["Karışık Menemen", "Kaşar ve sucuk."],
          ["Kavurmalı Menemen"]
        ]
      }
    ],
    "Tostlar ve Ekmek Üstü": [
      {
        title: "Tostlar",
        note: "Patates kızartması ve iki sos ile servis edilir. Bazlama, ekstra peynir ve patates seçenekleri bulunur.",
        items: [
          ["Kaşarlı Tost"],
          ["Beyaz Peynirli Tost"],
          ["Sucuklu Tost"],
          ["Karışık Tost", "Kaşar ve sucuk."],
          ["Tostoyevski Tost", "Kaşar, sucuk ve salça."],
          ["Tost Acı Söyler", "Beyaz peynir, sucuk, domates ve acı sos."],
          ["Galata Special Tost", "Cheddar, hindi füme, domates ve kekik."],
          ["Kötü Gün Tostu", "Cheddar, salam ve domates."],
          ["İyi Gün Tostu", "Kaşar, kavurma, biber ve kekik."],
          ["Can Tostum", "Beyaz peynir, pesto sos ve sucuk."],
          ["Çılgın Tost", "Kaşar, salam, sucuk ve sosis."],
          ["Bazlama Atom Tost", "Kaşar, salam, sucuk, sosis ve yumurta."],
          ["Bazlama Tavuklu Tost", "Kaşar, tavuk, biber ve domates."],
          ["Bazlama Çıtır Tavuklu Tost", "Kaşar, çıtır tavuk, biber, yeşillik ve domates."]
        ]
      },
      {
        title: "Ekmek Üstü Lezzetler",
        note: "",
        items: [
          ["Ekmek Üstü Lezzet No. 1", "Pizza sosu, kaşar, zeytin, salam, sosis ve mısır. Yanında patates kızartması."],
          ["Ekmek Üstü Lezzet No. 2", "Domates sosu, pesto, beyaz peynir, yeşil zeytin ve ceviz. Yanında patates kızartması."],
          ["Ekmek Üstü Lezzet No. 3", "Mozzarella, beyaz peynir, cheddar, hindi füme ve zeytin. Yanında patates kızartması."]
        ]
      }
    ],
    "Ana Yemekler": [
      {
        title: "Tavuk Yemekleri",
        note: "Makarna, patates kızartması ve iki sosla servis edilir. Ekstra makarna, patates, tavuk ve sos seçenekleri bulunur.",
        items: [
          ["Izgara Tavuk"],
          ["Mantar Soslu Izgara Tavuk"],
          ["Mantar Soslu Tavuk"],
          ["Soya Soslu Tavuk"],
          ["Köri Soslu Tavuk"],
          ["Barbekü Soslu Tavuk"],
          ["Meksika Soslu Tavuk"],
          ["Sweet Chili Soslu Tavuk"],
          ["Tikka Masala Soslu Tavuk"],
          ["Dağ Kekikli Tavuk"],
          ["Teriyaki Soslu Tavuk"],
          ["Çin Usulü Tavuk"],
          ["Pesto Soslu Tavuk"],
          ["Tavuk Çökertme"],
          ["Tavuk Schnitzel"],
          ["Mantar Soslu Tavuk Schnitzel"]
        ]
      }
    ],
    "Pizzalar": [
      {
        title: "Pizzalar",
        note: "Ekşi mayalı hamur isteğinizi sipariş sırasında belirtebilirsiniz. Ekstra peynir, sos ve tavuk seçenekleri bulunur.",
        items: [
          ["Margarita", "Pizza sosu, mozzarella ve domates."],
          ["Pesto Soslu Margarita", "Pizza sosu, mozzarella, pesto ve domates."],
          ["Pepperoni", "Pizza sosu, mozzarella ve sucuk."],
          ["Italiano", "Pizza sosu, mozzarella, salam, sosis, mantar ve mısır."],
          ["Ton Balıklı Pizza", "Pizza sosu, mozzarella, ton balığı, soğan ve mısır."],
          ["Vejetaryen Pizza", "Pizza sosu, mozzarella, mısır, biber, mantar, zeytin ve domates."],
          ["BBQ Soslu Tavuklu Pizza", "Pizza sosu, mozzarella, BBQ soslu tavuk, biber, mantar ve domates."],
          ["Sweet Chili Soslu Tavuklu Pizza", "Pizza sosu, mozzarella, sweet chili soslu tavuk, biber, mantar ve domates."],
          ["Tikka Masala Soslu Tavuklu Pizza", "Pizza sosu, mozzarella, tikka masala soslu tavuk, biber, mantar ve domates."],
          ["Teriyaki Soslu Tavuklu Pizza", "Pizza sosu, mozzarella, teriyaki soslu tavuk, biber, mantar ve domates."],
          ["Karışık Pizza", "Pizza sosu, mozzarella, sucuk, salam, sosis, mantar, biber, mısır ve zeytin."],
          ["Galata Special Pizza No. 1", "Pizza sosu, mozzarella, sucuk, tütsülenmiş sosis, hindi füme, mantar, mısır ve cheddar."],
          ["Galata Special Pizza No. 2", "Pizza sosu, mozzarella, hindi füme, tütsülenmiş sosis, soğan, sarımsak, mantar, kekik ve hellim."]
        ]
      }
    ],
    "Burgerler ve Wrapler": [
      {
        title: "Burgerler",
        note: "Patates kızartması ve iki sosla servis edilir. Ekstra peynir ve patates seçenekleri bulunur.",
        items: [
          ["Hamburger", "Hamburger köftesi, domates, marul ve özel sos."],
          ["Cheese Burger", "Hamburger köftesi, cheddar, domates, marul ve özel sos."],
          ["Chicken Burger", "Fileto tavuk, domates, marul ve özel sos."],
          ["BBQ Soslu Burger", "Hamburger köftesi, BBQ sos, domates ve marul."],
          ["Mantar Soslu Burger", "Hamburger köftesi, mantar sosu, domates ve marul."],
          ["Galata Special Burger No. 1", "Çift köfte, cheddar, domates, marul, karamelize soğan, turşu ve özel sos."],
          ["Galata Special Burger No. 2", "Çift köfte, cheddar, domates, marul, hellim ve özel sos."],
          ["Vejetaryen Burger", "Vejetaryen köfte, karamelize soğan ve sebzeli özel sos."]
        ]
      },
      {
        title: "Wrapler",
        note: "Patates kızartması ve iki sosla servis edilir. Ekstra peynir, patates ve tavuk seçenekleri bulunur.",
        items: [
          ["Tavuk Wrap", "Sotelenmiş tavuk, kaşar ve biber."],
          ["Çıtır Tavuk Wrap", "Çıtır tavuk, kaşar ve domates."],
          ["Caesar Wrap", "Caesar soslu tavuk, kaşar ve yeşillik."],
          ["Mantar Soslu Wrap", "Mantar soslu tavuk ve kaşar."],
          ["Sweet Chili Soslu Wrap", "Sweet chili soslu tavuk, kaşar ve biber."],
          ["Tikka Masala Soslu Wrap", "Tikka masala soslu tavuk, kaşar ve biber."],
          ["Köri Soslu Wrap", "Köri soslu tavuk, kaşar ve biber."],
          ["BBQ Soslu Wrap", "BBQ soslu tavuk, kaşar ve biber."],
          ["Teriyaki Soslu Wrap", "Teriyaki soslu tavuk, kaşar ve biber."],
          ["Çin Usulü Tavuk Wrap", "Çin usulü tavuk, kaşar ve biber."],
          ["Patso Wrap", "Patates kızartması, sosis, kaşar, cheddar, ketçap, mayonez ve soğan halkası."]
        ]
      }
    ],
    "Makarnalar ve Mantılar": [
      {
        title: "Makarnalar ve Mantılar",
        note: "Ekstra peynir, tavuk ve sos seçenekleri bulunur.",
        items: [
          ["Fettuccine Alfredo", "Fettuccine, krema, mantar, tavuk ve kaşar."],
          ["Kremalı Tavuklu Penne", "Penne, krema, mantar, tavuk ve kaşar."],
          ["Penne Arrabbiata", "Penne, acı sos, mısır ve zeytin."],
          ["Pesto Soslu Penne", "Penne, krema, pesto ve kaşar."],
          ["Köri Soslu Penne", "Penne, krema, köri sosu ve kaşar."],
          ["Ton Balıklı Penne", "Penne, krema, ton balığı ve mısır."],
          ["Mantı"],
          ["Yalancı Mantı"]
        ]
      }
    ],
    "Salatalar ve Atıştırmalıklar": [
      {
        title: "Salatalar",
        note: "Ekstra peynir ve tavuk seçenekleri bulunur.",
        items: [
          ["Akdeniz Salata", "Mevsim yeşillikleri, domates, beyaz peynir ve dilim zeytin."],
          ["Ton Balıklı Salata", "Ton balığı, mevsim yeşillikleri, domates, mısır ve soğan."],
          ["Caesar Salata", "Izgara tavuk, marul, domates, Caesar sos ve mısır."],
          ["Pesto Soslu Hellim Salata", "Hellim, pesto ve mevsim yeşillikleri."],
          ["Galata Special Salata", "Izgara tavuk, mevsim yeşillikleri, mevsim meyvesi, ceviz ve özel sos."]
        ]
      },
      {
        title: "Atıştırmalıklar",
        note: "Atıştırmalık tabakları iki sosla servis edilir.",
        items: [
          ["Patates Tabağı"],
          ["Sigara Böreği Tabağı", "6 sigara böreği ve patates kızartması."],
          ["Sosis Tabağı", "6 sosis ve patates kızartması."],
          ["Soğan Halkası Tabağı", "6 soğan halkası ve patates kızartması."],
          ["Çıtır Tavuk Tabağı", "6 çıtır tavuk ve patates kızartması."],
          ["Galata Aperitif Tabağı", "İkişer adet çıtır tavuk, kroket, soğan halkası, sigara böreği ve sosis. Yanında patates kızartması."]
        ]
      }
    ],
    "Tatlılar": [
      {
        title: "Tatlılar",
        note: "Ekstra sos seçenekleri: fıstık, beyaz çikolata ve çikolata.",
        items: [
          ["Sufle", "Kendi yapımımız. Dondurma ile servis edilir."],
          ["Fıstık Rüyası"],
          ["San Sebastian", "Çikolata ile servis edilir."],
          ["Limonlu Cheesecake"],
          ["Yaban Mersinli Cheesecake"],
          ["Frambuaz Cheesecake"],
          ["Kalpli Pasta"],
          ["Ballı Cevizli Pasta", "Sıcak sütle servis edilir."],
          ["Tiramisu"],
          ["Çikolatalı Pasta"],
          ["Magnolya"]
        ]
      },
      {
        title: "Waffle",
        note: "Muz, çilek ve kivi. Ekstra dondurma, fıstık sosu veya çikolata sosu seçilebilir.",
        items: [
          ["Bir Meyveli Waffle"],
          ["İki Meyveli Waffle"],
          ["Üç Meyveli Waffle"]
        ]
      },
      {
        title: "Dondurma",
        note: "",
        items: [
          ["Dondurma", "1, 2, 3 veya 4 top. Vanilya, kakao, limon, çilek, karamel, muz ve Antep fıstığı."]
        ]
      }
    ],
    "Kahveler": [
      {
        title: "Dünya Kahveleri",
        note: "Laktozsuz süt seçeneği bulunur.",
        items: [
          ["Espresso"],
          ["Double Espresso"],
          ["Americano"],
          ["Con Panna"],
          ["Affogato"],
          ["Cortado"],
          ["Latte"],
          ["Cappuccino"],
          ["Mocha"],
          ["Zebra Mocha"],
          ["White Chocolate Mocha"],
          ["Flat White"],
          ["Nutella Mocha"],
          ["Marshmallow Mocha"],
          ["Mocha Coconut"],
          ["Irish Nut Cream"],
          ["Sade Nescafé"],
          ["Sütlü Nescafé"],
          ["Popcorn Latte"],
          ["Toffee Nut Latte"],
          ["Cafe Miel"],
          ["Chai Tea Latte"],
          ["Karamel Latte"],
          ["Mocha Karamel Latte"],
          ["Crème Brûlée Latte"],
          ["Blueberry Latte"],
          ["Madagaskar Vanilya Latte"],
          ["Salted Caramel Latte"],
          ["Pistachio Latte"],
          ["White C. Pistachio Latte"],
          ["Probis Latte"],
          ["Biscoff Latte"],
          ["Vanilya Latte"],
          ["Pumpkin Latte"],
          ["Cookie Karamel Latte"]
        ]
      },
      {
        title: "Filtre Kahveler",
        note: "",
        items: [
          ["Filtre Kahve"],
          ["Sütlü Filtre Kahve"],
          ["Aromalı Filtre Kahve", "Vanilya, karamel, Irish ve fındık."],
          ["Soğuk Filtre Kahve"]
        ]
      },
      {
        title: "Türk Kahveleri",
        note: "Tek veya duble servis seçeneği.",
        items: [
          ["Türk Kahvesi"],
          ["Süvari"],
          ["Sütlü Türk Kahvesi"],
          ["Damla Sakızlı Türk Kahvesi"],
          ["Gönülçelen Kahvesi", "Bitter ve portakal."],
          ["Çilekli Türk Kahvesi"],
          ["Dibek Kahvesi"],
          ["Menengiç Kahvesi"]
        ]
      },
      {
        title: "Soğuk Kahveler",
        note: "",
        items: [
          ["Ice Americano"],
          ["Ice Latte"],
          ["Aromalı Ice Latte", "Vanilya, karamel, fındık, çilek, Irish, muz, Hindistan cevizi, yaban mersini, Madagaskar, pistachio, white C. pistachio, salted caramel ve pumpkin."],
          ["Ice Mocha"],
          ["Ice White Chocolate Mocha"],
          ["Aromalı Ice Mocha", "Vanilya, karamel, fındık, çilek, Irish, muz, Hindistan cevizi, pistachio, yaban mersini ve white C. pistachio."],
          ["Ice Crème Brûlée Latte"],
          ["Ice Zebra Mocha"],
          ["Ice Irish Nut Cream"]
        ]
      },
      {
        title: "Frappe",
        note: "",
        items: [
          ["Frappe"],
          ["Aromalı Frappe", "Fındık, karamel, vanilya, çikolata, muz, Irish, çilek, Hindistan cevizi, pistachio, yaban mersini ve salted caramel."]
        ]
      }
    ],
    "Çaylar ve Sıcak İçecekler": [
      {
        title: "Çaylar",
        note: "Bal eklenebilir.",
        items: [
          ["Çay"],
          ["Fincan Çay"],
          ["Earl Grey"],
          ["Ihlamur"],
          ["Adaçayı"],
          ["Papatya"],
          ["Kuşburnu"],
          ["Elma Çayı"],
          ["Yeşil Çay"],
          ["Limonlu Yeşil Çay"],
          ["Yaseminli Yeşil Çay"],
          ["Nar Çayı"],
          ["Nane-Limon"],
          ["Böğürtlen Çayı"],
          ["Elma-Tarçın"],
          ["Kış Çayı"],
          ["Christmas Tea"],
          ["Orman Meyveli Çay"],
          ["Gripsavar", "Zencefil, limon ve bal."]
        ]
      },
      {
        title: "Salep",
        note: "",
        items: [
          ["Salep"],
          ["Çikolatalı Salep"],
          ["Fındıklı Salep"],
          ["Karamelli Salep"],
          ["Damla Sakızlı Salep"]
        ]
      },
      {
        title: "Sıcak Sütler",
        note: "Bal eklenebilir.",
        items: [
          ["Sıcak Süt"],
          ["Çikolatalı Sıcak Süt"],
          ["Tarçınlı Sıcak Süt"],
          ["Nutellalı Sıcak Süt"]
        ]
      },
      {
        title: "Sıcak Çikolatalar",
        note: "",
        items: [
          ["Sıcak Çikolata"],
          ["Beyaz Sıcak Çikolata"],
          ["Aromalı Sıcak Çikolata", "Çilek, karamel, vanilya, muz, Hindistan cevizi, pistachio, white pistachio ve marshmallow."]
        ]
      }
    ],
    "Soğuk İçecekler": [
      {
        title: "Limonatalar",
        note: "",
        items: [
          ["Limonata"],
          ["Aromalı Limonata", "Nane, çilek, elma, nar, karpuz ve yaban mersini."],
          ["Dondurmalı Limonata", "Çilek, vanilya, limon ve muz."]
        ]
      },
      {
        title: "Limonata Kokteylleri",
        note: "",
        items: [
          ["Yeşil Elma"],
          ["Çilek"],
          ["Şeftali"],
          ["Karadut"]
        ]
      },
      {
        title: "Ev Yapımı Soğuk Çaylar",
        note: "",
        items: [
          ["Şeftali"],
          ["Mango"],
          ["Karadut"],
          ["Çilek"]
        ]
      },
      {
        title: "Kokteyller",
        note: "Bal eklenebilir.",
        items: [
          ["Atom", "Muz, ceviz, süt ve bal."],
          ["Çikolatalı Atom", "Muz, ceviz, süt, bal ve çikolata."],
          ["Bold Pilot", "Muz, çilek, dondurma, badem, ceviz ve süt."],
          ["Mojito", "Taze nane, şeker şurubu, limon ve Sprite."],
          ["Apple Mojito", "Elma şurubu, taze nane, şeker şurubu, limon ve Sprite."],
          ["Strawberry Mojito", "Çilek şurubu, taze nane, şeker şurubu, limon ve Sprite."],
          ["Virgin Barbados", "Muz, sıkma portakal suyu ve Hindistan cevizi şurubu."],
          ["Protein Kokteyl", "Protein tozu, muz, süt ve bisküvi."],
          ["Cold Start Tea (Şekersiz)", "Yaseminli yeşil çay, elma-tarçın, limon ve zencefil."],
          ["Kırmızı Antifriz (Şekersiz)", "Kuşburnu, tarçın, zencefil ve limon."],
          ["Vecihi", "Şeftalili Red Bull, muz, çilek ve dondurma."],
          ["Hezarfen", "Hindistan cevizli Red Bull, kivi, çilek, dondurma ve meyve püresi."],
          ["Pegasus", "Şeftalili Red Bull, sıkma portakal suyu, dondurma ve muz."],
          ["Alamut", "Yaban mersinli Red Bull, dondurma, çilek, kahve çekirdeği ve meyve püresi."],
          ["Misred", "Karpuzlu Red Bull, çilek, dondurma ve meyve püresi."]
        ]
      },
      {
        title: "Milkshake",
        note: "Dondurma ile hazırlanır.",
        items: [
          ["Çikolatalı"],
          ["Çilekli"],
          ["Vanilyalı"],
          ["Karamelli"],
          ["Muzlu"],
          ["Limonlu"],
          ["Oreolu"],
          ["Cocostar"],
          ["Antep Fıstıklı"],
          ["Vanilya Badem"],
          ["Magnum Milkshake"],
          ["Cookie Milkshake"],
          ["Marshmallow Milkshake"]
        ]
      },
      {
        title: "Smoothie",
        note: "",
        items: [
          ["Çilek"],
          ["Muz"],
          ["Kivi"],
          ["Kavun"]
        ]
      },
      {
        title: "Frozen",
        note: "",
        items: [
          ["Elma"],
          ["Çilek"],
          ["Karpuz"],
          ["Karadut"],
          ["Çarkıfelek"],
          ["Orman Meyveli"],
          ["Kavun"],
          ["Mango"],
          ["Şeftali"],
          ["Ananas"],
          ["Yaban Mersini"]
        ]
      },
      {
        title: "Soğuk Çikolatalar",
        note: "",
        items: [
          ["Soğuk Çikolata"],
          ["Beyaz Soğuk Çikolata"],
          ["Aromalı Soğuk Çikolata", "Çilek, muz, karamel, vanilya, Hindistan cevizi, marshmallow, pistachio, white pistachio ve yaban mersini."],
          ["Ice Chocolate Oreo"],
          ["Ice White Chocolate Oreo"]
        ]
      },
      {
        title: "Diğer Soğuk İçecekler",
        note: "Ekstra limon suyu seçeneği bulunur.",
        items: [
          ["Cola"],
          ["Cola Zero"],
          ["Fanta"],
          ["Sprite"],
          ["Fuse Tea", "Mango-ananas, limon, şeftali ve karpuz."],
          ["Cappy", "Vişne, şeftali ve karışık."],
          ["Su"],
          ["Soda"],
          ["Meyveli Soda", "Limon, nar, elma ve karpuz-çilek."],
          ["Ayran"],
          ["Churchill"],
          ["Sıkma Portakal"],
          ["Red Bull"],
          ["Şekersiz Red Bull"],
          ["Aromalı Red Bull"]
        ]
      }
    ]
  };
