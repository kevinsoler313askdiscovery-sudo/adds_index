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
}