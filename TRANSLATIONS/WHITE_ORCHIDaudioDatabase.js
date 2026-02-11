const audioDatabase = {
    Deutsch: [
        { id: 1, title: '1. WILLKOMMEN | ABENDESSEN NACHTKREUZFAHRT', url: BASE_URL + 'german/1.bienvenidos_cena_crucero_nocturna_de.mp3' },
        { id: 2, title: '2. CHAO-PHRAYA-FLUSS', url: BASE_URL + 'german/2.rio_chao_phraya_de.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPEL DER MORGENRÖTE', url: BASE_URL + 'german/3.wat_arun_templo_del_amanecer_de.mp3' },
        { id: 4, title: '4. DER GROSSE KÖNIGSPALAST UND WAT PHRA KAEW | TEMPEL DES SMARAGDBUDDHAS', url: BASE_URL + 'german/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_de.mp3' },
        { id: 5, title: '5. RAMA-VIII-BRÜCKE', url: BASE_URL + 'german/5.puente_rama_viii_de.mp3' },
        { id: 6, title: '6. PANORAMABLICKE AUF DAS FLUSSUFER', url: BASE_URL + 'german/6.vistas_panoramicas_rivera_de.mp3' },
        { id: 7, title: '7. INTERNATIONALES UND THAILÄNDISCHES BUFFET', url: BASE_URL + 'german/7.buffet_internacional_y_tailandes_de.mp3' },
        { id: 8, title: '8. ABSCHIEDSGRUSS', url: BASE_URL + 'german/8.saludo_final_de.mp3' }
    ],
    العربية: [
        { id: 1, title: '1. مرحبًا بكم | عشاء رحلة بحرية ليلية', url: BASE_URL + 'arabic/1.bienvenidos_cena_crucero_nocturna_ar.mp3' },
        { id: 2, title: '2. نهر تشاو فرايا', url: BASE_URL + 'arabic/2.rio_chao_phraya_ar.mp3' },
        { id: 3, title: '3. وات آرون | معبد الفجر', url: BASE_URL + 'arabic/3.wat_arun_templo_del_amanecer_ar.mp3' },
        { id: 4, title: '4. القصر الملكي الكبير ووات فرا كايو | معبد بوذا الزمردي', url: BASE_URL + 'arabic/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ar.mp3' },
        { id: 5, title: '5. جسر راما الثامن', url: BASE_URL + 'arabic/5.puente_rama_viii_ar.mp3' },
        { id: 6, title: '6. مناظر بانورامية لضفاف النهر', url: BASE_URL + 'arabic/6.vistas_panoramicas_rivera_ar.mp3' },
        { id: 7, title: '7. بوفيه عالمي وتايلاندي', url: BASE_URL + 'arabic/7.buffet_internacional_y_tailandes_ar.mp3' },
        { id: 8, title: '8. تحية الوداع', url: BASE_URL + 'arabic/8.saludo_final_ar.mp3' }
    ],
    বাংলা: [
        { id: 1, title: '1. স্বাগতম | রাতের নৌভ্রমণের নৈশভোজ', url: BASE_URL + 'bengali/1.bienvenidos_cena_crucero_nocturna_bn.mp3' },
        { id: 2, title: '2. চাও ফ্রায়া নদী', url: BASE_URL + 'bengali/2.rio_chao_phraya_bn.mp3' },
        { id: 3, title: '3. ওয়াট আরুন | ভোরের মন্দির', url: BASE_URL + 'bengali/3.wat_arun_templo_del_amanecer_bn.mp3' },
        { id: 4, title: '4. গ্র্যান্ড রয়্যাল প্যালেস ও ওয়াট ফ্রা কায়েও | পান্না বুদ্ধের মন্দির', url: BASE_URL + 'bengali/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_bn.mp3' },
        { id: 5, title: '5. রামা অষ্টম সেতু', url: BASE_URL + 'bengali/5.puente_rama_viii_bn.mp3' },
        { id: 6, title: '6. নদীর তীরের মনোরম দৃশ্য', url: BASE_URL + 'bengali/6.vistas_panoramicas_rivera_bn.mp3' },
        { id: 7, title: '7. আন্তর্জাতিক ও থাই বুফে', url: BASE_URL + 'bengali/7.buffet_internacional_y_tailandes_bn.mp3' },
        { id: 8, title: '8. বিদায় সম্ভাষণ', url: BASE_URL + 'bengali/8.saludo_final_bn.mp3' }
    ],
    简体中_中国: [
        { id: 1, title: '1. 欢迎 | 夜游游船晚宴', url: BASE_URL + 'mandarin_china/1.bienvenidos_cena_crucero_nocturna_zh.mp3' },
        { id: 2, title: '2. 昭披耶河', url: BASE_URL + 'mandarin_china/2.rio_chao_phraya_zh.mp3' },
        { id: 3, title: '3. 郑王庙 | 黎明寺', url: BASE_URL + 'mandarin_china/3.wat_arun_templo_del_amanecer_zh.mp3' },
        { id: 4, title: '4. 大皇宫与玉佛寺 | 翡翠佛寺', url: BASE_URL + 'mandarin_china/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_zh.mp3' },
        { id: 5, title: '5. 拉玛八世大桥', url: BASE_URL + 'mandarin_china/5.puente_rama_viii_zh.mp3' },
        { id: 6, title: '6. 河岸全景美景', url: BASE_URL + 'mandarin_china/6.vistas_panoramicas_rivera_zh.mp3' },
        { id: 7, title: '7. 国际与泰式自助餐', url: BASE_URL + 'mandarin_china/7.buffet_internacional_y_tailandes_zh.mp3' },
        { id: 8, title: '8. 告别致意', url: BASE_URL + 'mandarin_china/8.saludo_final_zh.mp3' }
    ],
    Čeština: [
        { id: 1, title: '1. VÍTEJTE | VEČEŘE NA NOČNÍ PLAVBĚ', url: BASE_URL + 'czech/1.bienvenidos_cena_crucero_nocturna_cs.mp3' },
        { id: 2, title: '2. ŘEKA CHAO PHRAYA', url: BASE_URL + 'czech/2.rio_chao_phraya_cs.mp3' },
        { id: 3, title: '3. WAT ARUN | CHRÁM ÚSVITU', url: BASE_URL + 'czech/3.wat_arun_templo_del_amanecer_cs.mp3' },
        { id: 4, title: '4. VELKÝ KRÁLOVSKÝ PALÁC A WAT PHRA KAEW | CHRÁM SMARAGDOVÉHO BUDDHY', url: BASE_URL + 'czech/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_cs.mp3' },
        { id: 5, title: '5. MOST RAMA VIII', url: BASE_URL + 'czech/5.puente_rama_viii_cs.mp3' },
        { id: 6, title: '6. PANORAMATICKÉ VÝHLEDY NA ŘÍČNÍ BŘEHY', url: BASE_URL + 'czech/6.vistas_panoramicas_rivera_cs.mp3' },
        { id: 7, title: '7. MEZINÁRODNÍ A THAJSKÝ BUFET', url: BASE_URL + 'czech/7.buffet_internacional_y_tailandes_cs.mp3' },
        { id: 8, title: '8. ZÁVĚREČNÝ POZDRAV', url: BASE_URL + 'czech/8.saludo_final_cs.mp3' }
    ],
    日本語: [
        { id: 1, title: '1. ようこそ | ナイトクルーズ ディナー', url: BASE_URL + 'japanese/1.bienvenidos_cena_crucero_nocturna_ja.mp3' },
        { id: 2, title: '2. チャオプラヤー川', url: BASE_URL + 'japanese/2.rio_chao_phraya_ja.mp3' },
        { id: 3, title: '3. ワット・アルン | 暁の寺', url: BASE_URL + 'japanese/3.wat_arun_templo_del_amanecer_ja.mp3' },
        { id: 4, title: '4. 王宮とワット・プラケオ | エメラルド仏寺院', url: BASE_URL + 'japanese/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ja.mp3' },
        { id: 5, title: '5. ラマ8世橋', url: BASE_URL + 'japanese/5.puente_rama_viii_ja.mp3' },
        { id: 6, title: '6. 川沿いのパノラマ景観', url: BASE_URL + 'japanese/6.vistas_panoramicas_rivera_ja.mp3' },
        { id: 7, title: '7. インターナショナル＆タイ料理ビュッフェ', url: BASE_URL + 'japanese/7.buffet_internacional_y_tailandes_ja.mp3' },
        { id: 8, title: '8. お別れの挨拶', url: BASE_URL + 'japanese/8.saludo_final_ja.mp3' }
    ],
    한국어: [
        { id: 1, title: '1. 환영합니다 | 야간 크루즈 디너', url: BASE_URL + 'korean/1.bienvenidos_cena_crucero_nocturna_ko.mp3' },
        { id: 2, title: '2. 차오프라야 강', url: BASE_URL + 'korean/2.rio_chao_phraya_ko.mp3' },
        { id: 3, title: '3. 왓 아룬 | 새벽 사원', url: BASE_URL + 'korean/3.wat_arun_templo_del_amanecer_ko.mp3' },
        { id: 4, title: '4. 왕궁과 왓 프라깨우 | 에메랄드 부처 사원', url: BASE_URL + 'korean/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ko.mp3' },
        { id: 5, title: '5. 라마 8세 다리', url: BASE_URL + 'korean/5.puente_rama_viii_ko.mp3' },
        { id: 6, title: '6. 강변 파노라마 전망', url: BASE_URL + 'korean/6.vistas_panoramicas_rivera_ko.mp3' },
        { id: 7, title: '7. 인터내셔널 및 태국식 뷔페', url: BASE_URL + 'korean/7.buffet_internacional_y_tailandes_ko.mp3' },
        { id: 8, title: '8. 작별 인사', url: BASE_URL + 'korean/8.saludo_final_ko.mp3' }
    ],
    Bahasa_Melayu: [
        { id: 1, title: '1. SELAMAT DATANG | MAKAN MALAM PELAYARAN MALAM', url: BASE_URL + 'malay/1.bienvenidos_cena_crucero_nocturna_ms.mp3' },
        { id: 2, title: '2. SUNGAI CHAO PHRAYA', url: BASE_URL + 'malay/2.rio_chao_phraya_ms.mp3' },
        { id: 3, title: '3. WAT ARUN | KUIL FAJAR', url: BASE_URL + 'malay/3.wat_arun_templo_del_amanecer_ms.mp3' },
        { id: 4, title: '4. ISTANA DIRAJA AGUNG DAN WAT PHRA KAEW | KUIL BUDDHA EMERALD', url: BASE_URL + 'malay/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ms.mp3' },
        { id: 5, title: '5. JAMBATAN RAMA VIII', url: BASE_URL + 'malay/5.puente_rama_viii_ms.mp3' },
        { id: 6, title: '6. PEMANDANGAN PANORAMA TEPI SUNGAI', url: BASE_URL + 'malay/6.vistas_panoramicas_rivera_ms.mp3' },
        { id: 7, title: '7. BUFET ANTARABANGSA DAN THAI', url: BASE_URL + 'malay/7.buffet_internacional_y_tailandes_ms.mp3' },
        { id: 8, title: '8. UCAPAN PERPISAHAN', url: BASE_URL + 'malay/8.saludo_final_ms.mp3' }
    ],
    Dansk: [
        { id: 1, title: '1. VELKOMMEN | AFTENSMAD PÅ NATKRYDSTOGT', url: BASE_URL + 'danish/1.bienvenidos_cena_crucero_nocturna_da.mp3' },
        { id: 2, title: '2. CHAO PHRAYA-FLODEN', url: BASE_URL + 'danish/2.rio_chao_phraya_da.mp3' },
        { id: 3, title: '3. WAT ARUN | DAGGRYETS TEMPEL', url: BASE_URL + 'danish/3.wat_arun_templo_del_amanecer_da.mp3' },
        { id: 4, title: '4. DET STORE KONGEPALADS OG WAT PHRA KAEW | SMARAGDBUDDHAENS TEMPEL', url: BASE_URL + 'danish/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_da.mp3' },
        { id: 5, title: '5. RAMA VIII-BROEN', url: BASE_URL + 'danish/5.puente_rama_viii_da.mp3' },
        { id: 6, title: '6. PANORAMISKE UDSIGTER OVER FLUDBREDEN', url: BASE_URL + 'danish/6.vistas_panoramicas_rivera_da.mp3' },
        { id: 7, title: '7. INTERNATIONAL OG THAILANDSK BUFFET', url: BASE_URL + 'danish/7.buffet_internacional_y_tailandes_da.mp3' },
        { id: 8, title: '8. AFSLUTTENDE HILSEN', url: BASE_URL + 'danish/8.saludo_final_da.mp3' }
    ],
    English: [
        { id: 1, title: '1. WELCOME | NIGHT CRUISE DINNER', url: BASE_URL + 'english/1.bienvenidos_cena_crucero_nocturna_en.mp3' },
        { id: 2, title: '2. CHAO PHRAYA RIVER', url: BASE_URL + 'english/2.rio_chao_phraya_en.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLE OF DAWN', url: BASE_URL + 'english/3.wat_arun_templo_del_amanecer_en.mp3' },
        { id: 4, title: '4. THE GRAND ROYAL PALACE AND WAT PHRA KAEW | TEMPLE OF THE EMERALD BUDDHA', url: BASE_URL + 'english/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_en.mp3' },
        { id: 5, title: '5. RAMA VIII BRIDGE', url: BASE_URL + 'english/5.puente_rama_viii_en.mp3' },
        { id: 6, title: '6. PANORAMIC VIEWS OF THE RIVERBANK', url: BASE_URL + 'english/6.vistas_panoramicas_rivera_en.mp3' },
        { id: 7, title: '7. INTERNATIONAL AND THAI BUFFET', url: BASE_URL + 'english/7.buffet_internacional_y_tailandes_en.mp3' },
        { id: 8, title: '8. FAREWELL GREETING', url: BASE_URL + 'english/8.saludo_final_en.mp3' }
    ],
    नेपाली: [
        { id: 1, title: '1. स्वागत छ | रात्री क्रुज डिनर', url: BASE_URL + 'nepali/1.bienvenidos_cena_crucero_nocturna_ne.mp3' },
        { id: 2, title: '2. चाओ फ्राया नदी', url: BASE_URL + 'nepali/2.rio_chao_phraya_ne.mp3' },
        { id: 3, title: '3. वाट अरुण | प्रभातको मन्दिर', url: BASE_URL + 'nepali/3.wat_arun_templo_del_amanecer_ne.mp3' },
        { id: 4, title: '4. महान राजदरबार र वाट फ्रा काएव | पन्ना बुद्धको मन्दिर', url: BASE_URL + 'nepali/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ne.mp3' },
        { id: 5, title: '5. राम आठौं पुल', url: BASE_URL + 'nepali/5.puente_rama_viii_ne.mp3' },
        { id: 6, title: '6. नदी किनाराका मनोरम दृश्यहरू', url: BASE_URL + 'nepali/6.vistas_panoramicas_rivera_ne.mp3' },
        { id: 7, title: '7. अन्तर्राष्ट्रिय र थाई बुफे', url: BASE_URL + 'nepali/7.buffet_internacional_y_tailandes_ne.mp3' },
        { id: 8, title: '8. बिदाइ अभिवादन', url: BASE_URL + 'nepali/8.saludo_final_ne.mp3' }
    ],
    Norsk: [
        { id: 1, title: '1. VELKOMMEN | MIDDAG PÅ NATTCRUISE', url: BASE_URL + 'norwegian/1.bienvenidos_cena_crucero_nocturna_no.mp3' },
        { id: 2, title: '2. CHAO PHRAYA-ELVEN', url: BASE_URL + 'norwegian/2.rio_chao_phraya_no.mp3' },
        { id: 3, title: '3. WAT ARUN | DAGGRYETS TEMPEL', url: BASE_URL + 'norwegian/3.wat_arun_templo_del_amanecer_no.mp3' },
        { id: 4, title: '4. DET STORE KONGEPALASSET OG WAT PHRA KAEW | SMARAGDBUDDHAENS TEMPEL', url: BASE_URL + 'norwegian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_no.mp3' },
        { id: 5, title: '5. RAMA VIII-BROEN', url: BASE_URL + 'norwegian/5.puente_rama_viii_no.mp3' },
        { id: 6, title: '6. PANORAMAVISNINGER AV ELVEBREDDEN', url: BASE_URL + 'norwegian/6.vistas_panoramicas_rivera_no.mp3' },
        { id: 7, title: '7. INTERNASJONAL OG THAILANDSK BUFFET', url: BASE_URL + 'norwegian/7.buffet_internacional_y_tailandes_no.mp3' },
        { id: 8, title: '8. AVSKJEDSHILSEN', url: BASE_URL + 'norwegian/8.saludo_final_no.mp3' }
    ],
    فارسی: [
        { id: 1, title: '1. خوش آمدید | شام کروز شبانه', url: BASE_URL + 'persian/1.bienvenidos_cena_crucero_nocturna_fa.mp3' },
        { id: 2, title: '2. رودخانه چائو فرایا', url: BASE_URL + 'persian/2.rio_chao_phraya_fa.mp3' },
        { id: 3, title: '3. وات آرون | معبد سپیده‌دم', url: BASE_URL + 'persian/3.wat_arun_templo_del_amanecer_fa.mp3' },
        { id: 4, title: '4. کاخ بزرگ سلطنتی و وات فرا کائو | معبد بودای زمردین', url: BASE_URL + 'persian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_fa.mp3' },
        { id: 5, title: '5. پل راما هشتم', url: BASE_URL + 'persian/5.puente_rama_viii_fa.mp3' },
        { id: 6, title: '6. مناظر پانورامای ساحل رودخانه', url: BASE_URL + 'persian/6.vistas_panoramicas_rivera_fa.mp3' },
        { id: 7, title: '7. بوفه بین‌المللی و تایلندی', url: BASE_URL + 'persian/7.buffet_internacional_y_tailandes_fa.mp3' },
        { id: 8, title: '8. پیام خداحافظی', url: BASE_URL + 'persian/8.saludo_final_fa.mp3' }
    ],
    Español_España: [
        { id: 1, title: '1. BIENVENIDOS | CENA CRUCERO NOCTURNA', url: BASE_URL + 'spanish_spain/1.bienvenidos_cena_crucero_nocturna_es.mp3' },
        { id: 2, title: '2. RÍO CHAO PHRAYA', url: BASE_URL + 'spanish_spain/2.rio_chao_phraya_es.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLO DEL AMANECER', url: BASE_URL + 'spanish_spain/3.wat_arun_templo_del_amanecer_es.mp3' },
        { id: 4, title: '4. EL GRAN PALACIO REAL Y WAT PHRA KAEW | TEMPLO DEL BUDA ESMERALDA', url: BASE_URL + 'spanish_spain/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_es.mp3' },
        { id: 5, title: '5. PUENTE RAMA VIII', url: BASE_URL + 'spanish_spain/5.puente_rama_viii_es.mp3' },
        { id: 6, title: '6. VISTAS PANORÁMICAS DE LA RIBERA', url: BASE_URL + 'spanish_spain/6.vistas_panoramicas_rivera_es.mp3' },
        { id: 7, title: '7. BUFÉ INTERNACIONAL Y TAILANDÉS', url: BASE_URL + 'spanish_spain/7.buffet_internacional_y_tailandes_es.mp3' },
        { id: 8, title: '8. SALUDO FINAL', url: BASE_URL + 'spanish_spain/8.saludo_final_es.mp3' }
    ],
    Español_Latinoamérica: [
        { id: 1, title: '1. BIENVENIDOS | CENA CRUCERO NOCTURNA', url: BASE_URL + 'spanish_latam/1.bienvenidos_cena_crucero_nocturna_es.mp3' },
        { id: 2, title: '2. RÍO CHAO PHRAYA', url: BASE_URL + 'spanish_latam/2.rio_chao_phraya_es.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLO DEL AMANECER', url: BASE_URL + 'spanish_latam/3.wat_arun_templo_del_amanecer_es.mp3' },
        { id: 4, title: '4. EL GRAN PALACIO REAL Y WAT PHRA KAEW | TEMPLO DEL BUDA ESMERALDA', url: BASE_URL + 'spanish_latam/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_es.mp3' },
        { id: 5, title: '5. PUENTE RAMA VIII', url: BASE_URL + 'spanish_latam/5.puente_rama_viii_es.mp3' },
        { id: 6, title: '6. VISTAS PANORÁMICAS DE LA RIBERA', url: BASE_URL + 'spanish_latam/6.vistas_panoramicas_rivera_es.mp3' },
        { id: 7, title: '7. BUFÉ INTERNACIONAL Y TAILANDÉS', url: BASE_URL + 'spanish_latam/7.buffet_internacional_y_tailandes_es.mp3' },
        { id: 8, title: '8. SALUDO FINAL', url: BASE_URL + 'spanish_latam/8.saludo_final_es.mp3' }
    ],
    繁體中_台灣: [
        { id: 1, title: '1. 歡迎 | 夜間遊船晚宴', url: BASE_URL + 'mandarin_taiwan/1.bienvenidos_cena_crucero_nocturna_zh_tw.mp3' },
        { id: 2, title: '2. 昭披耶河', url: BASE_URL + 'mandarin_taiwan/2.rio_chao_phraya_zh_tw.mp3' },
        { id: 3, title: '3. 鄭王廟 | 黎明寺', url: BASE_URL + 'mandarin_taiwan/3.wat_arun_templo_del_amanecer_zh_tw.mp3' },
        { id: 4, title: '4. 大皇宮與玉佛寺 | 翡翠佛寺', url: BASE_URL + 'mandarin_taiwan/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_zh_tw.mp3' },
        { id: 5, title: '5. 拉瑪八世大橋', url: BASE_URL + 'mandarin_taiwan/5.puente_rama_viii_zh_tw.mp3' },
        { id: 6, title: '6. 河岸全景美景', url: BASE_URL + 'mandarin_taiwan/6.vistas_panoramicas_rivera_zh_tw.mp3' },
        { id: 7, title: '7. 國際與泰式自助餐', url: BASE_URL + 'mandarin_taiwan/7.buffet_internacional_y_tailandes_zh_tw.mp3' },
        { id: 8, title: '8. 告別致意', url: BASE_URL + 'mandarin_taiwan/8.saludo_final_zh_tw.mp3' }
    ],
    ខ្មែរ: [
        { id: 1, title: '1. សូមស្វាគមន៍ | អាហារពេលល្ងាចលើនាវាកម្សាន្តពេលយប់', url: BASE_URL + 'khmer/1.bienvenidos_cena_crucero_nocturna_km.mp3' },
        { id: 2, title: '2. ទន្លេចៅផ្រាយ៉ា', url: BASE_URL + 'khmer/2.rio_chao_phraya_km.mp3' },
        { id: 3, title: '3. វត្តអរុណ | វត្តព្រឹកព្រលឹម', url: BASE_URL + 'khmer/3.wat_arun_templo_del_amanecer_km.mp3' },
        { id: 4, title: '4. ព្រះបរមរាជវាំង និង វត្តព្រះកែវ | វត្តព្រះពុទ្ធត្បូងមរកត', url: BASE_URL + 'khmer/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_km.mp3' },
        { id: 5, title: '5. ស្ពានរាមាទី៨', url: BASE_URL + 'khmer/5.puente_rama_viii_km.mp3' },
        { id: 6, title: '6. ទិដ្ឋភាពទូលំទូលាយតាមមាត់ទន្លេ', url: BASE_URL + 'khmer/6.vistas_panoramicas_rivera_km.mp3' },
        { id: 7, title: '7. អាហារប៊ូហ្វេអន្តរជាតិ និង ថៃ', url: BASE_URL + 'khmer/7.buffet_internacional_y_tailandes_km.mp3' },
        { id: 8, title: '8. ពាក្យលាឈប់', url: BASE_URL + 'khmer/8.saludo_final_km.mp3' }
    ],
    Català: [
        { id: 1, title: '1. BENVINGUTS | SOPAR CREUER NOCTURN', url: BASE_URL + 'catalan/1.bienvenidos_cena_crucero_nocturna_ca.mp3' },
        { id: 2, title: '2. RIU CHAO PHRAYA', url: BASE_URL + 'catalan/2.rio_chao_phraya_ca.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLE DE L’ALBA', url: BASE_URL + 'catalan/3.wat_arun_templo_del_amanecer_ca.mp3' },
        { id: 4, title: '4. EL GRAN PALAU REIAL I WAT PHRA KAEW | TEMPLE DEL BUDA MARAGDA', url: BASE_URL + 'catalan/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ca.mp3' },
        { id: 5, title: '5. PONT RAMA VIII', url: BASE_URL + 'catalan/5.puente_rama_viii_ca.mp3' },
        { id: 6, title: '6. VISTES PANORÀMIQUES DE LA RIBA', url: BASE_URL + 'catalan/6.vistas_panoramicas_rivera_ca.mp3' },
        { id: 7, title: '7. BUFET INTERNACIONAL I TAILANDÈS', url: BASE_URL + 'catalan/7.buffet_internacional_y_tailandes_ca.mp3' },
        { id: 8, title: '8. SALUTACIÓ FINAL', url: BASE_URL + 'catalan/8.saludo_final_ca.mp3' }
    ],
    Polski: [
        { id: 1, title: '1. WITAMY | KOLACJA NA NOCNYM REJSIE', url: BASE_URL + 'polish/1.bienvenidos_cena_crucero_nocturna_pl.mp3' },
        { id: 2, title: '2. RZEKA CHAO PHRAYA', url: BASE_URL + 'polish/2.rio_chao_phraya_pl.mp3' },
        { id: 3, title: '3. WAT ARUN | ŚWIĄTYNIA ŚWITU', url: BASE_URL + 'polish/3.wat_arun_templo_del_amanecer_pl.mp3' },
        { id: 4, title: '4. WIELKI PAŁAC KRÓLEWSKI I WAT PHRA KAEW | ŚWIĄTYNIA SZMARAGDOWEGO BUDDY', url: BASE_URL + 'polish/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_pl.mp3' },
        { id: 5, title: '5. MOST RAMA VIII', url: BASE_URL + 'polish/5.puente_rama_viii_pl.mp3' },
        { id: 6, title: '6. PANORAMICZNE WIDOKI NAD RZEKĄ', url: BASE_URL + 'polish/6.vistas_panoramicas_rivera_pl.mp3' },
        { id: 7, title: '7. MIĘDZYNARODOWY I TAJSKI BUFET', url: BASE_URL + 'polish/7.buffet_internacional_y_tailandes_pl.mp3' },
        { id: 8, title: '8. POŻEGNALNE POZDROWIENIE', url: BASE_URL + 'polish/8.saludo_final_pl.mp3' }
    ],
    Português: [
        { id: 1, title: '1. BEM-VINDOS | JANTAR EM CRUZEIRO NOTURNO', url: BASE_URL + 'portuguese/1.bienvenidos_cena_crucero_nocturna_pt.mp3' },
        { id: 2, title: '2. RIO CHAO PHRAYA', url: BASE_URL + 'portuguese/2.rio_chao_phraya_pt.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLO DO AMANHECER', url: BASE_URL + 'portuguese/3.wat_arun_templo_del_amanecer_pt.mp3' },
        { id: 4, title: '4. O GRANDE PALÁCIO REAL E WAT PHRA KAEW | TEMPLO DO BUDA DE ESMERALDA', url: BASE_URL + 'portuguese/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_pt.mp3' },
        { id: 5, title: '5. PONTE RAMA VIII', url: BASE_URL + 'portuguese/5.puente_rama_viii_pt.mp3' },
        { id: 6, title: '6. VISTAS PANORÂMICAS DA MARGEM DO RIO', url: BASE_URL + 'portuguese/6.vistas_panoramicas_rivera_pt.mp3' },
        { id: 7, title: '7. BUFÊ INTERNACIONAL E TAILANDÊS', url: BASE_URL + 'portuguese/7.buffet_internacional_y_tailandes_pt.mp3' },
        { id: 8, title: '8. SAUDAÇÃO FINAL', url: BASE_URL + 'portuguese/8.saludo_final_pt.mp3' }
    ],
    Hrvatski: [
        { id: 1, title: '1. DOBRODOŠLI | VEČERA NA NOĆNOM KRSTARENJU', url: BASE_URL + 'croatian/1.bienvenidos_cena_crucero_nocturna_hr.mp3' },
        { id: 2, title: '2. RIJEKA CHAO PHRAYA', url: BASE_URL + 'croatian/2.rio_chao_phraya_hr.mp3' },
        { id: 3, title: '3. WAT ARUN | HRAM ZORE', url: BASE_URL + 'croatian/3.wat_arun_templo_del_amanecer_hr.mp3' },
        { id: 4, title: '4. VELIKA KRALJEVSKA PALAČA I WAT PHRA KAEW | HRAM SMARAGDNOG BUDE', url: BASE_URL + 'croatian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_hr.mp3' },
        { id: 5, title: '5. MOST RAMA VIII', url: BASE_URL + 'croatian/5.puente_rama_viii_hr.mp3' },
        { id: 6, title: '6. PANORAMSKI POGLEDI NA RIJEČNU OBALU', url: BASE_URL + 'croatian/6.vistas_panoramicas_rivera_hr.mp3' },
        { id: 7, title: '7. MEĐUNARODNI I TAJLANDSKI BUFET', url: BASE_URL + 'croatian/7.buffet_internacional_y_tailandes_hr.mp3' },
        { id: 8, title: '8. ZAVRŠNI POZDRAV', url: BASE_URL + 'croatian/8.saludo_final_hr.mp3' }
    ],
    Nederlands: [
        { id: 1, title: '1. WELKOM | DINER OP EEN AVONDCRUISE', url: BASE_URL + 'dutch/1.bienvenidos_cena_crucero_nocturna_nl.mp3' },
        { id: 2, title: '2. DE CHAO PHRAYA-RIVIER', url: BASE_URL + 'dutch/2.rio_chao_phraya_nl.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPEL VAN DE DAGERAAD', url: BASE_URL + 'dutch/3.wat_arun_templo_del_amanecer_nl.mp3' },
        { id: 4, title: '4. HET GROTE KONINKLIJKE PALEIS EN WAT PHRA KAEW | TEMPEL VAN DE SMARAGDEN BOEDDHA', url: BASE_URL + 'dutch/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_nl.mp3' },
        { id: 5, title: '5. RAMA VIII-BRUG', url: BASE_URL + 'dutch/5.puente_rama_viii_nl.mp3' },
        { id: 6, title: '6. PANORAMISCHE UITZICHTEN OP DE RIVIEROEVER', url: BASE_URL + 'dutch/6.vistas_panoramicas_rivera_nl.mp3' },
        { id: 7, title: '7. INTERNATIONAAL EN THAIS BUFFET', url: BASE_URL + 'dutch/7.buffet_internacional_y_tailandes_nl.mp3' },
        { id: 8, title: '8. AFSCHEIDSGROET', url: BASE_URL + 'dutch/8.saludo_final_nl.mp3' }
    ],
    Русский: [
        { id: 1, title: '1. ДОБРО ПОЖАЛОВАТЬ | УЖИН НА ВЕЧЕРНЕМ КРУИЗЕ', url: BASE_URL + 'russian/1.bienvenidos_cena_crucero_nocturna_ru.mp3' },
        { id: 2, title: '2. РЕКА ЧАО ПРАЙЯ', url: BASE_URL + 'russian/2.rio_chao_phraya_ru.mp3' },
        { id: 3, title: '3. ВАТ АРУН | ХРАМ РАССВЕТА', url: BASE_URL + 'russian/3.wat_arun_templo_del_amanecer_ru.mp3' },
        { id: 4, title: '4. БОЛЬШОЙ КОРОЛЕВСКИЙ ДВОРЕЦ И ВАТ ПХРА КЕО | ХРАМ ИЗУМРУДНОГО БУДДЫ', url: BASE_URL + 'russian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ru.mp3' },
        { id: 5, title: '5. МОСТ РАМА VIII', url: BASE_URL + 'russian/5.puente_rama_viii_ru.mp3' },
        { id: 6, title: '6. ПАНОРАМНЫЕ ВИДЫ НА РЕЧНУЮ НАБЕРЕЖНУЮ', url: BASE_URL + 'russian/6.vistas_panoramicas_rivera_ru.mp3' },
        { id: 7, title: '7. МЕЖДУНАРОДНЫЙ И ТАЙСКИЙ БУФЕТ', url: BASE_URL + 'russian/7.buffet_internacional_y_tailandes_ru.mp3' },
        { id: 8, title: '8. ПРОЩАЛЬНОЕ ПРИВЕТСТВИЕ', url: BASE_URL + 'russian/8.saludo_final_ru.mp3' }
    ],
    Српски: [
        { id: 1, title: '1. ДОБРО ДОШЛИ | ВЕЧЕРА НА НОЋНОМ КРУЗЕРУ', url: BASE_URL + 'serbian/1.bienvenidos_cena_crucero_nocturna_sr.mp3' },
        { id: 2, title: '2. РЕКА ЧАО ФРАЈА', url: BASE_URL + 'serbian/2.rio_chao_phraya_sr.mp3' },
        { id: 3, title: '3. ВАТ АРУН | ХРАМ ЗОРЕ', url: BASE_URL + 'serbian/3.wat_arun_templo_del_amanecer_sr.mp3' },
        { id: 4, title: '4. ВЕЛИКА КРАЉЕВСКА ПАЛАТА И ВАТ ФРА КЕО | ХРАМ СМАРАГДНОГ БУДЕ', url: BASE_URL + 'serbian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_sr.mp3' },
        { id: 5, title: '5. МОСТ РАМА VIII', url: BASE_URL + 'serbian/5.puente_rama_viii_sr.mp3' },
        { id: 6, title: '6. ПАНОРАМСКИ ПОГЛЕДИ НА РЕЧНУ ОБАЛУ', url: BASE_URL + 'serbian/6.vistas_panoramicas_rivera_sr.mp3' },
        { id: 7, title: '7. МЕЂУНАРОДНИ И ТАЈЛАНДСКИ БУФЕТ', url: BASE_URL + 'serbian/7.buffet_internacional_y_tailandes_sr.mp3' },
        { id: 8, title: '8. ЗАВРШНИ ПОЗДРАВ', url: BASE_URL + 'serbian/8.saludo_final_sr.mp3' }
    ],
    Filipino: [
        { id: 1, title: '1. MALIGAYANG PAGDATING | HAPUNAN SA GABING CRUISE', url: BASE_URL + 'filipino/1.bienvenidos_cena_crucero_nocturna_fil.mp3' },
        { id: 2, title: '2. ILOG CHAO PHRAYA', url: BASE_URL + 'filipino/2.rio_chao_phraya_fil.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLO NG BUHANGIN NG ARAW', url: BASE_URL + 'filipino/3.wat_arun_templo_del_amanecer_fil.mp3' },
        { id: 4, title: '4. DAKILANG PALASYONG HARI AT WAT PHRA KAEW | TEMPLO NG ESMERALDANG BUDA', url: BASE_URL + 'filipino/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_fil.mp3' },
        { id: 5, title: '5. TULAY RAMA VIII', url: BASE_URL + 'filipino/5.puente_rama_viii_fil.mp3' },
        { id: 6, title: '6. MALALAWAK NA TANAWIN SA TABING-ILOG', url: BASE_URL + 'filipino/6.vistas_panoramicas_rivera_fil.mp3' },
        { id: 7, title: '7. INTERNASYONAL AT THAI NA BUFFET', url: BASE_URL + 'filipino/7.buffet_internacional_y_tailandes_fil.mp3' },
        { id: 8, title: '8. HULING PAGBATI', url: BASE_URL + 'filipino/8.saludo_final_fil.mp3' }
    ],
    Slovenščina: [
        { id: 1, title: '1. DOBRODOŠLI | VEČERJA NA NOČNI KRIŽARJENJU', url: BASE_URL + 'slovenian/1.bienvenidos_cena_crucero_nocturna_sl.mp3' },
        { id: 2, title: '2. REKA CHAO PHRAYA', url: BASE_URL + 'slovenian/2.rio_chao_phraya_sl.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPEL ZORE', url: BASE_URL + 'slovenian/3.wat_arun_templo_del_amanecer_sl.mp3' },
        { id: 4, title: '4. VELIKA KRALJEVA PALAČA IN WAT PHRA KAEW | TEMPEL SMARAGDNEGA BUDE', url: BASE_URL + 'slovenian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_sl.mp3' },
        { id: 5, title: '5. MOST RAMA VIII', url: BASE_URL + 'slovenian/5.puente_rama_viii_sl.mp3' },
        { id: 6, title: '6. PANORAMSKI RAZGLEDI NA REČNO NABREŽJE', url: BASE_URL + 'slovenian/6.vistas_panoramicas_rivera_sl.mp3' },
        { id: 7, title: '7. MEDNARODNI IN TAJSKI BIFE', url: BASE_URL + 'slovenian/7.buffet_internacional_y_tailandes_sl.mp3' },
        { id: 8, title: '8. ZAKLJUČNI POZDRAV', url: BASE_URL + 'slovenian/8.saludo_final_sl.mp3' }
    ],
    Kiswahili: [
        { id: 1, title: '1. KARIBU | CHAKULA CHA JIONI KWENYE CRUISE YA USIKU', url: BASE_URL + 'swahili/1.bienvenidos_cena_crucero_nocturna_sw.mp3' },
        { id: 2, title: '2. MTO CHAO PHRAYA', url: BASE_URL + 'swahili/2.rio_chao_phraya_sw.mp3' },
        { id: 3, title: '3. WAT ARUN | HEKALU YA MAPAMBANO YA JUA', url: BASE_URL + 'swahili/3.wat_arun_templo_del_amanecer_sw.mp3' },
        { id: 4, title: '4. IKULU KUU YA KIFALME NA WAT PHRA KAEW | HEKALU YA BUDA WA ZAMARADI', url: BASE_URL + 'swahili/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_sw.mp3' },
        { id: 5, title: '5. DARAJA LA RAMA VIII', url: BASE_URL + 'swahili/5.puente_rama_viii_sw.mp3' },
        { id: 6, title: '6. MANDHARI YA PANORAMA YA KINGO ZA MTO', url: BASE_URL + 'swahili/6.vistas_panoramicas_rivera_sw.mp3' },
        { id: 7, title: '7. BUFFET YA KIMATAIFA NA KITHAI', url: BASE_URL + 'swahili/7.buffet_internacional_y_tailandes_sw.mp3' },
        { id: 8, title: '8. SALAMU YA MWISHO', url: BASE_URL + 'swahili/8.saludo_final_sw.mp3' }
    ],
    Svenska: [
        { id: 1, title: '1. VÄLKOMMEN | MIDDAG PÅ EN KVÄLLSKRYSSNING', url: BASE_URL + 'swedish/1.bienvenidos_cena_crucero_nocturna_sv.mp3' },
        { id: 2, title: '2. CHAO PHRAYA-FLODEN', url: BASE_URL + 'swedish/2.rio_chao_phraya_sv.mp3' },
        { id: 3, title: '3. WAT ARUN | GRYNINGENS TEMPEL', url: BASE_URL + 'swedish/3.wat_arun_templo_del_amanecer_sv.mp3' },
        { id: 4, title: '4. DET STORA KUNGLIGA PALATSET OCH WAT PHRA KAEW | TEMPLET FÖR SMARAGDBUDDHAN', url: BASE_URL + 'swedish/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_sv.mp3' },
        { id: 5, title: '5. RAMA VIII-BRON', url: BASE_URL + 'swedish/5.puente_rama_viii_sv.mp3' },
        { id: 6, title: '6. PANORAMAVYER ÖVER FLODSTRANDEN', url: BASE_URL + 'swedish/6.vistas_panoramicas_rivera_sv.mp3' },
        { id: 7, title: '7. INTERNATIONELL OCH THAILÄNDSK BUFFÉ', url: BASE_URL + 'swedish/7.buffet_internacional_y_tailandes_sv.mp3' },
        { id: 8, title: '8. AVSLUTANDE HÄLSNING', url: BASE_URL + 'swedish/8.saludo_final_sv.mp3' }
    ],
    Galego: [
        { id: 1, title: '1. BENVIDOS | CEA EN CRUCEIRO NOCTURNO', url: BASE_URL + 'galician/1.bienvenidos_cena_crucero_nocturna_gl.mp3' },
        { id: 2, title: '2. RÍO CHAO PHRAYA', url: BASE_URL + 'galician/2.rio_chao_phraya_gl.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPLO DO AMENCER', url: BASE_URL + 'galician/3.wat_arun_templo_del_amanecer_gl.mp3' },
        { id: 4, title: '4. GRAN PALACIO REAL E WAT PHRA KAEW | TEMPLO DO BUDA ESMERALDA', url: BASE_URL + 'galician/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_gl.mp3' },
        { id: 5, title: '5. PONTE RAMA VIII', url: BASE_URL + 'galician/5.puente_rama_viii_gl.mp3' },
        { id: 6, title: '6. VISTAS PANORÁMICAS DA RIBEIRA', url: BASE_URL + 'galician/6.vistas_panoramicas_rivera_gl.mp3' },
        { id: 7, title: '7. BUFFET INTERNACIONAL E TAILANDÉS', url: BASE_URL + 'galician/7.buffet_internacional_y_tailandes_gl.mp3' },
        { id: 8, title: '8. SAÚDO FINAL', url: BASE_URL + 'galician/8.saludo_final_gl.mp3' }
    ],
    Ελληνικά: [
        { id: 1, title: '1. ΚΑΛΩΣ ΗΡΘΑΤΕ | ΔΕΙΠΝΟ ΣΕ ΝΥΧΤΕΡΙΝΗ ΚΡΟΥΑΖΙΕΡΑ', url: BASE_URL + 'greek/1.bienvenidos_cena_crucero_nocturna_el.mp3' },
        { id: 2, title: '2. ΠΟΤΑΜΟΣ ΤΣΑΟ ΠΡΑΓΙΑ', url: BASE_URL + 'greek/2.rio_chao_phraya_el.mp3' },
        { id: 3, title: '3. WAT ARUN | ΝΑΟΣ ΤΗΣ ΑΥΓΗΣ', url: BASE_URL + 'greek/3.wat_arun_templo_del_amanecer_el.mp3' },
        { id: 4, title: '4. ΜΕΓΑΛΟ ΒΑΣΙΛΙΚΟ ΠΑΛΑΤΙ ΚΑΙ WAT PHRA KAEW | ΝΑΟΣ ΤΟΥ ΣΜΑΡΑΓΔΕΝΙΟΥ ΒΟΥΔΑ', url: BASE_URL + 'greek/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_el.mp3' },
        { id: 5, title: '5. ΓΕΦΥΡΑ ΡΑΜΑ VIII', url: BASE_URL + 'greek/5.puente_rama_viii_el.mp3' },
        { id: 6, title: '6. ΠΑΝΟΡΑΜΙΚΗ ΘΕΑ ΤΗΣ ΟΧΘΗΣ ΤΟΥ ΠΟΤΑΜΟΥ', url: BASE_URL + 'greek/6.vistas_panoramicas_rivera_el.mp3' },
        { id: 7, title: '7. ΔΙΕΘΝΕΣ ΚΑΙ ΤΑΪΛΑΝΔΕΖΙΚΟ ΜΠΟΥΦΕ', url: BASE_URL + 'greek/7.buffet_internacional_y_tailandes_el.mp3' },
        { id: 8, title: '8. ΤΕΛΙΚΟΣ ΧΑΙΡΕΤΙΣΜΟΣ', url: BASE_URL + 'greek/8.saludo_final_el.mp3' }
    ],
    ภาษาไทย: [
        { id: 1, title: '1. ยินดีต้อนรับ | ดินเนอร์ล่องเรือยามค่ำคืน', url: BASE_URL + 'thai/1.bienvenidos_cena_crucero_nocturna_th.mp3' },
        { id: 2, title: '2. แม่น้ำเจ้าพระยา', url: BASE_URL + 'thai/2.rio_chao_phraya_th.mp3' },
        { id: 3, title: '3. วัดอรุณ | วัดแห่งรุ่งอรุณ', url: BASE_URL + 'thai/3.wat_arun_templo_del_amanecer_th.mp3' },
        { id: 4, title: '4. พระบรมมหาราชวัง และ วัดพระแก้ว | วัดพระแก้วมรกต', url: BASE_URL + 'thai/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_th.mp3' },
        { id: 5, title: '5. สะพานพระรามแปด', url: BASE_URL + 'thai/5.puente_rama_viii_th.mp3' },
        { id: 6, title: '6. ทิวทัศน์มุมกว้างของริมแม่น้ำ', url: BASE_URL + 'thai/6.vistas_panoramicas_rivera_th.mp3' },
        { id: 7, title: '7. บุฟเฟต์นานาชาติและอาหารไทย', url: BASE_URL + 'thai/7.buffet_internacional_y_tailandes_th.mp3' },
        { id: 8, title: '8. คำอำลาสุดท้าย', url: BASE_URL + 'thai/8.saludo_final_th.mp3' }
    ],
    Türkçe: [
        { id: 1, title: '1. HOŞ GELDİNİZ | GECE TEKNE TURUNDA AKŞAM YEMEĞİ', url: BASE_URL + 'turkish/1.bienvenidos_cena_crucero_nocturna_tr.mp3' },
        { id: 2, title: '2. CHAO PHRAYA NEHRİ', url: BASE_URL + 'turkish/2.rio_chao_phraya_tr.mp3' },
        { id: 3, title: '3. WAT ARUN | ŞAFAK TAPINAĞI', url: BASE_URL + 'turkish/3.wat_arun_templo_del_amanecer_tr.mp3' },
        { id: 4, title: '4. BÜYÜK KRALİYET SARAYI VE WAT PHRA KAEW | ZÜMRÜT BUDA TAPINAĞI', url: BASE_URL + 'turkish/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_tr.mp3' },
        { id: 5, title: '5. RAMA VIII KÖPRÜSÜ', url: BASE_URL + 'turkish/5.puente_rama_viii_tr.mp3' },
        { id: 6, title: '6. NEHİR KIYISININ PANORAMİK MANZARALARI', url: BASE_URL + 'turkish/6.vistas_panoramicas_rivera_tr.mp3' },
        { id: 7, title: '7. ULUSLARARASI VE TAY MUTFAĞI AÇIK BÜFE', url: BASE_URL + 'turkish/7.buffet_internacional_y_tailandes_tr.mp3' },
        { id: 8, title: '8. SON SELAMLAMA', url: BASE_URL + 'turkish/8.saludo_final_tr.mp3' }
    ],
    Euskara: [
        { id: 1, title: '1. ONGI ETORRI | GAUEKO GURUTZALDIKO AFARIA', url: BASE_URL + 'basque/1.bienvenidos_cena_crucero_nocturna_eu.mp3' },
        { id: 2, title: '2. CHAO PHRAYA IBAIA', url: BASE_URL + 'basque/2.rio_chao_phraya_eu.mp3' },
        { id: 3, title: '3. WAT ARUN | EGUNSENTIKO TENPLUA', url: BASE_URL + 'basque/3.wat_arun_templo_del_amanecer_eu.mp3' },
        { id: 4, title: '4. ERREGE JAUREGI HANDIA ETA WAT PHRA KAEW | BUDA ESMARALDAREN TENPLUA', url: BASE_URL + 'basque/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_eu.mp3' },
        { id: 5, title: '5. RAMA VIII ZUBIA', url: BASE_URL + 'basque/5.puente_rama_viii_eu.mp3' },
        { id: 6, title: '6. IBAIERTZEKO IKUSPEGI PANORAMIKOAK', url: BASE_URL + 'basque/6.vistas_panoramicas_rivera_eu.mp3' },
        { id: 7, title: '7. NAZIOARTEKO ETA THAILANDIAR BUFFETA', url: BASE_URL + 'basque/7.buffet_internacional_y_tailandes_eu.mp3' },
        { id: 8, title: '8. AZKEN AGURRA', url: BASE_URL + 'basque/8.saludo_final_eu.mp3' }
    ],
    हिन्दी: [
        { id: 1, title: '1. आपका स्वागत है | रात्रि क्रूज़ में रात्रिभोज', url: BASE_URL + 'hindi/1.bienvenidos_cena_crucero_nocturna_hi.mp3' },
        { id: 2, title: '2. चाओ फ्राया नदी', url: BASE_URL + 'hindi/2.rio_chao_phraya_hi.mp3' },
        { id: 3, title: '3. वॉट अरुण | उषा का मंदिर', url: BASE_URL + 'hindi/3.wat_arun_templo_del_amanecer_hi.mp3' },
        { id: 4, title: '4. भव्य राजमहल और वॉट फ्रา काओ | एमराल्ड बुद्ध का मंदिर', url: BASE_URL + 'hindi/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_hi.mp3' },
        { id: 5, title: '5. रामा VIII पुल', url: BASE_URL + 'hindi/5.puente_rama_viii_hi.mp3' },
        { id: 6, title: '6. नदी किनारे के मनोरम दृश्य', url: BASE_URL + 'hindi/6.vistas_panoramicas_rivera_hi.mp3' },
        { id: 7, title: '7. अंतरराष्ट्रीय और थाई बुफे', url: BASE_URL + 'hindi/7.buffet_internacional_y_tailandes_hi.mp3' },
        { id: 8, title: '8. अंतिम अभिवादन', url: BASE_URL + 'hindi/8.saludo_final_hi.mp3' }
    ],
    Magyar: [
        { id: 1, title: '1. ÜDVÖZÖLJÜK | VACSORA ÉJSZAKAI HAJÓKIRÁNDULÁSON', url: BASE_URL + 'hungarian/1.bienvenidos_cena_crucero_nocturna_hu.mp3' },
        { id: 2, title: '2. CHAO PHRAYA FOLYÓ', url: BASE_URL + 'hungarian/2.rio_chao_phraya_hu.mp3' },
        { id: 3, title: '3. WAT ARUN | A HAJNAL TEMPLOMA', url: BASE_URL + 'hungarian/3.wat_arun_templo_del_amanecer_hu.mp3' },
        { id: 4, title: '4. A NAGY KIRÁLYI PALOTA ÉS A WAT PHRA KAEW | A SMARAGD BUDDHA TEMPLOMA', url: BASE_URL + 'hungarian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_hu.mp3' },
        { id: 5, title: '5. RAMA VIII HÍD', url: BASE_URL + 'hungarian/5.puente_rama_viii_hu.mp3' },
        { id: 6, title: '6. PANORÁMÁS KILÁTÁS A FOLYÓPARTON', url: BASE_URL + 'hungarian/6.vistas_panoramicas_rivera_hu.mp3' },
        { id: 7, title: '7. NEMZETKÖZI ÉS THAI BÜFÉ', url: BASE_URL + 'hungarian/7.buffet_internacional_y_tailandes_hu.mp3' },
        { id: 8, title: '8. ZÁRÓ ÜDVÖZLET', url: BASE_URL + 'hungarian/8.saludo_final_hu.mp3' }
    ],
    Bahasa_Indonesia: [
        { id: 1, title: '1. SELAMAT DATANG | MAKAN MALAM DI KAPAL PESIAR MALAM', url: BASE_URL + 'indonesian/1.bienvenidos_cena_crucero_nocturna_id.mp3' },
        { id: 2, title: '2. SUNGAI CHAO PHRAYA', url: BASE_URL + 'indonesian/2.rio_chao_phraya_id.mp3' },
        { id: 3, title: '3. WAT ARUN | KUIL FAJAR', url: BASE_URL + 'indonesian/3.wat_arun_templo_del_amanecer_id.mp3' },
        { id: 4, title: '4. ISTANA KERAJAAN BESAR DAN WAT PHRA KAEW | KUIL BUDDHA EMERALD', url: BASE_URL + 'indonesian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_id.mp3' },
        { id: 5, title: '5. JEMBATAN RAMA VIII', url: BASE_URL + 'indonesian/5.puente_rama_viii_id.mp3' },
        { id: 6, title: '6. PEMANDANGAN PANORAMA TEPI SUNGAI', url: BASE_URL + 'indonesian/6.vistas_panoramicas_rivera_id.mp3' },
        { id: 7, title: '7. BUFET INTERNASIONAL DAN THAILAND', url: BASE_URL + 'indonesian/7.buffet_internacional_y_tailandes_id.mp3' },
        { id: 8, title: '8. SALAM PENUTUP', url: BASE_URL + 'indonesian/8.saludo_final_id.mp3' }
    ],
    Italiano: [
        { id: 1, title: '1. BENVENUTI | CENA IN CROCIERA NOTTURNA', url: BASE_URL + 'italian/1.bienvenidos_cena_crucero_nocturna_it.mp3' },
        { id: 2, title: '2. FIUME CHAO PHRAYA', url: BASE_URL + 'italian/2.rio_chao_phraya_it.mp3' },
        { id: 3, title: '3. WAT ARUN | TEMPIO DELL’ALBA', url: BASE_URL + 'italian/3.wat_arun_templo_del_amanecer_it.mp3' },
        { id: 4, title: '4. GRANDE PALAZZO REALE E WAT PHRA KAEW | TEMPIO DEL BUDDHA DI SMERALDO', url: BASE_URL + 'italian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_it.mp3' },
        { id: 5, title: '5. PONTE RAMA VIII', url: BASE_URL + 'italian/5.puente_rama_viii_it.mp3' },
        { id: 6, title: '6. VISTE PANORAMICHE DELLA RIVA DEL FIUME', url: BASE_URL + 'italian/6.vistas_panoramicas_rivera_it.mp3' },
        { id: 7, title: '7. BUFFET INTERNAZIONALE E THAILANDESE', url: BASE_URL + 'italian/7.buffet_internacional_y_tailandes_it.mp3' },
        { id: 8, title: '8. SALUTO FINALE', url: BASE_URL + 'italian/8.saludo_final_it.mp3' }
    ],
    Українська: [
        { id: 1, title: '1. ЛАСКАВО ПРОСИМО | ВЕЧЕРЯ НА НІЧНОМУ КРУЇЗІ', url: BASE_URL + 'ukrainian/1.bienvenidos_cena_crucero_nocturna_uk.mp3' },
        { id: 2, title: '2. РІЧКА ЧАО ПРАЯ', url: BASE_URL + 'ukrainian/2.rio_chao_phraya_uk.mp3' },
        { id: 3, title: '3. WAT ARUN | ХРАМ СВІТАНКУ', url: BASE_URL + 'ukrainian/3.wat_arun_templo_del_amanecer_uk.mp3' },
        { id: 4, title: '4. ВЕЛИКИЙ КОРОЛІВСЬКИЙ ПАЛАЦ І WAT PHRA KAEW | ХРАМ СМАРАГДОВОГО БУДДИ', url: BASE_URL + 'ukrainian/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_uk.mp3' },
        { id: 5, title: '5. МІСТ РАМА VIII', url: BASE_URL + 'ukrainian/5.puente_rama_viii_uk.mp3' },
        { id: 6, title: '6. ПАНОРАМНІ ВИДИ НА НАБЕРЕЖНУ РІЧКИ', url: BASE_URL + 'ukrainian/6.vistas_panoramicas_rivera_uk.mp3' },
        { id: 7, title: '7. МІЖНАРОДНИЙ ТА ТАЙСЬКИЙ БУФЕТ', url: BASE_URL + 'ukrainian/7.buffet_internacional_y_tailandes_uk.mp3' },
        { id: 8, title: '8. ЗАКЛЮЧНЕ ВІТАННЯ', url: BASE_URL + 'ukrainian/8.saludo_final_uk.mp3' }
    ],
    اردو: [
        { id: 1, title: '1. خوش آمدید | رات کے کروز میں عشائیہ', url: BASE_URL + 'urdu/1.bienvenidos_cena_crucero_nocturna_ur.mp3' },
        { id: 2, title: '2. چاؤ فرایا دریا', url: BASE_URL + 'urdu/2.rio_chao_phraya_ur.mp3' },
        { id: 3, title: '3. واٹ ارون | سحر کا مندر', url: BASE_URL + 'urdu/3.wat_arun_templo_del_amanecer_ur.mp3' },
        { id: 4, title: '4. عظیم شاہی محل اور واٹ فرا کیو | زمرد بدھا کا مندر', url: BASE_URL + 'urdu/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_ur.mp3' },
        { id: 5, title: '5. راما ہشتم پل', url: BASE_URL + 'urdu/5.puente_rama_viii_ur.mp3' },
        { id: 6, title: '6. دریا کے کنارے کے دلکش مناظر', url: BASE_URL + 'urdu/6.vistas_panoramicas_rivera_ur.mp3' },
        { id: 7, title: '7. بین الاقوامی اور تھائی بوفے', url: BASE_URL + 'urdu/7.buffet_internacional_y_tailandes_ur.mp3' },
        { id: 8, title: '8. الوداعی پیغام', url: BASE_URL + 'urdu/8.saludo_final_ur.mp3' }
    ],
    Tiếng_Việt: [
        { id: 1, title: '1. CHÀO MỪNG | BỮA TỐI TRÊN DU THUYỀN BAN ĐÊM', url: BASE_URL + 'vietnamese/1.bienvenidos_cena_crucero_nocturna_vi.mp3' },
        { id: 2, title: '2. SÔNG CHAO PHRAYA', url: BASE_URL + 'vietnamese/2.rio_chao_phraya_vi.mp3' },
        { id: 3, title: '3. WAT ARUN | ĐỀN BÌNH MINH', url: BASE_URL + 'vietnamese/3.wat_arun_templo_del_amanecer_vi.mp3' },
        { id: 4, title: '4. HOÀNG CUNG VÀ WAT PHRA KAEW | ĐỀN PHẬT NGỌC LỤC BẢO', url: BASE_URL + 'vietnamese/4.gran_palacio_real_y_wat_phra_kaew_buda_esmeralda_vi.mp3' },
        { id: 5, title: '5. CẦU RAMA VIII', url: BASE_URL + 'vietnamese/5.puente_rama_viii_vi.mp3' },
        { id: 6, title: '6. TOÀN CẢNH BỜ SÔNG', url: BASE_URL + 'vietnamese/6.vistas_panoramicas_rivera_vi.mp3' },
        { id: 7, title: '7. BUFFET QUỐC TẾ VÀ THÁI LAN', url: BASE_URL + 'vietnamese/7.buffet_internacional_y_tailandes_vi.mp3' },
        { id: 8, title: '8. LỜI CHÀO KẾT THÚC', url: BASE_URL + 'vietnamese/8.saludo_final_vi.mp3' }
    ],

};
