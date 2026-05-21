const audioDatabase = {
    english: [
        { id: 1, title: '1. INTRODUCTION WELCOME', url: BASE_URL + 'english/1.introduccion_bienvenida_en.mp3' },
        { id: 2, title: '2. JOURNEY TO AYUTTHAYA', url: BASE_URL + 'english/2.camino_hacia_ayutthaya_en.mp3' },
        { id: 3, title: '3. ARRIVAL IN AYUTTHAYA | FIRST IMPRESSIONS', url: BASE_URL + 'english/3.llegada_a_ayutthaya_primeras_impresiones_en.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'english/4.wat_chai_wattanaram_en.mp3' },
        { id: 5, title: '5. TRANSFER TO WAT MAHATHAT', url: BASE_URL + 'english/5.traslado_hacia_wat_mahathat_en.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'english/6.wat_mahathat_en.mp3' },
        { id: 7, title: '7. AYOTHAYA FLOATING MARKET', url: BASE_URL + 'english/7.ayothaya_floating_market_en.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT EXPERIENCE', url: BASE_URL + 'english/8.long_tail_boat_experience_en.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'english/9.wat_yai_chai_mongkhon_en.mp3' },
        { id: 10, title: '10. RETURN TO BANGKOK', url: BASE_URL + 'english/10.regreso_a_bangkok_en.mp3' },
        { id: 11, title: '11. FINAL GREETING', url: BASE_URL + 'english/11.saludo_final_en.mp3' }
    ],
    bengali: [
        { id: 1, title: '1. পরিচিতি ও স্বাগতম', url: BASE_URL + 'bengali/1.introduccion_bienvenida_bn.mp3' },
        { id: 2, title: '2. আয়ুথায়ার পথে যাত্রা', url: BASE_URL + 'bengali/2.camino_hacia_ayutthaya_bn.mp3' },
        { id: 3, title: '3. আয়ুথায়ায় আগমন | প্রথম অনুভূতি', url: BASE_URL + 'bengali/3.llegada_a_ayutthaya_primeras_impresiones_bn.mp3' },
        { id: 4, title: '4. ওয়াট চাই ওয়াত্তারানাম', url: BASE_URL + 'bengali/4.wat_chai_wattanaram_bn.mp3' },
        { id: 5, title: '5. ওয়াট মহাথাতের পথে যাত্রা', url: BASE_URL + 'bengali/5.traslado_hacia_wat_mahathat_bn.mp3' },
        { id: 6, title: '6. ওয়াট মহাথাত', url: BASE_URL + 'bengali/6.wat_mahathat_bn.mp3' },
        { id: 7, title: '7. আয়োথায়া ফ্লোটিং মার্কেট', url: BASE_URL + 'bengali/7.ayothaya_floating_market_bn.mp3' },
        { id: 8, title: '8. লং টেইল বোট অভিজ্ঞতা', url: BASE_URL + 'bengali/8.long_tail_boat_experience_bn.mp3' },
        { id: 9, title: '9. ওয়াট ইয়াই চাই মংখন', url: BASE_URL + 'bengali/9.wat_yai_chai_mongkhon_bn.mp3' },
        { id: 10, title: '10. ব্যাংককে প্রত্যাবর্তন', url: BASE_URL + 'bengali/10.regreso_a_bangkok_bn.mp3' },
        { id: 11, title: '11. শেষ শুভেচ্ছা', url: BASE_URL + 'bengali/11.saludo_final_bn.mp3' }
    ],
    arabic: [
        { id: 1, title: '1. المقدمة والترحيب', url: BASE_URL + 'arabic/1.introduccion_bienvenida_ar.mp3' },
        { id: 2, title: '2. الطريق إلى أيوثايا', url: BASE_URL + 'arabic/2.camino_hacia_ayutthaya_ar.mp3' },
        { id: 3, title: '3. الوصول إلى أيوثايا | الانطباعات الأولى', url: BASE_URL + 'arabic/3.llegada_a_ayutthaya_primeras_impresiones_ar.mp3' },
        { id: 4, title: '4. وات تشاي واتانارام', url: BASE_URL + 'arabic/4.wat_chai_wattanaram_ar.mp3' },
        { id: 5, title: '5. الانتقال إلى وات ماهاثات', url: BASE_URL + 'arabic/5.traslado_hacia_wat_mahathat_ar.mp3' },
        { id: 6, title: '6. وات ماهاثات', url: BASE_URL + 'arabic/6.wat_mahathat_ar.mp3' },
        { id: 7, title: '7. سوق أيوثايا العائم', url: BASE_URL + 'arabic/7.ayothaya_floating_market_ar.mp3' },
        { id: 8, title: '8. تجربة القارب طويل الذيل', url: BASE_URL + 'arabic/8.long_tail_boat_experience_ar.mp3' },
        { id: 9, title: '9. وات ياي تشاي مونغخون', url: BASE_URL + 'arabic/9.wat_yai_chai_mongkhon_ar.mp3' },
        { id: 10, title: '10. العودة إلى بانكوك', url: BASE_URL + 'arabic/10.regreso_a_bangkok_ar.mp3' },
        { id: 11, title: '11. التحية الختامية', url: BASE_URL + 'arabic/11.saludo_final_ar.mp3' }
    ],
    basque: [
        { id: 1, title: '1. SARRERA ETA ONGITORRIA', url: BASE_URL + 'basque/1.introduccion_bienvenida_eu.mp3' },
        { id: 2, title: '2. AYUTTHAYARAKO BIDEA', url: BASE_URL + 'basque/2.camino_hacia_ayutthaya_eu.mp3' },
        { id: 3, title: '3. AYUTTHAYARA IRITSIERA | LEHEN INPRESIOAK', url: BASE_URL + 'basque/3.llegada_a_ayutthaya_primeras_impresiones_eu.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'basque/4.wat_chai_wattanaram_eu.mp3' },
        { id: 5, title: '5. WAT MAHATHATERAKO LEKUALDAKETA', url: BASE_URL + 'basque/5.traslado_hacia_wat_mahathat_eu.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'basque/6.wat_mahathat_eu.mp3' },
        { id: 7, title: '7. AYOTHAYA MERKATU FLOTATZAILEA', url: BASE_URL + 'basque/7.ayothaya_floating_market_eu.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT ESPERIENTZIA', url: BASE_URL + 'basque/8.long_tail_boat_experience_eu.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'basque/9.wat_yai_chai_mongkhon_eu.mp3' },
        { id: 10, title: '10. BANGKOKERA ITZULERA', url: BASE_URL + 'basque/10.regreso_a_bangkok_eu.mp3' },
        { id: 11, title: '11. AZKEN AGURRA', url: BASE_URL + 'basque/11.saludo_final_eu.mp3' }
    ],
    cambodian: [
        { id: 1, title: '1. ការណែនាំ និងការស្វាគមន៍', url: BASE_URL + 'cambodian/1.introduccion_bienvenida_km.mp3' },
        { id: 2, title: '2. ដំណើរទៅកាន់អយុធ្យា', url: BASE_URL + 'cambodian/2.camino_hacia_ayutthaya_km.mp3' },
        { id: 3, title: '3. មកដល់អយុធ្យា | ចំណាប់អារម្មណ៍ដំបូង', url: BASE_URL + 'cambodian/3.llegada_a_ayutthaya_primeras_impresiones_km.mp3' },
        { id: 4, title: '4. វត្តឆៃវឌ្ឍនារាម', url: BASE_URL + 'cambodian/4.wat_chai_wattanaram_km.mp3' },
        { id: 5, title: '5. ផ្ទេរទៅកាន់វត្តមហាធាតុ', url: BASE_URL + 'cambodian/5.traslado_hacia_wat_mahathat_km.mp3' },
        { id: 6, title: '6. វត្តមហាធាតុ', url: BASE_URL + 'cambodian/6.wat_mahathat_km.mp3' },
        { id: 7, title: '7. ផ្សារទឹកអយោធ្យា', url: BASE_URL + 'cambodian/7.ayothaya_floating_market_km.mp3' },
        { id: 8, title: '8. បទពិសោធន៍ទូកកន្ទុយវែង', url: BASE_URL + 'cambodian/8.long_tail_boat_experience_km.mp3' },
        { id: 9, title: '9. វត្តយាយឆៃមង្គល', url: BASE_URL + 'cambodian/9.wat_yai_chai_mongkhon_km.mp3' },
        { id: 10, title: '10. ត្រឡប់ទៅបាងកក', url: BASE_URL + 'cambodian/10.regreso_a_bangkok_km.mp3' },
        { id: 11, title: '11. ការជូនពរចុងក្រោយ', url: BASE_URL + 'cambodian/11.saludo_final_km.mp3' }
    ],
    catalan: [
        { id: 1, title: '1. INTRODUCCIÓ I BENVINGUDA', url: BASE_URL + 'catalan/1.introduccion_bienvenida_ca.mp3' },
        { id: 2, title: '2. CAMÍ CAP A AYUTTHAYA', url: BASE_URL + 'catalan/2.camino_hacia_ayutthaya_ca.mp3' },
        { id: 3, title: '3. ARRIBADA A AYUTTHAYA | PRIMERES IMPRESSIONS', url: BASE_URL + 'catalan/3.llegada_a_ayutthaya_primeras_impresiones_ca.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'catalan/4.wat_chai_wattanaram_ca.mp3' },
        { id: 5, title: '5. TRASLLAT CAP A WAT MAHATHAT', url: BASE_URL + 'catalan/5.traslado_hacia_wat_mahathat_ca.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'catalan/6.wat_mahathat_ca.mp3' },
        { id: 7, title: '7. MERCAT FLOTANT D’AYOTHAYA', url: BASE_URL + 'catalan/7.ayothaya_floating_market_ca.mp3' },
        { id: 8, title: '8. EXPERIÈNCIA EN LONG TAIL BOAT', url: BASE_URL + 'catalan/8.long_tail_boat_experience_ca.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'catalan/9.wat_yai_chai_mongkhon_ca.mp3' },
        { id: 10, title: '10. TORNADA A BANGKOK', url: BASE_URL + 'catalan/10.regreso_a_bangkok_ca.mp3' },
        { id: 11, title: '11. COMIAT FINAL', url: BASE_URL + 'catalan/11.saludo_final_ca.mp3' }
    ],
    mandarin_china: [
        { id: 1, title: '1. 欢迎与介绍', url: BASE_URL + 'mandarin_china/1.introduccion_bienvenida_zh.mp3' },
        { id: 2, title: '2. 前往大城府的旅程', url: BASE_URL + 'mandarin_china/2.camino_hacia_ayutthaya_zh.mp3' },
        { id: 3, title: '3. 抵达大城府 | 初步印象', url: BASE_URL + 'mandarin_china/3.llegada_a_ayutthaya_primeras_impresiones_zh.mp3' },
        { id: 4, title: '4. 柴瓦塔那兰寺', url: BASE_URL + 'mandarin_china/4.wat_chai_wattanaram_zh.mp3' },
        { id: 5, title: '5. 前往玛哈泰寺', url: BASE_URL + 'mandarin_china/5.traslado_hacia_wat_mahathat_zh.mp3' },
        { id: 6, title: '6. 玛哈泰寺', url: BASE_URL + 'mandarin_china/6.wat_mahathat_zh.mp3' },
        { id: 7, title: '7. 大城水上市场', url: BASE_URL + 'mandarin_china/7.ayothaya_floating_market_zh.mp3' },
        { id: 8, title: '8. 长尾船体验', url: BASE_URL + 'mandarin_china/8.long_tail_boat_experience_zh.mp3' },
        { id: 9, title: '9. 亚依猜蒙空寺', url: BASE_URL + 'mandarin_china/9.wat_yai_chai_mongkhon_zh.mp3' },
        { id: 10, title: '10. 返回曼谷', url: BASE_URL + 'mandarin_china/10.regreso_a_bangkok_zh.mp3' },
        { id: 11, title: '11. 最后的问候', url: BASE_URL + 'mandarin_china/11.saludo_final_zh.mp3' }
    ],
    mandarin_taiwan: [
        { id: 1, title: '1. 歡迎與介紹', url: BASE_URL + 'mandarin_taiwan/1.introduccion_bienvenida_zt.mp3' },
        { id: 2, title: '2. 前往大城的旅程', url: BASE_URL + 'mandarin_taiwan/2.camino_hacia_ayutthaya_zt.mp3' },
        { id: 3, title: '3. 抵達大城 | 初步印象', url: BASE_URL + 'mandarin_taiwan/3.llegada_a_ayutthaya_primeras_impresiones_zt.mp3' },
        { id: 4, title: '4. 柴瓦塔那蘭寺', url: BASE_URL + 'mandarin_taiwan/4.wat_chai_wattanaram_zt.mp3' },
        { id: 5, title: '5. 前往瑪哈泰寺', url: BASE_URL + 'mandarin_taiwan/5.traslado_hacia_wat_mahathat_zt.mp3' },
        { id: 6, title: '6. 瑪哈泰寺', url: BASE_URL + 'mandarin_taiwan/6.wat_mahathat_zt.mp3' },
        { id: 7, title: '7. 大城水上市場', url: BASE_URL + 'mandarin_taiwan/7.ayothaya_floating_market_zt.mp3' },
        { id: 8, title: '8. 長尾船體驗', url: BASE_URL + 'mandarin_taiwan/8.long_tail_boat_experience_zt.mp3' },
        { id: 9, title: '9. 亞依猜蒙空寺', url: BASE_URL + 'mandarin_taiwan/9.wat_yai_chai_mongkhon_zt.mp3' },
        { id: 10, title: '10. 返回曼谷', url: BASE_URL + 'mandarin_taiwan/10.regreso_a_bangkok_zt.mp3' },
        { id: 11, title: '11. 最後的問候', url: BASE_URL + 'mandarin_taiwan/11.saludo_final_zt.mp3' }
    ],
    croatian: [
        { id: 1, title: '1. UVOD I DOBRODOŠLICA', url: BASE_URL + 'croatian/1.introduccion_bienvenida_hr.mp3' },
        { id: 2, title: '2. PUT PREMA AYUTTHAYI', url: BASE_URL + 'croatian/2.camino_hacia_ayutthaya_hr.mp3' },
        { id: 3, title: '3. DOLAZAK U AYUTTHAYU | PRVI DOJMOVI', url: BASE_URL + 'croatian/3.llegada_a_ayutthaya_primeras_impresiones_hr.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'croatian/4.wat_chai_wattanaram_hr.mp3' },
        { id: 5, title: '5. PRIJEVOZ DO WAT MAHATHATA', url: BASE_URL + 'croatian/5.traslado_hacia_wat_mahathat_hr.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'croatian/6.wat_mahathat_hr.mp3' },
        { id: 7, title: '7. PLOVAJUĆA TRŽNICA AYOTHAYA', url: BASE_URL + 'croatian/7.ayothaya_floating_market_hr.mp3' },
        { id: 8, title: '8. ISKUSTVO VOŽNJE LONG TAIL BRODOM', url: BASE_URL + 'croatian/8.long_tail_boat_experience_hr.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'croatian/9.wat_yai_chai_mongkhon_hr.mp3' },
        { id: 10, title: '10. POVRATAK U BANGKOK', url: BASE_URL + 'croatian/10.regreso_a_bangkok_hr.mp3' },
        { id: 11, title: '11. ZAVRŠNI POZDRAV', url: BASE_URL + 'croatian/11.saludo_final_hr.mp3' }
    ],
    czech: [
        { id: 1, title: '1. ÚVOD A PŘIVÍTÁNÍ', url: BASE_URL + 'czech/1.introduccion_bienvenida_cs.mp3' },
        { id: 2, title: '2. CESTA DO AYUTTHAYI', url: BASE_URL + 'czech/2.camino_hacia_ayutthaya_cs.mp3' },
        { id: 3, title: '3. PŘÍJEZD DO AYUTTHAYI | PRVNÍ DOJMY', url: BASE_URL + 'czech/3.llegada_a_ayutthaya_primeras_impresiones_cs.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'czech/4.wat_chai_wattanaram_cs.mp3' },
        { id: 5, title: '5. PŘESUN K WAT MAHATHAT', url: BASE_URL + 'czech/5.traslado_hacia_wat_mahathat_cs.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'czech/6.wat_mahathat_cs.mp3' },
        { id: 7, title: '7. PLAVOUCÍ TRH AYOTHAYA', url: BASE_URL + 'czech/7.ayothaya_floating_market_cs.mp3' },
        { id: 8, title: '8. ZÁŽITEK S LONG TAIL BOAT', url: BASE_URL + 'czech/8.long_tail_boat_experience_cs.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'czech/9.wat_yai_chai_mongkhon_cs.mp3' },
        { id: 10, title: '10. NÁVRAT DO BANGKOKU', url: BASE_URL + 'czech/10.regreso_a_bangkok_cs.mp3' },
        { id: 11, title: '11. ZÁVĚREČNÝ POZDRAV', url: BASE_URL + 'czech/11.saludo_final_cs.mp3' }
    ],
    danish: [
        { id: 1, title: '1. INTRODUKTION OG VELKOMST', url: BASE_URL + 'danish/1.introduccion_bienvenida_da.mp3' },
        { id: 2, title: '2. VEJEN TIL AYUTTHAYA', url: BASE_URL + 'danish/2.camino_hacia_ayutthaya_da.mp3' },
        { id: 3, title: '3. ANKOMST TIL AYUTTHAYA | FØRSTE INDTRYK', url: BASE_URL + 'danish/3.llegada_a_ayutthaya_primeras_impresiones_da.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'danish/4.wat_chai_wattanaram_da.mp3' },
        { id: 5, title: '5. TRANSPORT TIL WAT MAHATHAT', url: BASE_URL + 'danish/5.traslado_hacia_wat_mahathat_da.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'danish/6.wat_mahathat_da.mp3' },
        { id: 7, title: '7. AYOTHAYA FLYDENDE MARKED', url: BASE_URL + 'danish/7.ayothaya_floating_market_da.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT OPLEVELSE', url: BASE_URL + 'danish/8.long_tail_boat_experience_da.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'danish/9.wat_yai_chai_mongkhon_da.mp3' },
        { id: 10, title: '10. TILBAGE TIL BANGKOK', url: BASE_URL + 'danish/10.regreso_a_bangkok_da.mp3' },
        { id: 11, title: '11. AFSLUTTENDE HILSEN', url: BASE_URL + 'danish/11.saludo_final_da.mp3' }
    ],
    dutch: [
        { id: 1, title: '1. INTRODUCTIE EN WELKOM', url: BASE_URL + 'dutch/1.introduccion_bienvenida_nl.mp3' },
        { id: 2, title: '2. REIS NAAR AYUTTHAYA', url: BASE_URL + 'dutch/2.camino_hacia_ayutthaya_nl.mp3' },
        { id: 3, title: '3. AANKOMST IN AYUTTHAYA | EERSTE INDRUKKEN', url: BASE_URL + 'dutch/3.llegada_a_ayutthaya_primeras_impresiones_nl.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'dutch/4.wat_chai_wattanaram_nl.mp3' },
        { id: 5, title: '5. VERPLAATSING NAAR WAT MAHATHAT', url: BASE_URL + 'dutch/5.traslado_hacia_wat_mahathat_nl.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'dutch/6.wat_mahathat_nl.mp3' },
        { id: 7, title: '7. AYOTHAYA DRIJVENDE MARKT', url: BASE_URL + 'dutch/7.ayothaya_floating_market_nl.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT ERVARING', url: BASE_URL + 'dutch/8.long_tail_boat_experience_nl.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'dutch/9.wat_yai_chai_mongkhon_nl.mp3' },
        { id: 10, title: '10. TERUGKEER NAAR BANGKOK', url: BASE_URL + 'dutch/10.regreso_a_bangkok_nl.mp3' },
        { id: 11, title: '11. AFSLUITENDE GROET', url: BASE_URL + 'dutch/11.saludo_final_nl.mp3' }
    ],
    french: [
        { id: 1, title: '1. INTRODUCTION ET BIENVENUE', url: BASE_URL + 'french/1.introduccion_bienvenida_fr.mp3' },
        { id: 2, title: '2. EN ROUTE VERS AYUTTHAYA', url: BASE_URL + 'french/2.camino_hacia_ayutthaya_fr.mp3' },
        { id: 3, title: '3. ARRIVÉE À AYUTTHAYA | PREMIÈRES IMPRESSIONS', url: BASE_URL + 'french/3.llegada_a_ayutthaya_primeras_impresiones_fr.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'french/4.wat_chai_wattanaram_fr.mp3' },
        { id: 5, title: '5. TRANSFERT VERS WAT MAHATHAT', url: BASE_URL + 'french/5.traslado_hacia_wat_mahathat_fr.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'french/6.wat_mahathat_fr.mp3' },
        { id: 7, title: '7. MARCHÉ FLOTTANT D’AYOTHAYA', url: BASE_URL + 'french/7.ayothaya_floating_market_fr.mp3' },
        { id: 8, title: '8. EXPÉRIENCE EN LONG TAIL BOAT', url: BASE_URL + 'french/8.long_tail_boat_experience_fr.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'french/9.wat_yai_chai_mongkhon_fr.mp3' },
        { id: 10, title: '10. RETOUR À BANGKOK', url: BASE_URL + 'french/10.regreso_a_bangkok_fr.mp3' },
        { id: 11, title: '11. SALUTATION FINALE', url: BASE_URL + 'french/11.saludo_final_fr.mp3' }
    ],
    galician: [
        { id: 1, title: '1. INTRODUCIÓN E BENVIDA', url: BASE_URL + 'galician/1.introduccion_bienvenida_gl.mp3' },
        { id: 2, title: '2. CAMIÑO CARA A AYUTTHAYA', url: BASE_URL + 'galician/2.camino_hacia_ayutthaya_gl.mp3' },
        { id: 3, title: '3. CHEGADA A AYUTTHAYA | PRIMEIRAS IMPRESIÓNS', url: BASE_URL + 'galician/3.llegada_a_ayutthaya_primeras_impresiones_gl.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'galician/4.wat_chai_wattanaram_gl.mp3' },
        { id: 5, title: '5. TRASLADO CARA A WAT MAHATHAT', url: BASE_URL + 'galician/5.traslado_hacia_wat_mahathat_gl.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'galician/6.wat_mahathat_gl.mp3' },
        { id: 7, title: '7. MERCADO FLOTANTE DE AYOTHAYA', url: BASE_URL + 'galician/7.ayothaya_floating_market_gl.mp3' },
        { id: 8, title: '8. EXPERIENCIA EN LONG TAIL BOAT', url: BASE_URL + 'galician/8.long_tail_boat_experience_gl.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'galician/9.wat_yai_chai_mongkhon_gl.mp3' },
        { id: 10, title: '10. REGRESO A BANGKOK', url: BASE_URL + 'galician/10.regreso_a_bangkok_gl.mp3' },
        { id: 11, title: '11. SAÚDO FINAL', url: BASE_URL + 'galician/11.saludo_final_gl.mp3' }
    ], galician: [
        { id: 1, title: '1. INTRODUCIÓN E BENVIDA', url: BASE_URL + 'galician/1.introduccion_bienvenida_gl.mp3' },
        { id: 2, title: '2. CAMIÑO CARA A AYUTTHAYA', url: BASE_URL + 'galician/2.camino_hacia_ayutthaya_gl.mp3' },
        { id: 3, title: '3. CHEGADA A AYUTTHAYA | PRIMEIRAS IMPRESIÓNS', url: BASE_URL + 'galician/3.llegada_a_ayutthaya_primeras_impresiones_gl.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'galician/4.wat_chai_wattanaram_gl.mp3' },
        { id: 5, title: '5. TRASLADO CARA A WAT MAHATHAT', url: BASE_URL + 'galician/5.traslado_hacia_wat_mahathat_gl.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'galician/6.wat_mahathat_gl.mp3' },
        { id: 7, title: '7. MERCADO FLOTANTE DE AYOTHAYA', url: BASE_URL + 'galician/7.ayothaya_floating_market_gl.mp3' },
        { id: 8, title: '8. EXPERIENCIA EN LONG TAIL BOAT', url: BASE_URL + 'galician/8.long_tail_boat_experience_gl.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'galician/9.wat_yai_chai_mongkhon_gl.mp3' },
        { id: 10, title: '10. REGRESO A BANGKOK', url: BASE_URL + 'galician/10.regreso_a_bangkok_gl.mp3' },
        { id: 11, title: '11. SAÚDO FINAL', url: BASE_URL + 'galician/11.saludo_final_gl.mp3' }
    ],
    german: [
        { id: 1, title: '1. EINFÜHRUNG UND WILLKOMMEN', url: BASE_URL + 'german/1.introduccion_bienvenida_de.mp3' },
        { id: 2, title: '2. REISE NACH AYUTTHAYA', url: BASE_URL + 'german/2.camino_hacia_ayutthaya_de.mp3' },
        { id: 3, title: '3. ANKUNFT IN AYUTTHAYA | ERSTE EINDRÜCKE', url: BASE_URL + 'german/3.llegada_a_ayutthaya_primeras_impresiones_de.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'german/4.wat_chai_wattanaram_de.mp3' },
        { id: 5, title: '5. TRANSFER ZUM WAT MAHATHAT', url: BASE_URL + 'german/5.traslado_hacia_wat_mahathat_de.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'german/6.wat_mahathat_de.mp3' },
        { id: 7, title: '7. SCHWIMMENDER MARKT VON AYOTHAYA', url: BASE_URL + 'german/7.ayothaya_floating_market_de.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT ERLEBNIS', url: BASE_URL + 'german/8.long_tail_boat_experience_de.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'german/9.wat_yai_chai_mongkhon_de.mp3' },
        { id: 10, title: '10. RÜCKKEHR NACH BANGKOK', url: BASE_URL + 'german/10.regreso_a_bangkok_de.mp3' },
        { id: 11, title: '11. ABSCHLIESSENDER GRUSS', url: BASE_URL + 'german/11.saludo_final_de.mp3' }
    ],
    greek: [
        { id: 1, title: '1. ΕΙΣΑΓΩΓΗ ΚΑΙ ΚΑΛΩΣΟΡΙΣΜΑ', url: BASE_URL + 'greek/1.introduccion_bienvenida_el.mp3' },
        { id: 2, title: '2. ΔΙΑΔΡΟΜΗ ΠΡΟΣ ΤΗΝ ΑΓΙΟΥΤΑΓΙΑ', url: BASE_URL + 'greek/2.camino_hacia_ayutthaya_el.mp3' },
        { id: 3, title: '3. ΑΦΙΞΗ ΣΤΗΝ ΑΓΙΟΥΤΑΓΙΑ | ΠΡΩΤΕΣ ΕΝΤΥΠΩΣΕΙΣ', url: BASE_URL + 'greek/3.llegada_a_ayutthaya_primeras_impresiones_el.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'greek/4.wat_chai_wattanaram_el.mp3' },
        { id: 5, title: '5. ΜΕΤΑΦΟΡΑ ΠΡΟΣ ΤΟ WAT MAHATHAT', url: BASE_URL + 'greek/5.traslado_hacia_wat_mahathat_el.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'greek/6.wat_mahathat_el.mp3' },
        { id: 7, title: '7. ΠΛΩΤΗ ΑΓΟΡΑ AYOTHAYA', url: BASE_URL + 'greek/7.ayothaya_floating_market_el.mp3' },
        { id: 8, title: '8. ΕΜΠΕΙΡΙΑ LONG TAIL BOAT', url: BASE_URL + 'greek/8.long_tail_boat_experience_el.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'greek/9.wat_yai_chai_mongkhon_el.mp3' },
        { id: 10, title: '10. ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΜΠΑΝΓΚΟΚ', url: BASE_URL + 'greek/10.regreso_a_bangkok_el.mp3' },
        { id: 11, title: '11. ΤΕΛΙΚΟΣ ΧΑΙΡΕΤΙΣΜΟΣ', url: BASE_URL + 'greek/11.saludo_final_el.mp3' }
    ],
    hindi: [
        { id: 1, title: '1. परिचय और स्वागत', url: BASE_URL + 'hindi/1.introduccion_bienvenida_hi.mp3' },
        { id: 2, title: '2. अयुत्थया की ओर यात्रा', url: BASE_URL + 'hindi/2.camino_hacia_ayutthaya_hi.mp3' },
        { id: 3, title: '3. अयुत्थया में आगमन | पहली झलक', url: BASE_URL + 'hindi/3.llegada_a_ayutthaya_primeras_impresiones_hi.mp3' },
        { id: 4, title: '4. वाट चाई वाट्टानाराम', url: BASE_URL + 'hindi/4.wat_chai_wattanaram_hi.mp3' },
        { id: 5, title: '5. वाट महाथाट की ओर प्रस्थान', url: BASE_URL + 'hindi/5.traslado_hacia_wat_mahathat_hi.mp3' },
        { id: 6, title: '6. वाट महाथाट', url: BASE_URL + 'hindi/6.wat_mahathat_hi.mp3' },
        { id: 7, title: '7. अयोथाया फ्लोटिंग मार्केट', url: BASE_URL + 'hindi/7.ayothaya_floating_market_hi.mp3' },
        { id: 8, title: '8. लॉन्ग टेल बोट अनुभव', url: BASE_URL + 'hindi/8.long_tail_boat_experience_hi.mp3' },
        { id: 9, title: '9. वाट याई चाई मोंगखोन', url: BASE_URL + 'hindi/9.wat_yai_chai_mongkhon_hi.mp3' },
        { id: 10, title: '10. बैंकॉक वापसी', url: BASE_URL + 'hindi/10.regreso_a_bangkok_hi.mp3' },
        { id: 11, title: '11. अंतिम अभिवादन', url: BASE_URL + 'hindi/11.saludo_final_hi.mp3' }
    ],
    hungarian: [
        { id: 1, title: '1. BEVEZETÉS ÉS ÜDVÖZLÉS', url: BASE_URL + 'hungarian/1.introduccion_bienvenida_hu.mp3' },
        { id: 2, title: '2. ÚT AYUTTHAYÁBA', url: BASE_URL + 'hungarian/2.camino_hacia_ayutthaya_hu.mp3' },
        { id: 3, title: '3. ÉRKEZÉS AYUTTHAYÁBA | ELSŐ BENYOMÁSOK', url: BASE_URL + 'hungarian/3.llegada_a_ayutthaya_primeras_impresiones_hu.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'hungarian/4.wat_chai_wattanaram_hu.mp3' },
        { id: 5, title: '5. UTAZÁS A WAT MAHATHATHOZ', url: BASE_URL + 'hungarian/5.traslado_hacia_wat_mahathat_hu.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'hungarian/6.wat_mahathat_hu.mp3' },
        { id: 7, title: '7. AYOTHAYA ÚSZÓPIAC', url: BASE_URL + 'hungarian/7.ayothaya_floating_market_hu.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT ÉLMÉNY', url: BASE_URL + 'hungarian/8.long_tail_boat_experience_hu.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'hungarian/9.wat_yai_chai_mongkhon_hu.mp3' },
        { id: 10, title: '10. VISSZATÉRÉS BANGKOKBA', url: BASE_URL + 'hungarian/10.regreso_a_bangkok_hu.mp3' },
        { id: 11, title: '11. ZÁRÓ KÖSZÖNTÉS', url: BASE_URL + 'hungarian/11.saludo_final_hu.mp3' }
    ],
    indonesian: [
        { id: 1, title: '1. PENGANTAR DAN SELAMAT DATANG', url: BASE_URL + 'indonesian/1.introduccion_bienvenida_id.mp3' },
        { id: 2, title: '2. PERJALANAN MENUJU AYUTTHAYA', url: BASE_URL + 'indonesian/2.camino_hacia_ayutthaya_id.mp3' },
        { id: 3, title: '3. TIBA DI AYUTTHAYA | KESAN PERTAMA', url: BASE_URL + 'indonesian/3.llegada_a_ayutthaya_primeras_impresiones_id.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'indonesian/4.wat_chai_wattanaram_id.mp3' },
        { id: 5, title: '5. PERJALANAN MENUJU WAT MAHATHAT', url: BASE_URL + 'indonesian/5.traslado_hacia_wat_mahathat_id.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'indonesian/6.wat_mahathat_id.mp3' },
        { id: 7, title: '7. PASAR TERAPUNG AYOTHAYA', url: BASE_URL + 'indonesian/7.ayothaya_floating_market_id.mp3' },
        { id: 8, title: '8. PENGALAMAN LONG TAIL BOAT', url: BASE_URL + 'indonesian/8.long_tail_boat_experience_id.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'indonesian/9.wat_yai_chai_mongkhon_id.mp3' },
        { id: 10, title: '10. KEMBALI KE BANGKOK', url: BASE_URL + 'indonesian/10.regreso_a_bangkok_id.mp3' },
        { id: 11, title: '11. SALAM PENUTUP', url: BASE_URL + 'indonesian/11.saludo_final_id.mp3' }
    ],
    italian: [
        { id: 1, title: '1. INTRODUZIONE E BENVENUTO', url: BASE_URL + 'italian/1.introduccion_bienvenida_it.mp3' },
        { id: 2, title: '2. VIAGGIO VERSO AYUTTHAYA', url: BASE_URL + 'italian/2.camino_hacia_ayutthaya_it.mp3' },
        { id: 3, title: '3. ARRIVO AD AYUTTHAYA | PRIME IMPRESSIONI', url: BASE_URL + 'italian/3.llegada_a_ayutthaya_primeras_impresiones_it.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'italian/4.wat_chai_wattanaram_it.mp3' },
        { id: 5, title: '5. TRASFERIMENTO A WAT MAHATHAT', url: BASE_URL + 'italian/5.traslado_hacia_wat_mahathat_it.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'italian/6.wat_mahathat_it.mp3' },
        { id: 7, title: '7. MERCATO GALLEGGIANTE DI AYOTHAYA', url: BASE_URL + 'italian/7.ayothaya_floating_market_it.mp3' },
        { id: 8, title: '8. ESPERIENZA LONG TAIL BOAT', url: BASE_URL + 'italian/8.long_tail_boat_experience_it.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'italian/9.wat_yai_chai_mongkhon_it.mp3' },
        { id: 10, title: '10. RITORNO A BANGKOK', url: BASE_URL + 'italian/10.regreso_a_bangkok_it.mp3' },
        { id: 11, title: '11. SALUTO FINALE', url: BASE_URL + 'italian/11.saludo_final_it.mp3' }
    ],
    japanese: [
        { id: 1, title: '1. はじめにと歓迎', url: BASE_URL + 'japanese/1.introduccion_bienvenida_ja.mp3' },
        { id: 2, title: '2. アユタヤへの旅', url: BASE_URL + 'japanese/2.camino_hacia_ayutthaya_ja.mp3' },
        { id: 3, title: '3. アユタヤ到着 | 第一印象', url: BASE_URL + 'japanese/3.llegada_a_ayutthaya_primeras_impresiones_ja.mp3' },
        { id: 4, title: '4. ワット・チャイワッタナラーム', url: BASE_URL + 'japanese/4.wat_chai_wattanaram_ja.mp3' },
        { id: 5, title: '5. ワット・マハタートへの移動', url: BASE_URL + 'japanese/5.traslado_hacia_wat_mahathat_ja.mp3' },
        { id: 6, title: '6. ワット・マハタート', url: BASE_URL + 'japanese/6.wat_mahathat_ja.mp3' },
        { id: 7, title: '7. アヨタヤ水上マーケット', url: BASE_URL + 'japanese/7.ayothaya_floating_market_ja.mp3' },
        { id: 8, title: '8. ロングテールボート体験', url: BASE_URL + 'japanese/8.long_tail_boat_experience_ja.mp3' },
        { id: 9, title: '9. ワット・ヤイ・チャイ・モンコン', url: BASE_URL + 'japanese/9.wat_yai_chai_mongkhon_ja.mp3' },
        { id: 10, title: '10. バンコクへ戻る', url: BASE_URL + 'japanese/10.regreso_a_bangkok_ja.mp3' },
        { id: 11, title: '11. 最後のご挨拶', url: BASE_URL + 'japanese/11.saludo_final_ja.mp3' }
    ],
    korean: [
        { id: 1, title: '1. 소개 및 환영', url: BASE_URL + 'korean/1.introduccion_bienvenida_ko.mp3' },
        { id: 2, title: '2. 아유타야로 가는 길', url: BASE_URL + 'korean/2.camino_hacia_ayutthaya_ko.mp3' },
        { id: 3, title: '3. 아유타야 도착 | 첫인상', url: BASE_URL + 'korean/3.llegada_a_ayutthaya_primeras_impresiones_ko.mp3' },
        { id: 4, title: '4. 왓 차이 왓타나람', url: BASE_URL + 'korean/4.wat_chai_wattanaram_ko.mp3' },
        { id: 5, title: '5. 왓 마하탓으로 이동', url: BASE_URL + 'korean/5.traslado_hacia_wat_mahathat_ko.mp3' },
        { id: 6, title: '6. 왓 마하탓', url: BASE_URL + 'korean/6.wat_mahathat_ko.mp3' },
        { id: 7, title: '7. 아요타야 수상시장', url: BASE_URL + 'korean/7.ayothaya_floating_market_ko.mp3' },
        { id: 8, title: '8. 롱테일 보트 체험', url: BASE_URL + 'korean/8.long_tail_boat_experience_ko.mp3' },
        { id: 9, title: '9. 왓 야이 차이 몽콘', url: BASE_URL + 'korean/9.wat_yai_chai_mongkhon_ko.mp3' },
        { id: 10, title: '10. 방콕으로 귀환', url: BASE_URL + 'korean/10.regreso_a_bangkok_ko.mp3' },
        { id: 11, title: '11. 마지막 인사', url: BASE_URL + 'korean/11.saludo_final_ko.mp3' }
    ],
    malay: [
        { id: 1, title: '1. PENGENALAN DAN UCAPAN SELAMAT DATANG', url: BASE_URL + 'malay/1.introduccion_bienvenida_ms.mp3' },
        { id: 2, title: '2. PERJALANAN KE AYUTTHAYA', url: BASE_URL + 'malay/2.camino_hacia_ayutthaya_ms.mp3' },
        { id: 3, title: '3. KETIBAAN DI AYUTTHAYA | TANGGAPAN PERTAMA', url: BASE_URL + 'malay/3.llegada_a_ayutthaya_primeras_impresiones_ms.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'malay/4.wat_chai_wattanaram_ms.mp3' },
        { id: 5, title: '5. PERPINDAHAN KE WAT MAHATHAT', url: BASE_URL + 'malay/5.traslado_hacia_wat_mahathat_ms.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'malay/6.wat_mahathat_ms.mp3' },
        { id: 7, title: '7. PASAR TERAPUNG AYOTHAYA', url: BASE_URL + 'malay/7.ayothaya_floating_market_ms.mp3' },
        { id: 8, title: '8. PENGALAMAN LONG TAIL BOAT', url: BASE_URL + 'malay/8.long_tail_boat_experience_ms.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'malay/9.wat_yai_chai_mongkhon_ms.mp3' },
        { id: 10, title: '10. KEMBALI KE BANGKOK', url: BASE_URL + 'malay/10.regreso_a_bangkok_ms.mp3' },
        { id: 11, title: '11. UCAPAN PENUTUP', url: BASE_URL + 'malay/11.saludo_final_ms.mp3' }
    ],
    nepali: [
        { id: 1, title: '1. परिचय र स्वागत', url: BASE_URL + 'nepali/1.introduccion_bienvenida_ne.mp3' },
        { id: 2, title: '2. अयुथायातर्फको यात्रा', url: BASE_URL + 'nepali/2.camino_hacia_ayutthaya_ne.mp3' },
        { id: 3, title: '3. अयुथायामा आगमन | पहिलो अनुभूति', url: BASE_URL + 'nepali/3.llegada_a_ayutthaya_primeras_impresiones_ne.mp3' },
        { id: 4, title: '4. वाट चाइ वाट्टानाराम', url: BASE_URL + 'nepali/4.wat_chai_wattanaram_ne.mp3' },
        { id: 5, title: '5. वाट महाथाततर्फ प्रस्थान', url: BASE_URL + 'nepali/5.traslado_hacia_wat_mahathat_ne.mp3' },
        { id: 6, title: '6. वाट महाथात', url: BASE_URL + 'nepali/6.wat_mahathat_ne.mp3' },
        { id: 7, title: '7. अयोथाया फ्लोटिंग मार्केट', url: BASE_URL + 'nepali/7.ayothaya_floating_market_ne.mp3' },
        { id: 8, title: '8. लङ टेल बोट अनुभव', url: BASE_URL + 'nepali/8.long_tail_boat_experience_ne.mp3' },
        { id: 9, title: '9. वाट याई चाइ मोंगखोन', url: BASE_URL + 'nepali/9.wat_yai_chai_mongkhon_ne.mp3' },
        { id: 10, title: '10. बैंकक फर्किने यात्रा', url: BASE_URL + 'nepali/10.regreso_a_bangkok_ne.mp3' },
        { id: 11, title: '11. अन्तिम शुभकामना', url: BASE_URL + 'nepali/11.saludo_final_ne.mp3' }
    ],
    norwegian: [
        { id: 1, title: '1. INTRODUKSJON OG VELKOMST', url: BASE_URL + 'norwegian/1.introduccion_bienvenida_no.mp3' },
        { id: 2, title: '2. REISEN TIL AYUTTHAYA', url: BASE_URL + 'norwegian/2.camino_hacia_ayutthaya_no.mp3' },
        { id: 3, title: '3. ANKOMST TIL AYUTTHAYA | FØRSTE INNTRYKK', url: BASE_URL + 'norwegian/3.llegada_a_ayutthaya_primeras_impresiones_no.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'norwegian/4.wat_chai_wattanaram_no.mp3' },
        { id: 5, title: '5. TRANSPORT TIL WAT MAHATHAT', url: BASE_URL + 'norwegian/5.traslado_hacia_wat_mahathat_no.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'norwegian/6.wat_mahathat_no.mp3' },
        { id: 7, title: '7. AYOTHAYA FLYTENDE MARKED', url: BASE_URL + 'norwegian/7.ayothaya_floating_market_no.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT-OPPLEVELSE', url: BASE_URL + 'norwegian/8.long_tail_boat_experience_no.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'norwegian/9.wat_yai_chai_mongkhon_no.mp3' },
        { id: 10, title: '10. RETUR TIL BANGKOK', url: BASE_URL + 'norwegian/10.regreso_a_bangkok_no.mp3' },
        { id: 11, title: '11. AVSLUTTENDE HILSEN', url: BASE_URL + 'norwegian/11.saludo_final_no.mp3' }
    ],
    persian: [
        { id: 1, title: '1. مقدمه و خوشامدگویی', url: BASE_URL + 'persian/1.introduccion_bienvenida_fa.mp3' },
        { id: 2, title: '2. سفر به آیوتایا', url: BASE_URL + 'persian/2.camino_hacia_ayutthaya_fa.mp3' },
        { id: 3, title: '3. ورود به آیوتایا | اولین برداشت‌ها', url: BASE_URL + 'persian/3.llegada_a_ayutthaya_primeras_impresiones_fa.mp3' },
        { id: 4, title: '4. وات چای واتانارام', url: BASE_URL + 'persian/4.wat_chai_wattanaram_fa.mp3' },
        { id: 5, title: '5. انتقال به وات ماهاتات', url: BASE_URL + 'persian/5.traslado_hacia_wat_mahathat_fa.mp3' },
        { id: 6, title: '6. وات ماهاتات', url: BASE_URL + 'persian/6.wat_mahathat_fa.mp3' },
        { id: 7, title: '7. بازار شناور آیوتایا', url: BASE_URL + 'persian/7.ayothaya_floating_market_fa.mp3' },
        { id: 8, title: '8. تجربه قایق دم‌دراز', url: BASE_URL + 'persian/8.long_tail_boat_experience_fa.mp3' },
        { id: 9, title: '9. وات یای چای مونگخون', url: BASE_URL + 'persian/9.wat_yai_chai_mongkhon_fa.mp3' },
        { id: 10, title: '10. بازگشت به بانکوک', url: BASE_URL + 'persian/10.regreso_a_bangkok_fa.mp3' },
        { id: 11, title: '11. خداحافظی پایانی', url: BASE_URL + 'persian/11.saludo_final_fa.mp3' }
    ],
    philipines: [
        { id: 1, title: '1. PANIMULA AT PAGBATI', url: BASE_URL + 'philipines/1.introduccion_bienvenida_fil.mp3' },
        { id: 2, title: '2. PAGLALAKBAY PATUNGONG AYUTTHAYA', url: BASE_URL + 'philipines/2.camino_hacia_ayutthaya_fil.mp3' },
        { id: 3, title: '3. PAGDATING SA AYUTTHAYA | MGA UNANG IMPRESYON', url: BASE_URL + 'philipines/3.llegada_a_ayutthaya_primeras_impresiones_fil.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'philipines/4.wat_chai_wattanaram_fil.mp3' },
        { id: 5, title: '5. PAGLIPAT PATUNGONG WAT MAHATHAT', url: BASE_URL + 'philipines/5.traslado_hacia_wat_mahathat_fil.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'philipines/6.wat_mahathat_fil.mp3' },
        { id: 7, title: '7. AYOTHAYA FLOATING MARKET', url: BASE_URL + 'philipines/7.ayothaya_floating_market_fil.mp3' },
        { id: 8, title: '8. KARANASAN SA LONG TAIL BOAT', url: BASE_URL + 'philipines/8.long_tail_boat_experience_fil.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'philipines/9.wat_yai_chai_mongkhon_fil.mp3' },
        { id: 10, title: '10. PAGBABALIK SA BANGKOK', url: BASE_URL + 'philipines/10.regreso_a_bangkok_fil.mp3' },
        { id: 11, title: '11. PANGHULING PAGBATI', url: BASE_URL + 'philipines/11.saludo_final_fil.mp3' }
    ],
    polish: [
        { id: 1, title: '1. WPROWADZENIE I POWITANIE', url: BASE_URL + 'polish/1.introduccion_bienvenida_pl.mp3' },
        { id: 2, title: '2. PODRÓŻ DO AYUTTHAYI', url: BASE_URL + 'polish/2.camino_hacia_ayutthaya_pl.mp3' },
        { id: 3, title: '3. PRZYJAZD DO AYUTTHAYI | PIERWSZE WRAŻENIA', url: BASE_URL + 'polish/3.llegada_a_ayutthaya_primeras_impresiones_pl.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'polish/4.wat_chai_wattanaram_pl.mp3' },
        { id: 5, title: '5. PRZEJAZD DO WAT MAHATHAT', url: BASE_URL + 'polish/5.traslado_hacia_wat_mahathat_pl.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'polish/6.wat_mahathat_pl.mp3' },
        { id: 7, title: '7. PŁYWAJĄCY TARG AYOTHAYA', url: BASE_URL + 'polish/7.ayothaya_floating_market_pl.mp3' },
        { id: 8, title: '8. REJS ŁODZIĄ LONG TAIL BOAT', url: BASE_URL + 'polish/8.long_tail_boat_experience_pl.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'polish/9.wat_yai_chai_mongkhon_pl.mp3' },
        { id: 10, title: '10. POWRÓT DO BANGKOKU', url: BASE_URL + 'polish/10.regreso_a_bangkok_pl.mp3' },
        { id: 11, title: '11. POŻEGNANIE KOŃCOWE', url: BASE_URL + 'polish/11.saludo_final_pl.mp3' }
    ],
    portuguese: [
        { id: 1, title: '1. INTRODUÇÃO E BOAS-VINDAS', url: BASE_URL + 'portuguese/1.introduccion_bienvenida_pt.mp3' },
        { id: 2, title: '2. CAMINHO PARA AYUTTHAYA', url: BASE_URL + 'portuguese/2.camino_hacia_ayutthaya_pt.mp3' },
        { id: 3, title: '3. CHEGADA A AYUTTHAYA | PRIMEIRAS IMPRESSÕES', url: BASE_URL + 'portuguese/3.llegada_a_ayutthaya_primeras_impresiones_pt.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'portuguese/4.wat_chai_wattanaram_pt.mp3' },
        { id: 5, title: '5. TRASLADO PARA WAT MAHATHAT', url: BASE_URL + 'portuguese/5.traslado_hacia_wat_mahathat_pt.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'portuguese/6.wat_mahathat_pt.mp3' },
        { id: 7, title: '7. MERCADO FLUTUANTE DE AYOTHAYA', url: BASE_URL + 'portuguese/7.ayothaya_floating_market_pt.mp3' },
        { id: 8, title: '8. EXPERIÊNCIA LONG TAIL BOAT', url: BASE_URL + 'portuguese/8.long_tail_boat_experience_pt.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'portuguese/9.wat_yai_chai_mongkhon_pt.mp3' },
        { id: 10, title: '10. RETORNO A BANGKOK', url: BASE_URL + 'portuguese/10.regreso_a_bangkok_pt.mp3' },
        { id: 11, title: '11. SAUDAÇÃO FINAL', url: BASE_URL + 'portuguese/11.saludo_final_pt.mp3' }
    ],
    russian: [
        { id: 1, title: '1. ВВЕДЕНИЕ И ПРИВЕТСТВИЕ', url: BASE_URL + 'russian/1.introduccion_bienvenida_ru.mp3' },
        { id: 2, title: '2. ПУТЬ В АЮТТХАЮ', url: BASE_URL + 'russian/2.camino_hacia_ayutthaya_ru.mp3' },
        { id: 3, title: '3. ПРИБЫТИЕ В АЮТТХАЮ | ПЕРВЫЕ ВПЕЧАТЛЕНИЯ', url: BASE_URL + 'russian/3.llegada_a_ayutthaya_primeras_impresiones_ru.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'russian/4.wat_chai_wattanaram_ru.mp3' },
        { id: 5, title: '5. ПЕРЕЕЗД К WAT MAHATHAT', url: BASE_URL + 'russian/5.traslado_hacia_wat_mahathat_ru.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'russian/6.wat_mahathat_ru.mp3' },
        { id: 7, title: '7. ПЛАВАЮЩИЙ РЫНОК АЙОТХАЯ', url: BASE_URL + 'russian/7.ayothaya_floating_market_ru.mp3' },
        { id: 8, title: '8. ПОЕЗДКА НА LONG TAIL BOAT', url: BASE_URL + 'russian/8.long_tail_boat_experience_ru.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'russian/9.wat_yai_chai_mongkhon_ru.mp3' },
        { id: 10, title: '10. ВОЗВРАЩЕНИЕ В БАНГКОК', url: BASE_URL + 'russian/10.regreso_a_bangkok_ru.mp3' },
        { id: 11, title: '11. ЗАКЛЮЧИТЕЛЬНОЕ ПРИВЕТСТВИЕ', url: BASE_URL + 'russian/11.saludo_final_ru.mp3' }
    ],
    serbian: [
        { id: 1, title: '1. UVOD I DOBRODOŠLICA', url: BASE_URL + 'serbian/1.introduccion_bienvenida_sr.mp3' },
        { id: 2, title: '2. PUT KA AJUTAJI', url: BASE_URL + 'serbian/2.camino_hacia_ayutthaya_sr.mp3' },
        { id: 3, title: '3. DOLAZAK U AJUTAJU | PRVI UTISCI', url: BASE_URL + 'serbian/3.llegada_a_ayutthaya_primeras_impresiones_sr.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'serbian/4.wat_chai_wattanaram_sr.mp3' },
        { id: 5, title: '5. PREVOZ DO WAT MAHATHAT', url: BASE_URL + 'serbian/5.traslado_hacia_wat_mahathat_sr.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'serbian/6.wat_mahathat_sr.mp3' },
        { id: 7, title: '7. PLOVAJUĆA PIJACA AYOTHAYA', url: BASE_URL + 'serbian/7.ayothaya_floating_market_sr.mp3' },
        { id: 8, title: '8. ISKUSTVO LONG TAIL BOAT', url: BASE_URL + 'serbian/8.long_tail_boat_experience_sr.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'serbian/9.wat_yai_chai_mongkhon_sr.mp3' },
        { id: 10, title: '10. POVRATAK U BANGKOK', url: BASE_URL + 'serbian/10.regreso_a_bangkok_sr.mp3' },
        { id: 11, title: '11. ZAVRŠNI POZDRAV', url: BASE_URL + 'serbian/11.saludo_final_sr.mp3' }
    ],
    slovenian: [
        { id: 1, title: '1. UVOD IN DOBRODOŠLICA', url: BASE_URL + 'slovenian/1.introduccion_bienvenida_sl.mp3' },
        { id: 2, title: '2. POT PROTI AYUTTHAYI', url: BASE_URL + 'slovenian/2.camino_hacia_ayutthaya_sl.mp3' },
        { id: 3, title: '3. PRIHOD V AYUTTHAYO | PRVI VTISI', url: BASE_URL + 'slovenian/3.llegada_a_ayutthaya_primeras_impresiones_sl.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'slovenian/4.wat_chai_wattanaram_sl.mp3' },
        { id: 5, title: '5. PREVOZ DO WAT MAHATHAT', url: BASE_URL + 'slovenian/5.traslado_hacia_wat_mahathat_sl.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'slovenian/6.wat_mahathat_sl.mp3' },
        { id: 7, title: '7. PLOVEOČA TRŽNICA AYOTHAYA', url: BASE_URL + 'slovenian/7.ayothaya_floating_market_sl.mp3' },
        { id: 8, title: '8. IZKUŠNJA Z LONG TAIL BOAT', url: BASE_URL + 'slovenian/8.long_tail_boat_experience_sl.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'slovenian/9.wat_yai_chai_mongkhon_sl.mp3' },
        { id: 10, title: '10. VRNITEV V BANGKOK', url: BASE_URL + 'slovenian/10.regreso_a_bangkok_sl.mp3' },
        { id: 11, title: '11. ZAKLJUČNI POZDRAV', url: BASE_URL + 'slovenian/11.saludo_final_sl.mp3' }
    ],
    spanish_latam: [
        { id: 1, title: '1. INTRODUCCIÓN BIENVENIDA', url: BASE_URL + 'spanish_latam/1.introduccion_bienvenida_es_latam.mp3' },
        { id: 2, title: '2. CAMINO HACIA AYUTTHAYA', url: BASE_URL + 'spanish_latam/2.camino_hacia_ayutthaya_es_latam.mp3' },
        { id: 3, title: '3. LLEGADA A AYUTTHAYA | PRIMERAS IMPRESIONES', url: BASE_URL + 'spanish_latam/3.llegada_a_ayutthaya_primeras_impresiones_es_latam.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'spanish_latam/4.wat_chai_wattanaram_es_latam.mp3' },
        { id: 5, title: '5. TRASLADO HACIA WAT MAHATHAT', url: BASE_URL + 'spanish_latam/5.traslado_hacia_wat_mahathat_es_latam.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'spanish_latam/6.wat_mahathat_es_latam.mp3' },
        { id: 7, title: '7. AYOTHAYA FLOATING MARKET', url: BASE_URL + 'spanish_latam/7.ayothaya_floating_market_es_latam.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT EXPERIENCE', url: BASE_URL + 'spanish_latam/8.long_tail_boat_experience_es_latam.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'spanish_latam/9.wat_yai_chai_mongkhon_es_latam.mp3' },
        { id: 10, title: '10. REGRESO A BANGKOK', url: BASE_URL + 'spanish_latam/10.regreso_a_bangkok_es_latam.mp3' },
        { id: 11, title: '11. SALUDO FINAL', url: BASE_URL + 'spanish_latam/11.saludo_final_es_latam.mp3' }
    ],
    spanish_spain: [
        { id: 1, title: '1. INTRODUCCIÓN BIENVENIDA', url: BASE_URL + 'spanish_spain/1.introduccion_bienvenida_es_es.mp3' },
        { id: 2, title: '2. CAMINO HACIA AYUTTHAYA', url: BASE_URL + 'spanish_spain/2.camino_hacia_ayutthaya_es_es.mp3' },
        { id: 3, title: '3. LLEGADA A AYUTTHAYA | PRIMERAS IMPRESIONES', url: BASE_URL + 'spanish_spain/3.llegada_a_ayutthaya_primeras_impresiones_es_es.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'spanish_spain/4.wat_chai_wattanaram_es_es.mp3' },
        { id: 5, title: '5. TRASLADO HACIA WAT MAHATHAT', url: BASE_URL + 'spanish_spain/5.traslado_hacia_wat_mahathat_es_es.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'spanish_spain/6.wat_mahathat_es_es.mp3' },
        { id: 7, title: '7. AYOTHAYA FLOATING MARKET', url: BASE_URL + 'spanish_spain/7.ayothaya_floating_market_es_es.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT EXPERIENCE', url: BASE_URL + 'spanish_spain/8.long_tail_boat_experience_es_es.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'spanish_spain/9.wat_yai_chai_mongkhon_es_es.mp3' },
        { id: 10, title: '10. REGRESO A BANGKOK', url: BASE_URL + 'spanish_spain/10.regreso_a_bangkok_es_es.mp3' },
        { id: 11, title: '11. SALUDO FINAL', url: BASE_URL + 'spanish_spain/11.saludo_final_es_es.mp3' }
    ],
    swahili: [
        { id: 1, title: '1. UTANGULIZI NA KARIBU', url: BASE_URL + 'swahili/1.introduccion_bienvenida_sw.mp3' },
        { id: 2, title: '2. SAFARI YA KWENDA AYUTTHAYA', url: BASE_URL + 'swahili/2.camino_hacia_ayutthaya_sw.mp3' },
        { id: 3, title: '3. KUWASILI AYUTTHAYA | HISIA ZA KWANZA', url: BASE_URL + 'swahili/3.llegada_a_ayutthaya_primeras_impresiones_sw.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'swahili/4.wat_chai_wattanaram_sw.mp3' },
        { id: 5, title: '5. USAFIRI KWENDA WAT MAHATHAT', url: BASE_URL + 'swahili/5.traslado_hacia_wat_mahathat_sw.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'swahili/6.wat_mahathat_sw.mp3' },
        { id: 7, title: '7. SOKO LINALOELEA LA AYOTHAYA', url: BASE_URL + 'swahili/7.ayothaya_floating_market_sw.mp3' },
        { id: 8, title: '8. UZOEFU WA LONG TAIL BOAT', url: BASE_URL + 'swahili/8.long_tail_boat_experience_sw.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'swahili/9.wat_yai_chai_mongkhon_sw.mp3' },
        { id: 10, title: '10. KURUDI BANGKOK', url: BASE_URL + 'swahili/10.regreso_a_bangkok_sw.mp3' },
        { id: 11, title: '11. SALAMU YA MWISHO', url: BASE_URL + 'swahili/11.saludo_final_sw.mp3' }
    ],
    swedish: [
        { id: 1, title: '1. INTRODUKTION OCH VÄLKOMST', url: BASE_URL + 'swedish/1.introduccion_bienvenida_sv.mp3' },
        { id: 2, title: '2. RESAN TILL AYUTTHAYA', url: BASE_URL + 'swedish/2.camino_hacia_ayutthaya_sv.mp3' },
        { id: 3, title: '3. ANKOMST TILL AYUTTHAYA | FÖRSTA INTRYCK', url: BASE_URL + 'swedish/3.llegada_a_ayutthaya_primeras_impresiones_sv.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'swedish/4.wat_chai_wattanaram_sv.mp3' },
        { id: 5, title: '5. TRANSPORT TILL WAT MAHATHAT', url: BASE_URL + 'swedish/5.traslado_hacia_wat_mahathat_sv.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'swedish/6.wat_mahathat_sv.mp3' },
        { id: 7, title: '7. AYOTHAYA FLYTANDE MARKNAD', url: BASE_URL + 'swedish/7.ayothaya_floating_market_sv.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT-UPPLEVELSE', url: BASE_URL + 'swedish/8.long_tail_boat_experience_sv.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'swedish/9.wat_yai_chai_mongkhon_sv.mp3' },
        { id: 10, title: '10. ÅTERRESA TILL BANGKOK', url: BASE_URL + 'swedish/10.regreso_a_bangkok_sv.mp3' },
        { id: 11, title: '11. AVSLUTANDE HÄLSNING', url: BASE_URL + 'swedish/11.saludo_final_sv.mp3' }
    ],
    tamil: [
        { id: 1, title: '1. அறிமுகம் மற்றும் வரவேற்பு', url: BASE_URL + 'tamil/1.introduccion_bienvenida_ta.mp3' },
        { id: 2, title: '2. அயுத்தயாவிற்கு செல்லும் பயணம்', url: BASE_URL + 'tamil/2.camino_hacia_ayutthaya_ta.mp3' },
        { id: 3, title: '3. அயுத்தயா வருகை | முதல் அனுபவங்கள்', url: BASE_URL + 'tamil/3.llegada_a_ayutthaya_primeras_impresiones_ta.mp3' },
        { id: 4, title: '4. வாட் சாய் வட்டனாரம்', url: BASE_URL + 'tamil/4.wat_chai_wattanaram_ta.mp3' },
        { id: 5, title: '5. வாட் மகாதாத் நோக்கி பயணம்', url: BASE_URL + 'tamil/5.traslado_hacia_wat_mahathat_ta.mp3' },
        { id: 6, title: '6. வாட் மகாதாத்', url: BASE_URL + 'tamil/6.wat_mahathat_ta.mp3' },
        { id: 7, title: '7. அயோதயா மிதக்கும் சந்தை', url: BASE_URL + 'tamil/7.ayothaya_floating_market_ta.mp3' },
        { id: 8, title: '8. லாங் டெயில் படகு அனுபவம்', url: BASE_URL + 'tamil/8.long_tail_boat_experience_ta.mp3' },
        { id: 9, title: '9. வாட் யாய் சாய் மொங்க்கோன்', url: BASE_URL + 'tamil/9.wat_yai_chai_mongkhon_ta.mp3' },
        { id: 10, title: '10. பாங்காக்கிற்கு திரும்புதல்', url: BASE_URL + 'tamil/10.regreso_a_bangkok_ta.mp3' },
        { id: 11, title: '11. இறுதி வாழ்த்து', url: BASE_URL + 'tamil/11.saludo_final_ta.mp3' }
    ],
    thai: [
        { id: 1, title: '1. บทนำและการต้อนรับ', url: BASE_URL + 'thai/1.introduccion_bienvenida_th.mp3' },
        { id: 2, title: '2. การเดินทางสู่อยุธยา', url: BASE_URL + 'thai/2.camino_hacia_ayutthaya_th.mp3' },
        { id: 3, title: '3. เดินทางถึงอยุธยา | ความประทับใจแรก', url: BASE_URL + 'thai/3.llegada_a_ayutthaya_primeras_impresiones_th.mp3' },
        { id: 4, title: '4. วัดไชยวัฒนาราม', url: BASE_URL + 'thai/4.wat_chai_wattanaram_th.mp3' },
        { id: 5, title: '5. เดินทางสู่วัดมหาธาตุ', url: BASE_URL + 'thai/5.traslado_hacia_wat_mahathat_th.mp3' },
        { id: 6, title: '6. วัดมหาธาตุ', url: BASE_URL + 'thai/6.wat_mahathat_th.mp3' },
        { id: 7, title: '7. ตลาดน้ำอโยธยา', url: BASE_URL + 'thai/7.ayothaya_floating_market_th.mp3' },
        { id: 8, title: '8. ประสบการณ์เรือหางยาว', url: BASE_URL + 'thai/8.long_tail_boat_experience_th.mp3' },
        { id: 9, title: '9. วัดใหญ่ชัยมงคล', url: BASE_URL + 'thai/9.wat_yai_chai_mongkhon_th.mp3' },
        { id: 10, title: '10. เดินทางกลับกรุงเทพฯ', url: BASE_URL + 'thai/10.regreso_a_bangkok_th.mp3' },
        { id: 11, title: '11. คำอำลาสุดท้าย', url: BASE_URL + 'thai/11.saludo_final_th.mp3' }
    ],
    turkish: [
        { id: 1, title: '1. GİRİŞ VE HOŞ GELDİNİZ', url: BASE_URL + 'turkish/1.introduccion_bienvenida_tr.mp3' },
        { id: 2, title: '2. AYUTTHAYA YOLCULUĞU', url: BASE_URL + 'turkish/2.camino_hacia_ayutthaya_tr.mp3' },
        { id: 3, title: '3. AYUTTHAYA’YA VARIŞ | İLK İZLENİMLER', url: BASE_URL + 'turkish/3.llegada_a_ayutthaya_primeras_impresiones_tr.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'turkish/4.wat_chai_wattanaram_tr.mp3' },
        { id: 5, title: '5. WAT MAHATHAT’A TRANSFER', url: BASE_URL + 'turkish/5.traslado_hacia_wat_mahathat_tr.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'turkish/6.wat_mahathat_tr.mp3' },
        { id: 7, title: '7. AYOTHAYA YÜZEN PAZARI', url: BASE_URL + 'turkish/7.ayothaya_floating_market_tr.mp3' },
        { id: 8, title: '8. LONG TAIL BOAT DENEYİMİ', url: BASE_URL + 'turkish/8.long_tail_boat_experience_tr.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'turkish/9.wat_yai_chai_mongkhon_tr.mp3' },
        { id: 10, title: '10. BANGKOK’A DÖNÜŞ', url: BASE_URL + 'turkish/10.regreso_a_bangkok_tr.mp3' },
        { id: 11, title: '11. SON SELAMLAMA', url: BASE_URL + 'turkish/11.saludo_final_tr.mp3' }
    ],
    ukrainian: [
        { id: 1, title: '1. ВСТУП І ПРИВІТАННЯ', url: BASE_URL + 'ukrainian/1.introduccion_bienvenida_uk.mp3' },
        { id: 2, title: '2. ДОРОГА ДО АЮТТХАЇ', url: BASE_URL + 'ukrainian/2.camino_hacia_ayutthaya_uk.mp3' },
        { id: 3, title: '3. ПРИБУТТЯ ДО АЮТТХАЇ | ПЕРШІ ВРАЖЕННЯ', url: BASE_URL + 'ukrainian/3.llegada_a_ayutthaya_primeras_impresiones_uk.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'ukrainian/4.wat_chai_wattanaram_uk.mp3' },
        { id: 5, title: '5. ТРАНСФЕР ДО WAT MAHATHAT', url: BASE_URL + 'ukrainian/5.traslado_hacia_wat_mahathat_uk.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'ukrainian/6.wat_mahathat_uk.mp3' },
        { id: 7, title: '7. ПЛАВУЧИЙ РИНОК АЙОТХАЯ', url: BASE_URL + 'ukrainian/7.ayothaya_floating_market_uk.mp3' },
        { id: 8, title: '8. ПРОГУЛЯНКА НА LONG TAIL BOAT', url: BASE_URL + 'ukrainian/8.long_tail_boat_experience_uk.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'ukrainian/9.wat_yai_chai_mongkhon_uk.mp3' },
        { id: 10, title: '10. ПОВЕРНЕННЯ ДО БАНГКОКА', url: BASE_URL + 'ukrainian/10.regreso_a_bangkok_uk.mp3' },
        { id: 11, title: '11. ФІНАЛЬНЕ ПРИВІТАННЯ', url: BASE_URL + 'ukrainian/11.saludo_final_uk.mp3' }
    ],
    urdu: [
        { id: 1, title: '1. تعارف اور خوش آمدید', url: BASE_URL + 'urdu/1.introduccion_bienvenida_ur.mp3' },
        { id: 2, title: '2. ایوتھایا کی جانب سفر', url: BASE_URL + 'urdu/2.camino_hacia_ayutthaya_ur.mp3' },
        { id: 3, title: '3. ایوتھایا آمد | پہلا تاثر', url: BASE_URL + 'urdu/3.llegada_a_ayutthaya_primeras_impresiones_ur.mp3' },
        { id: 4, title: '4. واٹ چائی واٹانارام', url: BASE_URL + 'urdu/4.wat_chai_wattanaram_ur.mp3' },
        { id: 5, title: '5. واٹ مہاتھات کی جانب منتقلی', url: BASE_URL + 'urdu/5.traslado_hacia_wat_mahathat_ur.mp3' },
        { id: 6, title: '6. واٹ مہاتھات', url: BASE_URL + 'urdu/6.wat_mahathat_ur.mp3' },
        { id: 7, title: '7. ایوتھایا فلوٹنگ مارکیٹ', url: BASE_URL + 'urdu/7.ayothaya_floating_market_ur.mp3' },
        { id: 8, title: '8. لانگ ٹیل بوٹ کا تجربہ', url: BASE_URL + 'urdu/8.long_tail_boat_experience_ur.mp3' },
        { id: 9, title: '9. واٹ یائی چائی مونگکھون', url: BASE_URL + 'urdu/9.wat_yai_chai_mongkhon_ur.mp3' },
        { id: 10, title: '10. بینکاک واپسی', url: BASE_URL + 'urdu/10.regreso_a_bangkok_ur.mp3' },
        { id: 11, title: '11. آخری الوداعی پیغام', url: BASE_URL + 'urdu/11.saludo_final_ur.mp3' }
    ],
    vietnamese: [
        { id: 1, title: '1. GIỚI THIỆU VÀ CHÀO MỪNG', url: BASE_URL + 'vietnamese/1.introduccion_bienvenida_vi.mp3' },
        { id: 2, title: '2. HÀNH TRÌNH ĐẾN AYUTTHAYA', url: BASE_URL + 'vietnamese/2.camino_hacia_ayutthaya_vi.mp3' },
        { id: 3, title: '3. ĐẾN AYUTTHAYA | ẤN TƯỢNG ĐẦU TIÊN', url: BASE_URL + 'vietnamese/3.llegada_a_ayutthaya_primeras_impresiones_vi.mp3' },
        { id: 4, title: '4. WAT CHAI WATTANARAM', url: BASE_URL + 'vietnamese/4.wat_chai_wattanaram_vi.mp3' },
        { id: 5, title: '5. DI CHUYỂN ĐẾN WAT MAHATHAT', url: BASE_URL + 'vietnamese/5.traslado_hacia_wat_mahathat_vi.mp3' },
        { id: 6, title: '6. WAT MAHATHAT', url: BASE_URL + 'vietnamese/6.wat_mahathat_vi.mp3' },
        { id: 7, title: '7. CHỢ NỔI AYOTHAYA', url: BASE_URL + 'vietnamese/7.ayothaya_floating_market_vi.mp3' },
        { id: 8, title: '8. TRẢI NGHIỆM LONG TAIL BOAT', url: BASE_URL + 'vietnamese/8.long_tail_boat_experience_vi.mp3' },
        { id: 9, title: '9. WAT YAI CHAI MONGKHON', url: BASE_URL + 'vietnamese/9.wat_yai_chai_mongkhon_vi.mp3' },
        { id: 10, title: '10. TRỞ VỀ BANGKOK', url: BASE_URL + 'vietnamese/10.regreso_a_bangkok_vi.mp3' },
        { id: 11, title: '11. LỜI CHÀO KẾT THÚC', url: BASE_URL + 'vietnamese/11.saludo_final_vi.mp3' }
    ],
}

const tourMapStops = {
    english: [
        { name: "Stop 1 - Wat Chaiwatthanaram" },
        { name: "Stop 2 - Wat Maha That" },
        { name: "Stop 3 - Ayothaya Floating Market" },
        { name: "Stop 4 - Wat Yai Chai Mongkhon" }
    ],
    arabic: [
        { name: "المحطة 1 - وات تشاي واتانارام" },
        { name: "المحطة 2 - وات ماها ثات" },
        { name: "المحطة 3 - سوق أيوثايا العائم" },
        { name: "المحطة 4 - وات ياي تشاي مونغخون" }
    ],
    basque: [
        { name: "1. geltokia - Wat Chaiwatthanaram" },
        { name: "2. geltokia - Wat Maha That" },
        { name: "3. geltokia - Ayothaya Merkatu Flotatzailea" },
        { name: "4. geltokia - Wat Yai Chai Mongkhon" }
    ],
    bengali: [
        { name: "স্টপ ১ - ওয়াট চাই ওয়াত্তারানাম" },
        { name: "স্টপ ২ - ওয়াট মহাথাত" },
        { name: "স্টপ ৩ - আয়োথায়া ফ্লোটিং মার্কেট" },
        { name: "স্টপ ৪ - ওয়াট ইয়াই চাই মংখন" }
    ],
    cambodian: [
        { name: "ចំណុចឈប់ 1 - វត្ត Chaiwatthanaram" },
        { name: "ចំណុចឈប់ 2 - វត្ត Maha That" },
        { name: "ចំណុចឈប់ 3 - ទីផ្សារអណ្តែត Ayothaya" },
        { name: "ចំណុចឈប់ 4 - វត្ត Yai Chai Mongkhon" }
    ],
    catalan: [
        { name: "Parada 1 - Wat Chaiwatthanaram" },
        { name: "Parada 2 - Wat Maha That" },
        { name: "Parada 3 - Mercat Flotant d'Ayothaya" },
        { name: "Parada 4 - Wat Yai Chai Mongkhon" }
    ],
    mandarin_china: [
        { name: "站点 1 - 柴瓦他那兰寺" },
        { name: "站点 2 - 玛哈泰寺" },
        { name: "站点 3 - 阿育他亚水上市场" },
        { name: "站点 4 - 耶才蒙空寺" }
    ],
    mandarin_taiwan: [
        { name: "站點 1 - 柴瓦他那蘭寺" },
        { name: "站點 2 - 瑪哈泰寺" },
        { name: "站點 3 - 阿育他亞水上市場" },
        { name: "站點 4 - 耶才蒙空寺" }
    ],
    croatian: [
        { name: "Postaja 1 - Wat Chaiwatthanaram" },
        { name: "Postaja 2 - Wat Maha That" },
        { name: "Postaja 3 - Plutajuće tržište Ayothaya" },
        { name: "Postaja 4 - Wat Yai Chai Mongkhon" }
    ],
    czech: [
        { name: "Zastávka 1 - Wat Chaiwatthanaram" },
        { name: "Zastávka 2 - Wat Maha That" },
        { name: "Zastávka 3 - Plovoucí trh Ayothaya" },
        { name: "Zastávka 4 - Wat Yai Chai Mongkhon" }
    ],
    danish: [
        { name: "Stop 1 - Wat Chaiwatthanaram" },
        { name: "Stop 2 - Wat Maha That" },
        { name: "Stop 3 - Ayothaya Flydende Marked" },
        { name: "Stop 4 - Wat Yai Chai Mongkhon" }
    ],
    dutch: [
        { name: "Stop 1 - Wat Chaiwatthanaram" },
        { name: "Stop 2 - Wat Maha That" },
        { name: "Stop 3 - Ayothaya Drijvende Markt" },
        { name: "Stop 4 - Wat Yai Chai Mongkhon" }
    ],
    french: [
        { name: "Arrêt 1 - Wat Chaiwatthanaram" },
        { name: "Arrêt 2 - Wat Maha That" },
        { name: "Arrêt 3 - Marché Flottant d'Ayothaya" },
        { name: "Arrêt 4 - Wat Yai Chai Mongkhon" }
    ],
    galician: [
        { name: "Parada 1 - Wat Chaiwatthanaram" },
        { name: "Parada 2 - Wat Maha That" },
        { name: "Parada 3 - Mercado Flotante de Ayothaya" },
        { name: "Parada 4 - Wat Yai Chai Mongkhon" }
    ],
    german: [
        { name: "Haltestelle 1 - Wat Chaiwatthanaram" },
        { name: "Haltestelle 2 - Wat Maha That" },
        { name: "Haltestelle 3 - Schwimmender Markt Ayothaya" },
        { name: "Haltestelle 4 - Wat Yai Chai Mongkhon" }
    ],
    greek: [
        { name: "Στάση 1 - Wat Chaiwatthanaram" },
        { name: "Στάση 2 - Wat Maha That" },
        { name: "Στάση 3 - Πλωτή Αγορά Ayothaya" },
        { name: "Στάση 4 - Wat Yai Chai Mongkhon" }
    ],
    hindi: [
        { name: "स्टॉप 1 - वाट चाईवाटानाराम" },
        { name: "स्टॉप 2 - वाट महाथात" },
        { name: "स्टॉप 3 - अयोथाया फ्लोटिंग मार्केट" },
        { name: "स्टॉप 4 - वाट याई चाई मोंखोन" }
    ],
    hungarian: [
        { name: "1. megálló - Wat Chaiwatthanaram" },
        { name: "2. megálló - Wat Maha That" },
        { name: "3. megálló - Ayothaya Úszó Piac" },
        { name: "4. megálló - Wat Yai Chai Mongkhon" }
    ],
    indonesian: [
        { name: "Pemberhentian 1 - Wat Chaiwatthanaram" },
        { name: "Pemberhentian 2 - Wat Maha That" },
        { name: "Pemberhentian 3 - Pasar Terapung Ayothaya" },
        { name: "Pemberhentian 4 - Wat Yai Chai Mongkhon" }
    ],
    italian: [
        { name: "Fermata 1 - Wat Chaiwatthanaram" },
        { name: "Fermata 2 - Wat Maha That" },
        { name: "Fermata 3 - Mercato Galleggiante di Ayothaya" },
        { name: "Fermata 4 - Wat Yai Chai Mongkhon" }
    ],
    japanese: [
        { name: "ストップ1 - ワット・チャイワッタナーラーム" },
        { name: "ストップ2 - ワット・マハータート" },
        { name: "ストップ3 - アユタヤ水上マーケット" },
        { name: "ストップ4 - ワット・ヤイ・チャイ・モンコン" }
    ],
    korean: [
        { name: "정류장 1 - 왓 차이왓타나람" },
        { name: "정류장 2 - 왓 마하탓" },
        { name: "정류장 3 - 아유타야 수상시장" },
        { name: "정류장 4 - 왓 야이 차이 몽콘" }
    ],
    malay: [
        { name: "Hentian 1 - Wat Chaiwatthanaram" },
        { name: "Hentian 2 - Wat Maha That" },
        { name: "Hentian 3 - Pasar Terapung Ayothaya" },
        { name: "Hentian 4 - Wat Yai Chai Mongkhon" }
    ],
    nepali: [
        { name: "स्टप १ - वाट चाईवाट्टानाराम" },
        { name: "स्टप २ - वाट महाथात" },
        { name: "स्टप ३ - अयोथाया तैरिने बजार" },
        { name: "स्टप ४ - वाट याई चाई मोंखोन" }
    ],
    norwegian: [
        { name: "Stopp 1 - Wat Chaiwatthanaram" },
        { name: "Stopp 2 - Wat Maha That" },
        { name: "Stopp 3 - Ayothaya Flytende Marked" },
        { name: "Stopp 4 - Wat Yai Chai Mongkhon" }
    ],
    persian: [
        { name: "ایستگاه 1 - وات چایواتانارام" },
        { name: "ایستگاه 2 - وات ماها تات" },
        { name: "ایستگاه 3 - بازار شناور آیوتایا" },
        { name: "ایستگاه 4 - وات یای چای مونگخون" }
    ],
    philipines: [
        { name: "Hinto 1 - Wat Chaiwatthanaram" },
        { name: "Hinto 2 - Wat Maha That" },
        { name: "Hinto 3 - Ayothaya Floating Market" },
        { name: "Hinto 4 - Wat Yai Chai Mongkhon" }
    ],
    polish: [
        { name: "Postój 1 - Wat Chaiwatthanaram" },
        { name: "Postój 2 - Wat Maha That" },
        { name: "Postój 3 - Pływający rynek Ayothaya" },
        { name: "Postój 4 - Wat Yai Chai Mongkhon" }
    ],
    portuguese: [
        { name: "Parada 1 - Wat Chaiwatthanaram" },
        { name: "Parada 2 - Wat Maha That" },
        { name: "Parada 3 - Mercado Flutuante de Ayothaya" },
        { name: "Parada 4 - Wat Yai Chai Mongkhon" }
    ],
    russian: [
        { name: "Остановка 1 - Ват Чайваттханарам" },
        { name: "Остановка 2 - Ват Маха Тхат" },
        { name: "Остановка 3 - Плавучий рынок Айютая" },
        { name: "Остановка 4 - Ват Яй Чай Монгкхон" }
    ],
    serbian: [
        { name: "Постаја 1 - Ват Чаивотанарам" },
        { name: "Постаја 2 - Ват Маха Тат" },
        { name: "Постаја 3 - Пловајућа пијаца Ајутаја" },
        { name: "Постаја 4 - Ват Јај Чај Монгкхон" }
    ],
    slovenian: [
        { name: "Postaja 1 - Wat Chaiwatthanaram" },
        { name: "Postaja 2 - Wat Maha That" },
        { name: "Postaja 3 - Plavajoče tržišče Ayothaya" },
        { name: "Postaja 4 - Wat Yai Chai Mongkhon" }
    ],
    spanish_latam: [
        { name: "Parada 1 - Wat Chaiwatthanaram" },
        { name: "Parada 2 - Wat Maha That" },
        { name: "Parada 3 - Mercado Flotante de Ayothaya" },
        { name: "Parada 4 - Wat Yai Chai Mongkhon" }
    ],
    spanish_spain: [
        { name: "Parada 1 - Wat Chaiwatthanaram" },
        { name: "Parada 2 - Wat Maha That" },
        { name: "Parada 3 - Mercado Flotante de Ayothaya" },
        { name: "Parada 4 - Wat Yai Chai Mongkhon" }
    ],
    swahili: [
        { name: "Kituo 1 - Wat Chaiwatthanaram" },
        { name: "Kituo 2 - Wat Maha That" },
        { name: "Kituo 3 - Soko Linaloelea la Ayothaya" },
        { name: "Kituo 4 - Wat Yai Chai Mongkhon" }
    ],
    swedish: [
        { name: "Stopp 1 - Wat Chaiwatthanaram" },
        { name: "Stopp 2 - Wat Maha That" },
        { name: "Stopp 3 - Ayothaya Flytande Marknad" },
        { name: "Stopp 4 - Wat Yai Chai Mongkhon" }
    ],
    tamil: [
        { name: "நிறுத்தம் 1 - வாட் சாய்வாட்டனாராம்" },
        { name: "நிறுத்தம் 2 - வாட் மஹாதாத்" },
        { name: "நிறுத்தம் 3 - அயோதயா மிதக்கும் சந்தை" },
        { name: "நிறுத்தம் 4 - வாட் யாய் சாய் மொங்கோன்" }
    ],
    thai: [
        { name: "จุดที่ 1 - วัดไชยวัฒนาราม" },
        { name: "จุดที่ 2 - วัดมหาธาตุ" },
        { name: "จุดที่ 3 - ตลาดน้ำอโยธยา" },
        { name: "จุดที่ 4 - วัดใหญ่ชัยมงคล" }
    ],
    turkish: [
        { name: "Durak 1 - Wat Chaiwatthanaram" },
        { name: "Durak 2 - Wat Maha That" },
        { name: "Durak 3 - Ayothaya Yüzen Pazar" },
        { name: "Durak 4 - Wat Yai Chai Mongkhon" }
    ],
    ukrainian: [
        { name: "Зупинка 1 - Ват Чайваттханарам" },
        { name: "Зупинка 2 - Ват Маха Тхат" },
        { name: "Зупинка 3 - Плавучий ринок Айюттхая" },
        { name: "Зупинка 4 - Ват Яй Чай Монгкхон" }
    ],
    urdu: [
        { name: "اسٹاپ 1 - واٹ چائیواٹنارام" },
        { name: "اسٹاپ 2 - واٹ مہاتھات" },
        { name: "اسٹاپ 3 - ایوتھایا فلوٹنگ مارکیٹ" },
        { name: "اسٹاپ 4 - واٹ یائی چائی مونگکھون" }
    ],
    vietnamese: [
        { name: "Điểm dừng 1 - Wat Chaiwatthanaram" },
        { name: "Điểm dừng 2 - Wat Maha That" },
        { name: "Điểm dừng 3 - Chợ nổi Ayothaya" },
        { name: "Điểm dừng 4 - Wat Yai Chai Mongkhon" }
    ]
}