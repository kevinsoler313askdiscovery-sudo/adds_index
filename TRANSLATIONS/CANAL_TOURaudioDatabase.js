const audioDatabase = {
    arabic: [
        { id: 1, title: '1. المقدمة | أهلاً وسهلاً', url: BASE_URL + 'arabic/1.introduccion_bienvenida_ar.mp3' },
        { id: 2, title: '2. بانكوك وقنواتها', url: BASE_URL + 'arabic/2.bangkok_y_sus_canales_ar.mp3' },
        { id: 3, title: '3. جولة في قارب الذيل الطويل', url: BASE_URL + 'arabic/3.recorrido_en_barco_de_cola_larga_ar.mp3' },
        { id: 4, title: '4. وات أرون | معبد الفجر', url: BASE_URL + 'arabic/4.wat_arun_templo_del_amanecer_ar.mp3' },
        { id: 5, title: '5. الخلاصة', url: BASE_URL + 'arabic/5.resumen_ar.mp3' },
        { id: 6, title: '6. التحية الختامية', url: BASE_URL + 'arabic/6.saludo_final_ar.mp3' }
    ],
    deutsch: [
        { id: 1, title: '1. EINFÜHRUNG | WILLKOMMEN', url: BASE_URL + 'german/1.introduccion_bienvenida_de.mp3' },
        { id: 2, title: '2. BANGKOK UND SEINE KANÄLE', url: BASE_URL + 'german/2.bangkok_y_sus_canales_de.mp3' },
        { id: 3, title: '3. FAHRT MIT DEM LANGSCHWANZBOOT', url: BASE_URL + 'german/3.recorrido_en_barco_de_cola_larga_de.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPEL DER MORGENRÖTE', url: BASE_URL + 'german/4.wat_arun_templo_del_amanecer_de.mp3' },
        { id: 5, title: '5. ZUSAMMENFASSUNG', url: BASE_URL + 'german/5.resumen_de.mp3' },
        { id: 6, title: '6. ABSCHLIESSENDER GRUSS', url: BASE_URL + 'german/6.saludo_final_de.mp3' }
    ],
    日本語: [
        { id: 1, title: '1. はじめに | ようこそ', url: BASE_URL + 'japanese/1.introduccion_bienvenida_ja.mp3' },
        { id: 2, title: '2. バンコクとその運河', url: BASE_URL + 'japanese/2.bangkok_y_sus_canales_ja.mp3' },
        { id: 3, title: '3. ロングテールボートでのクルーズ', url: BASE_URL + 'japanese/3.recorrido_en_barco_de_cola_larga_ja.mp3' },
        { id: 4, title: '4. ワット・アルン | 暁の寺', url: BASE_URL + 'japanese/4.wat_arun_templo_del_amanecer_ja.mp3' },
        { id: 5, title: '5. まとめ', url: BASE_URL + 'japanese/5.resumen_ja.mp3' },
        { id: 6, title: '6. 最後のご挨拶', url: BASE_URL + 'japanese/6.saludo_final_ja.mp3' }
    ],
    한국어: [
        { id: 1, title: '1. 소개 | 환영합니다', url: BASE_URL + 'korean/1.introduccion_bienvenida_ko.mp3' },
        { id: 2, title: '2. 방콕과 그 운하들', url: BASE_URL + 'korean/2.bangkok_y_sus_canales_ko.mp3' },
        { id: 3, title: '3. 롱테일 보트 투어', url: BASE_URL + 'korean/3.recorrido_en_barco_de_cola_larga_ko.mp3' },
        { id: 4, title: '4. 왓 아룬 | 새벽 사원', url: BASE_URL + 'korean/4.wat_arun_templo_del_amanecer_ko.mp3' },
        { id: 5, title: '5. 요약', url: BASE_URL + 'korean/5.resumen_ko.mp3' },
        { id: 6, title: '6. 마지막 인사', url: BASE_URL + 'korean/6.saludo_final_ko.mp3' }
    ],
    bengali: [
        { id: 1, title: '1. পরিচিতি | স্বাগতম', url: BASE_URL + 'bengali/1.introduccion_bienvenida_bn.mp3' },
        { id: 2, title: '2. ব্যাংকক এবং এর খালসমূহ', url: BASE_URL + 'bengali/2.bangkok_y_sus_canales_bn.mp3' },
        { id: 3, title: '3. লংটেইল নৌকায় ভ্রমণ', url: BASE_URL + 'bengali/3.recorrido_en_barco_de_cola_larga_bn.mp3' },
        { id: 4, title: '4. ওয়াট অরুন | প্রভাতের মন্দির', url: BASE_URL + 'bengali/4.wat_arun_templo_del_amanecer_bn.mp3' },
        { id: 5, title: '5. সারসংক্ষেপ', url: BASE_URL + 'bengali/5.resumen_bn.mp3' },
        { id: 6, title: '6. সমাপনী শুভেচ্ছা', url: BASE_URL + 'bengali/6.saludo_final_bn.mp3' }
    ],
    malay: [
        { id: 1, title: '1. PENGENALAN | SELAMAT DATANG', url: BASE_URL + 'malay/1.introduccion_bienvenida_ms.mp3' },
        { id: 2, title: '2. BANGKOK DAN TERUSANNYA', url: BASE_URL + 'malay/2.bangkok_y_sus_canales_ms.mp3' },
        { id: 3, title: '3. LAWATAN DENGAN BOT EKOR PANJANG', url: BASE_URL + 'malay/3.recorrido_en_barco_de_cola_larga_ms.mp3' },
        { id: 4, title: '4. WAT ARUN | KUIL FAJAR', url: BASE_URL + 'malay/4.wat_arun_templo_del_amanecer_ms.mp3' },
        { id: 5, title: '5. RUMUSAN', url: BASE_URL + 'malay/5.resumen_ms.mp3' },
        { id: 6, title: '6. UCAPAN PENUTUP', url: BASE_URL + 'malay/6.saludo_final_ms.mp3' }
    ],
    czech: [
        { id: 1, title: '1. ÚVOD | VÍTEJTE', url: BASE_URL + 'czech/1.introduccion_bienvenida_cs.mp3' },
        { id: 2, title: '2. BANGKOK A JEHO KANÁLY', url: BASE_URL + 'czech/2.bangkok_y_sus_canales_cs.mp3' },
        { id: 3, title: '3. PLAVBA NA LODI S DLOUHÝM OCASEM', url: BASE_URL + 'czech/3.recorrido_en_barco_de_cola_larga_cs.mp3' },
        { id: 4, title: '4. WAT ARUN | CHRÁM ÚSVITU', url: BASE_URL + 'czech/4.wat_arun_templo_del_amanecer_cs.mp3' },
        { id: 5, title: '5. SHRNUTÍ', url: BASE_URL + 'czech/5.resumen_cs.mp3' },
        { id: 6, title: '6. ZÁVĚREČNÝ POZDRAV', url: BASE_URL + 'czech/6.saludo_final_cs.mp3' }
    ],
    mandarin_china: [
        { id: 1, title: '1. 介绍 | 欢迎', url: BASE_URL + 'chinese/1.introduccion_bienvenida_zh.mp3' },
        { id: 2, title: '2. 曼谷及其运河', url: BASE_URL + 'chinese/2.bangkok_y_sus_canales_zh.mp3' },
        { id: 3, title: '3. 长尾船之旅', url: BASE_URL + 'chinese/3.recorrido_en_barco_de_cola_larga_zh.mp3' },
        { id: 4, title: '4. 郑王庙 | 黎明寺', url: BASE_URL + 'chinese/4.wat_arun_templo_del_amanecer_zh.mp3' },
        { id: 5, title: '5. 总结', url: BASE_URL + 'chinese/5.resumen_zh.mp3' },
        { id: 6, title: '6. 结束问候', url: BASE_URL + 'chinese/6.saludo_final_zh.mp3' }
    ],
    danish: [
        { id: 1, title: '1. INTRODUKTION | VELKOMMEN', url: BASE_URL + 'danish/1.introduccion_bienvenida_da.mp3' },
        { id: 2, title: '2. BANGKOK OG DENS KANALER', url: BASE_URL + 'danish/2.bangkok_y_sus_canales_da.mp3' },
        { id: 3, title: '3. TUR MED LONGTAIL-BÅD', url: BASE_URL + 'danish/3.recorrido_en_barco_de_cola_larga_da.mp3' },
        { id: 4, title: '4. WAT ARUN | DAGGRYETS TEMPEL', url: BASE_URL + 'danish/4.wat_arun_templo_del_amanecer_da.mp3' },
        { id: 5, title: '5. OPSUMMERING', url: BASE_URL + 'danish/5.resumen_da.mp3' },
        { id: 6, title: '6. AFSLUTTENDE HILSEN', url: BASE_URL + 'danish/6.saludo_final_da.mp3' }
    ],
    english: [
        { id: 1, title: '1. INTRODUCTION | WELCOME', url: BASE_URL + 'english/1.introduccion_bienvenida_en.mp3' },
        { id: 2, title: '2. BANGKOK AND ITS CANALS', url: BASE_URL + 'english/2.bangkok_y_sus_canales_en.mp3' },
        { id: 3, title: '3. LONG-TAIL BOAT TOUR', url: BASE_URL + 'english/3.recorrido_en_barco_de_cola_larga_en.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPLE OF DAWN', url: BASE_URL + 'english/4.wat_arun_templo_del_amanecer_en.mp3' },
        { id: 5, title: '5. SUMMARY', url: BASE_URL + 'english/5.resumen_en.mp3' },
        { id: 6, title: '6. FINAL GREETING', url: BASE_URL + 'english/6.saludo_final_en.mp3' }
    ],
    spanish_spain: [
        { id: 1, title: '1. INTRODUCCIÓN | BIENVENIDA', url: BASE_URL + 'spanish_spain/1.introduccion_bienvenida_es_es.mp3' },
        { id: 2, title: '2. BANGKOK Y SUS CANALES', url: BASE_URL + 'spanish_spain/2.bangkok_y_sus_canales_es_es.mp3' },
        { id: 3, title: '3. RECORRIDO EN BARCO DE COLA LARGA', url: BASE_URL + 'spanish_spain/3.recorrido_en_barco_de_cola_larga_es_es.mp3' },
        { id: 4, title: '4. WAT ARUN | EL TEMPLO DEL AMANECER', url: BASE_URL + 'spanish_spain/4.wat_arun_templo_del_amanecer_es_es.mp3' },
        { id: 5, title: '5. RESUMEN', url: BASE_URL + 'spanish_spain/5.resumen_es_es.mp3' },
        { id: 6, title: '6. SALUDO FINAL', url: BASE_URL + 'spanish_spain/6.saludo_final_es_es.mp3' }
    ],
    mandarin_taiwan: [
        { id: 1, title: '1. 介紹 | 歡迎', url: BASE_URL + 'mandarin_taiwan/1.introduccion_bienvenida_zh_tw.mp3' },
        { id: 2, title: '2. 曼谷與其運河', url: BASE_URL + 'mandarin_taiwan/2.bangkok_y_sus_canales_zh_tw.mp3' },
        { id: 3, title: '3. 長尾船之旅', url: BASE_URL + 'mandarin_taiwan/3.recorrido_en_barco_de_cola_larga_zh_tw.mp3' },
        { id: 4, title: '4. 鄭王廟 | 曙光寺', url: BASE_URL + 'mandarin_taiwan/4.wat_arun_templo_del_amanecer_zh_tw.mp3' },
        { id: 5, title: '5. 總結', url: BASE_URL + 'mandarin_taiwan/5.resumen_zh_tw.mp3' },
        { id: 6, title: '6. 結語問候', url: BASE_URL + 'mandarin_taiwan/6.saludo_final_zh_tw.mp3' }
    ],
    greek: [
        { id: 1, title: '1. ΕΙΣΑΓΩΓΗ | ΚΑΛΩΣ ΗΡΘΑΤΕ', url: BASE_URL + 'greek/1.introduccion_bienvenida_el.mp3' },
        { id: 2, title: '2. Η ΜΠΑΝΓΚΟΚ ΚΑΙ ΤΑ ΚΑΝΑΛΙΑ ΤΗΣ', url: BASE_URL + 'greek/2.bangkok_y_sus_canales_el.mp3' },
        { id: 3, title: '3. ΠΕΡΙΗΓΗΣΗ ΜΕ ΜΑΚΡΥΠΡΥΜΝΟ ΣΚΑΦΟΣ', url: BASE_URL + 'greek/3.recorrido_en_barco_de_cola_larga_el.mp3' },
        { id: 4, title: '4. WAT ARUN | ΝΑΟΣ ΤΗΣ ΑΥΓΗΣ', url: BASE_URL + 'greek/4.wat_arun_templo_del_amanecer_el.mp3' },
        { id: 5, title: '5. ΠΕΡΙΛΗΨΗ', url: BASE_URL + 'greek/5.resumen_el.mp3' },
        { id: 6, title: '6. ΤΕΛΙΚΟΣ ΧΑΙΡΕΤΙΣΜΟΣ', url: BASE_URL + 'greek/6.saludo_final_el.mp3' }
    ],
    nepali: [
        { id: 1, title: '1. परिचय | स्वागत छ', url: BASE_URL + 'nepali/1.introduccion_bienvenida_ne.mp3' },
        { id: 2, title: '2. बैंकक र यसका नहरहरू', url: BASE_URL + 'nepali/2.bangkok_y_sus_canales_ne.mp3' },
        { id: 3, title: '3. लामो पुच्छर डुंगामा यात्रा', url: BASE_URL + 'nepali/3.recorrido_en_barco_de_cola_larga_ne.mp3' },
        { id: 4, title: '4. वाट अरुण | प्रभातको मन्दिर', url: BASE_URL + 'nepali/4.wat_arun_templo_del_amanecer_ne.mp3' },
        { id: 5, title: '5. सारांश', url: BASE_URL + 'nepali/5.resumen_ne.mp3' },
        { id: 6, title: '6. अन्तिम अभिवादन', url: BASE_URL + 'nepali/6.saludo_final_ne.mp3' }
    ],
    norwegian: [
        { id: 1, title: '1. INTRODUKSJON | VELKOMMEN', url: BASE_URL + 'norwegian/1.introduccion_bienvenida_no.mp3' },
        { id: 2, title: '2. BANGKOK OG DENS KANALER', url: BASE_URL + 'norwegian/2.bangkok_y_sus_canales_no.mp3' },
        { id: 3, title: '3. TUR MED LONGTAIL-BÅT', url: BASE_URL + 'norwegian/3.recorrido_en_barco_de_cola_larga_no.mp3' },
        { id: 4, title: '4. WAT ARUN | DAGGRYETS TEMPEL', url: BASE_URL + 'norwegian/4.wat_arun_templo_del_amanecer_no.mp3' },
        { id: 5, title: '5. OPPSUMMERING', url: BASE_URL + 'norwegian/5.resumen_no.mp3' },
        { id: 6, title: '6. AVSLUTTENDE HILSEN', url: BASE_URL + 'norwegian/6.saludo_final_no.mp3' }
    ],
    turkish: [
        { id: 1, title: '1. GİRİŞ | HOŞ GELDİNİZ', url: BASE_URL + 'turkish/1.introduccion_bienvenida_tr.mp3' },
        { id: 2, title: '2. BANGKOK VE KANALLARI', url: BASE_URL + 'turkish/2.bangkok_y_sus_canales_tr.mp3' },
        { id: 3, title: '3. UZUN KUYRUKLU TEKNE TURU', url: BASE_URL + 'turkish/3.recorrido_en_barco_de_cola_larga_tr.mp3' },
        { id: 4, title: '4. WAT ARUN | ŞAFAK TAPINAĞI', url: BASE_URL + 'turkish/4.wat_arun_templo_del_amanecer_tr.mp3' },
        { id: 5, title: '5. ÖZET', url: BASE_URL + 'turkish/5.resumen_tr.mp3' },
        { id: 6, title: '6. KAPANIŞ SELAMI', url: BASE_URL + 'turkish/6.saludo_final_tr.mp3' }
    ],
    cambodian: [
        { id: 1, title: '1. សេចក្តីផ្តើម | សូមស្វាគមន៍', url: BASE_URL + 'cambodian/1.introduccion_bienvenida_km.mp3' },
        { id: 2, title: '2. បាងកក និងប្រឡាយរបស់វា', url: BASE_URL + 'cambodian/2.bangkok_y_sus_canales_km.mp3' },
        { id: 3, title: '3. ដំណើរកម្សាន្តដោយទូកកន្ទុយវែង', url: BASE_URL + 'cambodian/3.recorrido_en_barco_de_cola_larga_km.mp3' },
        { id: 4, title: '4. វត្តអរុណ | ប្រាសាទព្រឹកព្រោះ', url: BASE_URL + 'cambodian/4.wat_arun_templo_del_amanecer_km.mp3' },
        { id: 5, title: '5. សេចក្តីសង្ខេប', url: BASE_URL + 'cambodian/5.resumen_km.mp3' },
        { id: 6, title: '6. ការស្វាគមន៍បញ្ចប់', url: BASE_URL + 'cambodian/6.saludo_final_km.mp3' }
    ],
    hindi: [
        { id: 1, title: '1. परिचय | स्वागत है', url: BASE_URL + 'hindi/1.introduccion_bienvenida_hi.mp3' },
        { id: 2, title: '2. बैंकॉक और इसकी नहरें', url: BASE_URL + 'hindi/2.bangkok_y_sus_canales_hi.mp3' },
        { id: 3, title: '3. लॉन्ग-टेल बोट यात्रा', url: BASE_URL + 'hindi/3.recorrido_en_barco_de_cola_larga_hi.mp3' },
        { id: 4, title: '4. वाट अरुण | प्रभात का मंदिर', url: BASE_URL + 'hindi/4.wat_arun_templo_del_amanecer_hi.mp3' },
        { id: 5, title: '5. सारांश', url: BASE_URL + 'hindi/5.resumen_hi.mp3' },
        { id: 6, title: '6. अंतिम अभिवादन', url: BASE_URL + 'hindi/6.saludo_final_hi.mp3' }
    ],
    persian: [
        { id: 1, title: '1. مقدمه | خوش آمدید', url: BASE_URL + 'persian/1.introduccion_bienvenida_fa.mp3' },
        { id: 2, title: '2. بانکوک و کانال‌های آن', url: BASE_URL + 'persian/2.bangkok_y_sus_canales_fa.mp3' },
        { id: 3, title: '3. گشت با قایق دم‌دراز', url: BASE_URL + 'persian/3.recorrido_en_barco_de_cola_larga_fa.mp3' },
        { id: 4, title: '4. وات آرون | معبد سپیده‌دم', url: BASE_URL + 'persian/4.wat_arun_templo_del_amanecer_fa.mp3' },
        { id: 5, title: '5. خلاصه', url: BASE_URL + 'persian/5.resumen_fa.mp3' },
        { id: 6, title: '6. خداحافظی پایانی', url: BASE_URL + 'persian/6.saludo_final_fa.mp3' }
    ],
    polish: [
        { id: 1, title: '1. WPROWADZENIE | WITAMY', url: BASE_URL + 'polish/1.introduccion_bienvenida_pl.mp3' },
        { id: 2, title: '2. BANGKOK I JEGO KANAŁY', url: BASE_URL + 'polish/2.bangkok_y_sus_canales_pl.mp3' },
        { id: 3, title: '3. REJS ŁODZIĄ Z DŁUGIM OGONEM', url: BASE_URL + 'polish/3.recorrido_en_barco_de_cola_larga_pl.mp3' },
        { id: 4, title: '4. WAT ARUN | ŚWIĄTYNIA ŚWITU', url: BASE_URL + 'polish/4.wat_arun_templo_del_amanecer_pl.mp3' },
        { id: 5, title: '5. PODSUMOWANIE', url: BASE_URL + 'polish/5.resumen_pl.mp3' },
        { id: 6, title: '6. POŻEGNANIE KOŃCOWE', url: BASE_URL + 'polish/6.saludo_final_pl.mp3' }
    ],
    spanish_latam: [
        { id: 1, title: '1. INTRODUCCIÓN | BIENVENIDOS', url: BASE_URL + 'spanish_latam/1.introduccion_bienvenida_es_latam.mp3' },
        { id: 2, title: '2. BANGKOK Y SUS CANALES', url: BASE_URL + 'spanish_latam/2.bangkok_y_sus_canales_es_latam.mp3' },
        { id: 3, title: '3. RECORRIDO EN BARCO DE COLA LARGA', url: BASE_URL + 'spanish_latam/3.recorrido_en_barco_de_cola_larga_es_latam.mp3' },
        { id: 4, title: '4. WAT ARUN | EL TEMPLO DEL AMANECER', url: BASE_URL + 'spanish_latam/4.wat_arun_templo_del_amanecer_es_latam.mp3' },
        { id: 5, title: '5. RESUMEN', url: BASE_URL + 'spanish_latam/5.resumen_es_latam.mp3' },
        { id: 6, title: '6. SALUDO FINAL', url: BASE_URL + 'spanish_latam/6.saludo_final_es_latam.mp3' }
    ],
    ukrainian: [
        { id: 1, title: '1. ВСТУП | ЛАСКАВО ПРОСИМО', url: BASE_URL + 'ukrainian/1.introduccion_bienvenida_uk.mp3' },
        { id: 2, title: '2. БАНГКОК І ЙОГО КАНАЛИ', url: BASE_URL + 'ukrainian/2.bangkok_y_sus_canales_uk.mp3' },
        { id: 3, title: '3. ПРОГУЛЯНКА НА ДОВГОХВОСТОМУ ЧОВНІ', url: BASE_URL + 'ukrainian/3.recorrido_en_barco_de_cola_larga_uk.mp3' },
        { id: 4, title: '4. WAT ARUN | ХРАМ СВІТАНКУ', url: BASE_URL + 'ukrainian/4.wat_arun_templo_del_amanecer_uk.mp3' },
        { id: 5, title: '5. ПІДСУМОК', url: BASE_URL + 'ukrainian/5.resumen_uk.mp3' },
        { id: 6, title: '6. ФІНАЛЬНЕ ВІТАННЯ', url: BASE_URL + 'ukrainian/6.saludo_final_uk.mp3' }
    ],
    catalan: [
        { id: 1, title: '1. INTRODUCCIÓ | BENVINGUTS', url: BASE_URL + 'catalan/1.introduccion_bienvenida_ca.mp3' },
        { id: 2, title: '2. BANGKOK I ELS SEUS CANALS', url: BASE_URL + 'catalan/2.bangkok_y_sus_canales_ca.mp3' },
        { id: 3, title: '3. RECORREGUT EN BARCA DE CUA LLARGA', url: BASE_URL + 'catalan/3.recorrido_en_barco_de_cola_larga_ca.mp3' },
        { id: 4, title: '4. WAT ARUN | EL TEMPLE DE L’ALBA', url: BASE_URL + 'catalan/4.wat_arun_templo_del_amanecer_ca.mp3' },
        { id: 5, title: '5. RESUM', url: BASE_URL + 'catalan/5.resumen_ca.mp3' },
        { id: 6, title: '6. SALUTACIÓ FINAL', url: BASE_URL + 'catalan/6.saludo_final_ca.mp3' }
    ],
    hungarian: [
        { id: 1, title: '1. BEVEZETÉS | ÜDVÖZÖLJÜK', url: BASE_URL + 'hungarian/1.introduccion_bienvenida_hu.mp3' },
        { id: 2, title: '2. BANGKOK ÉS CSATORNÁI', url: BASE_URL + 'hungarian/2.bangkok_y_sus_canales_hu.mp3' },
        { id: 3, title: '3. HOSSZÚFARKÚ CSÓNAKTÚRA', url: BASE_URL + 'hungarian/3.recorrido_en_barco_de_cola_larga_hu.mp3' },
        { id: 4, title: '4. WAT ARUN | A HAJNAL TEMPLOMA', url: BASE_URL + 'hungarian/4.wat_arun_templo_del_amanecer_hu.mp3' },
        { id: 5, title: '5. ÖSSZEFOGLALÁS', url: BASE_URL + 'hungarian/5.resumen_hu.mp3' },
        { id: 6, title: '6. ZÁRÓ ÜDVÖZLET', url: BASE_URL + 'hungarian/6.saludo_final_hu.mp3' }
    ],
    portuguese: [
        { id: 1, title: '1. INTRODUÇÃO | BEM-VINDOS', url: BASE_URL + 'portuguese/1.introduccion_bienvenida_pt.mp3' },
        { id: 2, title: '2. BANGKOK E SEUS CANAIS', url: BASE_URL + 'portuguese/2.bangkok_y_sus_canales_pt.mp3' },
        { id: 3, title: '3. PASSEIO DE BARCO LONGTAIL', url: BASE_URL + 'portuguese/3.recorrido_en_barco_de_cola_larga_pt.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPLO DO AMANHECER', url: BASE_URL + 'portuguese/4.wat_arun_templo_del_amanecer_pt.mp3' },
        { id: 5, title: '5. RESUMO', url: BASE_URL + 'portuguese/5.resumen_pt.mp3' },
        { id: 6, title: '6. SAUDAÇÃO FINAL', url: BASE_URL + 'portuguese/6.saludo_final_pt.mp3' }
    ],
    croatian: [
        { id: 1, title: '1. UVOD | DOBRODOŠLI', url: BASE_URL + 'croatian/1.introduccion_bienvenida_hr.mp3' },
        { id: 2, title: '2. BANGKOK I NJEGOVI KANALI', url: BASE_URL + 'croatian/2.bangkok_y_sus_canales_hr.mp3' },
        { id: 3, title: '3. VOŽNJA ČAMCEM S DUGIM REPOM', url: BASE_URL + 'croatian/3.recorrido_en_barco_de_cola_larga_hr.mp3' },
        { id: 4, title: '4. WAT ARUN | HRAM ZORE', url: BASE_URL + 'croatian/4.wat_arun_templo_del_amanecer_hr.mp3' },
        { id: 5, title: '5. SAŽETAK', url: BASE_URL + 'croatian/5.resumen_hr.mp3' },
        { id: 6, title: '6. ZAVRŠNI POZDRAV', url: BASE_URL + 'croatian/6.saludo_final_hr.mp3' }
    ],
    dutch: [
        { id: 1, title: '1. INTRODUCTIE | WELKOM', url: BASE_URL + 'dutch/1.introduccion_bienvenida_nl.mp3' },
        { id: 2, title: '2. BANGKOK EN ZIJN KANALEN', url: BASE_URL + 'dutch/2.bangkok_y_sus_canales_nl.mp3' },
        { id: 3, title: '3. TOCHT MET EEN LONGTAILBOOT', url: BASE_URL + 'dutch/3.recorrido_en_barco_de_cola_larga_nl.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPEL VAN DE DAWN', url: BASE_URL + 'dutch/4.wat_arun_templo_del_amanecer_nl.mp3' },
        { id: 5, title: '5. SAMENVATTING', url: BASE_URL + 'dutch/5.resumen_nl.mp3' },
        { id: 6, title: '6. AFSLUITENDE GROET', url: BASE_URL + 'dutch/6.saludo_final_nl.mp3' }
    ],
    indonesian: [
        { id: 1, title: '1. PENGANTAR | SELAMAT DATANG', url: BASE_URL + 'indonesian/1.introduccion_bienvenida_id.mp3' },
        { id: 2, title: '2. BANGKOK DAN KANAL-KANALNYA', url: BASE_URL + 'indonesian/2.bangkok_y_sus_canales_id.mp3' },
        { id: 3, title: '3. TUR PERAHU EKOR PANJANG', url: BASE_URL + 'indonesian/3.recorrido_en_barco_de_cola_larga_id.mp3' },
        { id: 4, title: '4. WAT ARUN | KUIL FAJAR', url: BASE_URL + 'indonesian/4.wat_arun_templo_del_amanecer_id.mp3' },
        { id: 5, title: '5. RINGKASAN', url: BASE_URL + 'indonesian/5.resumen_id.mp3' },
        { id: 6, title: '6. SALAM PENUTUP', url: BASE_URL + 'indonesian/6.saludo_final_id.mp3' }
    ],
    russian: [
        { id: 1, title: '1. ВВЕДЕНИЕ | ДОБРО ПОЖАЛОВАТЬ', url: BASE_URL + 'russian/1.introduccion_bienvenida_ru.mp3' },
        { id: 2, title: '2. БАНГКОК И ЕГО КАНАЛЫ', url: BASE_URL + 'russian/2.bangkok_y_sus_canales_ru.mp3' },
        { id: 3, title: '3. ПРОГУЛКА НА ДЛИННОХВОСТОЙ ЛОДКЕ', url: BASE_URL + 'russian/3.recorrido_en_barco_de_cola_larga_ru.mp3' },
        { id: 4, title: '4. ВАТ АРУН | ХРАМ РАССВЕТА', url: BASE_URL + 'russian/4.wat_arun_templo_del_amanecer_ru.mp3' },
        { id: 5, title: '5. РЕЗЮМЕ', url: BASE_URL + 'russian/5.resumen_ru.mp3' },
        { id: 6, title: '6. ЗАКЛЮЧИТЕЛЬНОЕ ПРИВЕТСТВИЕ', url: BASE_URL + 'russian/6.saludo_final_ru.mp3' }
    ],
    serbian: [
        { id: 1, title: '1. UVOD | DOBRODOŠLI', url: BASE_URL + 'serbian/1.introduccion_bienvenida_sr.mp3' },
        { id: 2, title: '2. BANGKOK I NJEGOVI KANALI', url: BASE_URL + 'serbian/2.bangkok_y_sus_canales_sr.mp3' },
        { id: 3, title: '3. VOŽNJA ČAMCEM SA DUGIM REPOM', url: BASE_URL + 'serbian/3.recorrido_en_barco_de_cola_larga_sr.mp3' },
        { id: 4, title: '4. WAT ARUN | HRAM SVITANJA', url: BASE_URL + 'serbian/4.wat_arun_templo_del_amanecer_sr.mp3' },
        { id: 5, title: '5. SAŽETAK', url: BASE_URL + 'serbian/5.resumen_sr.mp3' },
        { id: 6, title: '6. ZAVRŠNI POZDRAV', url: BASE_URL + 'serbian/6.saludo_final_sr.mp3' }
    ],
    urdu: [
        { id: 1, title: '1. تعارف | خوش آمدید', url: BASE_URL + 'urdu/1.introduccion_bienvenida_ur.mp3' },
        { id: 2, title: '2. بینکاک اور اس کی نہریں', url: BASE_URL + 'urdu/2.bangkok_y_sus_canales_ur.mp3' },
        { id: 3, title: '3. لانگ ٹیل کشتی کی سیر', url: BASE_URL + 'urdu/3.recorrido_en_barco_de_cola_larga_ur.mp3' },
        { id: 4, title: '4. واٹ ارون | مندرِ سحر', url: BASE_URL + 'urdu/4.wat_arun_templo_del_amanecer_ur.mp3' },
        { id: 5, title: '5. خلاصہ', url: BASE_URL + 'urdu/5.resumen_ur.mp3' },
        { id: 6, title: '6. آخری سلام', url: BASE_URL + 'urdu/6.saludo_final_ur.mp3' }
    ],
    slovenian: [
        { id: 1, title: '1. UVOD | DOBRODOŠLI', url: BASE_URL + 'slovenian/1.introduccion_bienvenida_sl.mp3' },
        { id: 2, title: '2. BANGKOK IN NJEGOVI KANALI', url: BASE_URL + 'slovenian/2.bangkok_y_sus_canales_sl.mp3' },
        { id: 3, title: '3. VOŽNJA Z DOLGOREPO LADJO', url: BASE_URL + 'slovenian/3.recorrido_en_barco_de_cola_larga_sl.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPelj ZORE', url: BASE_URL + 'slovenian/4.wat_arun_templo_del_amanecer_sl.mp3' },
        { id: 5, title: '5. POVZETEK', url: BASE_URL + 'slovenian/5.resumen_sl.mp3' },
        { id: 6, title: '6. ZAKLJUČNI POZDRAV', url: BASE_URL + 'slovenian/6.saludo_final_sl.mp3' }
    ],
    basque: [
        { id: 1, title: '1. SARRERA | ONGIE TORRI', url: BASE_URL + 'basque/1.introduccion_bienvenida_eu.mp3' },
        { id: 2, title: '2. BANGKOK ETA BERE KANALAK', url: BASE_URL + 'basque/2.bangkok_y_sus_canales_eu.mp3' },
        { id: 3, title: '3. ISATS LUZEDUN TXALUPAZKO IBILALDIA', url: BASE_URL + 'basque/3.recorrido_en_barco_de_cola_larga_eu.mp3' },
        { id: 4, title: '4. WAT ARUN | EGUNSENTIAREN TENPLUA', url: BASE_URL + 'basque/4.wat_arun_templo_del_amanecer_eu.mp3' },
        { id: 5, title: '5. LABURPENA', url: BASE_URL + 'basque/5.resumen_eu.mp3' },
        { id: 6, title: '6. AZKEN AGURRA', url: BASE_URL + 'basque/6.saludo_final_eu.mp3' }
    ],
    italian: [
        { id: 1, title: '1. INTRODUZIONE | BENVENUTI', url: BASE_URL + 'italian/1.introduccion_bienvenida_it.mp3' },
        { id: 2, title: '2. BANGKOK E I SUOI CANALI', url: BASE_URL + 'italian/2.bangkok_y_sus_canales_it.mp3' },
        { id: 3, title: '3. GIRO IN BARCA LONGTAIL', url: BASE_URL + 'italian/3.recorrido_en_barco_de_cola_larga_it.mp3' },
        { id: 4, title: '4. WAT ARUN | IL TEMPIO DELL’ALBA', url: BASE_URL + 'italian/4.wat_arun_templo_del_amanecer_it.mp3' },
        { id: 5, title: '5. RIASSUNTO', url: BASE_URL + 'italian/5.resumen_it.mp3' },
        { id: 6, title: '6. SALUTO FINALE', url: BASE_URL + 'italian/6.saludo_final_it.mp3' }
    ],
    filipino: [
        { id: 1, title: '1. PANIMULA | MALIGAYANG PAGDATING', url: BASE_URL + 'filipino/1.introduccion_bienvenida_fil.mp3' },
        { id: 2, title: '2. BANGKOK AT ANG MGA KANAL NITO', url: BASE_URL + 'filipino/2.bangkok_y_sus_canales_fil.mp3' },
        { id: 3, title: '3. BIYAHE SA LONG-TAIL NA BANGKA', url: BASE_URL + 'filipino/3.recorrido_en_barco_de_cola_larga_fil.mp3' },
        { id: 4, title: '4. WAT ARUN | TEMPLO NG LIWAYWAY', url: BASE_URL + 'filipino/4.wat_arun_templo_del_amanecer_fil.mp3' },
        { id: 5, title: '5. BUOD', url: BASE_URL + 'filipino/5.resumen_fil.mp3' },
        { id: 6, title: '6. PANGWAKAS NA PAGBATI', url: BASE_URL + 'filipino/6.saludo_final_fil.mp3' }
    ],
    swahili: [
        { id: 1, title: '1. UTANGULIZI | KARIBU', url: BASE_URL + 'swahili/1.introduccion_bienvenida_sw.mp3' },
        { id: 2, title: '2. BANGKOK NA MIFEREJI YAKE', url: BASE_URL + 'swahili/2.bangkok_y_sus_canales_sw.mp3' },
        { id: 3, title: '3. ZIARA YA MASHUA YA MKIA MREFU', url: BASE_URL + 'swahili/3.recorrido_en_barco_de_cola_larga_sw.mp3' },
        { id: 4, title: '4. WAT ARUN | HEKALU LA MAPAMBAPUKO', url: BASE_URL + 'swahili/4.wat_arun_templo_del_amanecer_sw.mp3' },
        { id: 5, title: '5. MUHTASARI', url: BASE_URL + 'swahili/5.resumen_sw.mp3' },
        { id: 6, title: '6. SALAMU YA MWISHO', url: BASE_URL + 'swahili/6.saludo_final_sw.mp3' }
    ],
    swedish: [
        { id: 1, title: '1. INTRODUKTION | VÄLKOMMEN', url: BASE_URL + 'swedish/1.introduccion_bienvenida_sv.mp3' },
        { id: 2, title: '2. BANGKOK OCH DESS KANALER', url: BASE_URL + 'swedish/2.bangkok_y_sus_canales_sv.mp3' },
        { id: 3, title: '3. TUR MED LONGTAIL-BÅT', url: BASE_URL + 'swedish/3.recorrido_en_barco_de_cola_larga_sv.mp3' },
        { id: 4, title: '4. WAT ARUN | GRYNINGSTEMPLET', url: BASE_URL + 'swedish/4.wat_arun_templo_del_amanecer_sv.mp3' },
        { id: 5, title: '5. SAMMANFATTNING', url: BASE_URL + 'swedish/5.resumen_sv.mp3' },
        { id: 6, title: '6. AVSLUTANDE HÄLSNING', url: BASE_URL + 'swedish/6.saludo_final_sv.mp3' }
    ],
}