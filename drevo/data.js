const treeData = {
    "persons": [
        // 0 ПОКОЛЕНИЕ: ВЫ
        {"id": "me", "x": 1000, "y": 40, "type": "me", "name": {"ru": "Роман Дмитриевич Буссе", "de": "Roman Busse"}, "region": {"ru": "Главный профиль", "de": "Hauptprofil"}, "info": {"ru": "Создатель древа", "de": "Gründer des Stammbaums"}, "parents": ["father_dmitry", "mother_ekaterina"]},
        
        // 1 ПОКОЛЕНИЕ: РОДИТЕЛИ
        {"id": "father_dmitry", "x": 450, "y": 190, "type": "paternal", "name": {"ru": "Дмитрий Александрович Сырейщиков", "de": "Dmitry Syreishchikov"}, "region": {"ru": "г. Йошкар-Ола", "de": "Joschkar-Ola"}, "info": {"ru": "Отец • Род. 06.02.1969 г.", "de": "Vater • Geb. 06.02.1969"}, "parents": ["sireishchikov_alexander", "konurova_alexandra"]},
        {"id": "mother_ekaterina", "x": 1550, "y": 190, "type": "maternal", "name": {"ru": "Екатерина Буссе", "de": "Ekaterina Busse"}, "region": {"ru": "Линия матери", "de": "Mütterliche Linie"}, "info": {"ru": "Ветви Буссе / Кузнецовых", "de": "Zweige Busse / Kuznezov"}, "parents": ["busse_evgeny", "kuznetsova_zoya"]},
        
        // 2 ПОКОЛЕНИЕ: БАБУШКИ И ДЕДУШКИ
        {"id": "sireishchikov_alexander", "x": 200, "y": 340, "type": "paternal", "name": {"ru": "Александр Сырейщиков", "de": "Alexander Syreishchikov"}, "region": {"ru": "г. Йошкар-Ола", "de": "Joschkar-Ola"}, "info": {"ru": "Дед • 1945 — 2000 гг.", "de": "Großvater • 1945 — 2000"}, "parents": ["sireishchikov_vasily", "fokina_ekaterina"]},
        {"id": "konurova_alexandra", "x": 650, "y": 340, "type": "paternal", "name": {"ru": "Александра Конурова (1947)", "de": "Alexandra Konurova (1947)"}, "region": {"ru": "д. Рыбино, Вятская губ.", "de": "Dorf Rybino, Wjatka"}, "info": {"ru": "Дочь Алексея (1914)", "de": "Tochter von Alexei (1914)"}, "parents": ["konurov_alexei", "sokova_ustinya"]},
        {"id": "busse_evgeny", "x": 1250, "y": 340, "type": "maternal", "name": {"ru": "Евгений Буссе", "de": "Ewgeni Busse"}, "region": {"ru": "Ижевск / Казань", "de": "Ischewsk / Kasan"}, "info": {"ru": "Сын Дмитрия Буссе", "de": "Sohn von Dmitry Busse"}, "parents": ["busse_dmitry", "larionova_margarita_p"]},
        {"id": "kuznetsova_zoya", "x": 1750, "y": 340, "type": "maternal", "name": {"ru": "Зоя Кузнецова (1946)", "de": "Soja Kuznezova (1946)"}, "region": {"ru": "д. Гришунята / Шулка", "de": "Dorf Grischunjata / Schulka"}, "info": {"ru": "Дочь Ивана и Марии (1906)", "de": "Tochter von Iwan u. Maria (1906)"}, "parents": ["kuznetsov_ivan", "zhuravleva_nina"]},

        // 3 ПОКОЛЕНИЕ: ПРАДЕДУШКИ И ПРАБАБУШКИ
        {"id": "sireishchikov_vasily", "x": 80, "y": 490, "type": "paternal", "name": {"ru": "Василий Алексеевич Сырейщиков", "de": "Wassili Syreishchikov"}, "region": {"ru": "д. Башкири (Марий Эл)", "de": "Dorf Baschkiri (Mari El)"}, "info": {"ru": "30.12.1922 — 09.04.1991", "de": "Urgroßvater • 1922 — 1991"}, "parents": ["great2_grandfather_alexei"]},
        {"id": "fokina_ekaterina", "x": 320, "y": 490, "type": "paternal", "name": {"ru": "Екатерина Фокина", "de": "Ekaterina Fokina"}, "region": {"ru": "д. Непейно, Дмитров", "de": "Dorf Nepeino, Dmitrow"}, "info": {"ru": "Дочь Василия (1900)", "de": "Tochter von Wassili (1900)"}, "parents": ["fokin_vasily"]},
        {"id": "konurov_alexei", "x": 540, "y": 490, "type": "paternal", "name": {"ru": "Алексей Конуров (1914)", "de": "Alexei Konurov (1914)"}, "region": {"ru": "д. Рыбино", "de": "Dorf Rybino"}, "info": {"ru": "Сын Николая", "de": "Sohn von Nikolai"}, "parents": ["konurov_nikolai"]},
        {"id": "sokova_ustinya", "x": 780, "y": 490, "type": "paternal", "name": {"ru": "Устинья Сокова (1914)", "de": "Ustinija Sokova (1914)"}, "region": {"ru": "д. Рыбино", "de": "Dorf Rybino"}, "info": {"ru": "Дочь Григория", "de": "Tochter von Grigori"}, "parents": ["sokov_grigori"]},
        {"id": "busse_dmitry", "x": 1100, "y": 490, "type": "maternal", "name": {"ru": "Дмитрий Буссе", "de": "Dmitry Busse"}, "region": {"ru": "Казань", "de": "Kasan"}, "info": {"ru": "Муж Маргариты Ларионовой", "de": "Ehemann von Margarita"}, "parents": ["busse_alexander", "larionova_margarita_p"]},
        {"id": "kuznetsov_ivan", "x": 1420, "y": 490, "type": "maternal", "name": {"ru": "Иван Кузнецов (1900)", "de": "Iwan Kuznezov (1900)"}, "region": {"ru": "д. Гришунята", "de": "Dorf Grischunjata"}, "info": {"ru": "Линия Кузнецовых", "de": "Kuznezov-Linie"}, "parents": []},
        {"id": "zhuravleva_nina", "x": 1750, "y": 490, "type": "maternal", "name": {"ru": "Нина Журавлёва (1894)", "de": "Nina Shurawljowa (1894)"}, "region": {"ru": "Ижевск (Удмуртия)", "de": "Ischewsk"}, "info": {"ru": "Дочь Николая", "de": "Tochter von Nikolai"}, "parents": ["zhuravlev_nikolai"]},

        // 4 ПОКОЛЕНИЕ И ДАЛЕЕ
        {"id": "great2_grandfather_alexei", "x": 80, "y": 640, "type": "paternal", "name": {"ru": "Алексей Сырейщиков", "de": "Alexei Syreishchikov"}, "region": {"ru": "д. Башкири", "de": "Dorf Baschkiri"}, "info": {"ru": "Отец Василия Алексеевича", "de": "Ururgroßvater"}, "parents": ["great3_grandfather_ivan"]},
        {"id": "fokin_vasily", "x": 320, "y": 640, "type": "paternal", "name": {"ru": "Василий Фокин (1900)", "de": "Wassili Fokina (1900)"}, "region": {"ru": "д. Непейно", "de": "Dorf Nepeino"}, "info": {"ru": "Сын Ивана (1860) -> Яков", "de": "Sohn von Iwan (1860)"}, "parents": []},
        {"id": "konurov_nikolai", "x": 540, "y": 640, "type": "paternal", "name": {"ru": "Николай Конуров", "de": "Nikolai Konurov"}, "region": {"ru": "д. Рыбино", "de": "Dorf Rybino"}, "info": {"ru": "Вятские корни", "de": "Wjatka-Ahnen"}, "parents": []},
        {"id": "sokov_grigori", "x": 780, "y": 640, "type": "paternal", "name": {"ru": "Григорий Соков", "de": "Grigori Sokov"}, "region": {"ru": "д. Рыбино", "de": "Dorf Rybino"}, "info": {"ru": "Линия Соковых", "de": "Sokov-Linie"}, "parents": []},
        {"id": "busse_alexander", "x": 1100, "y": 640, "type": "maternal", "name": {"ru": "Александр Буссе", "de": "Alexander Busse"}, "region": {"ru": "Польша / Казань", "de": "Polen / Kasan"}, "info": {"ru": "Сын Ивана и Прасковьи", "de": "Sohn von Iwan u. Praskowja"}, "parents": ["busse_ivan", "vinogradova_praskovya"]},
        {"id": "larionova_margarita_p", "x": 1320, "y": 640, "type": "maternal", "name": {"ru": "Маргарита Ларионова", "de": "Margarita Larionova"}, "region": {"ru": "Казань", "de": "Kasan"}, "info": {"ru": "Жена Дмитрия Буссе", "de": "Ehefrau von Dmitry Busse"}, "parents": []},
        {"id": "zhuravlev_nikolai", "x": 1750, "y": 640, "type": "maternal", "name": {"ru": "Николай Журавлёв", "de": "Nikolai Shurawljow"}, "region": {"ru": "Ижевск", "de": "Ischewsk"}, "info": {"ru": "До Корнила (XVIII в.)", "de": "Bis Kornil (18. Jh.)"}, "parents": []},

        // 5 ПОКОЛЕНИЕ
        {"id": "great3_grandfather_ivan", "x": 80, "y": 790, "type": "paternal", "name": {"ru": "Иван Спиридонович Сырейщиков", "de": "Iwan Syreishchikov"}, "region": {"ru": "д. Башкири", "de": "Dorf Baschkiri"}, "info": {"ru": "Родоначальник ветки в д. Башкири", "de": "Stammvater in Baschkiri"}, "parents": ["great4_grandfather_spiridon"]},
        {"id": "busse_ivan", "x": 1100, "y": 790, "type": "maternal", "name": {"ru": "Иван Буссе", "de": "Johann Busse"}, "region": {"ru": "Польша / Пруссия", "de": "Polen / Preußen"}, "info": {"ru": "Муж Прасковьи Виноградовой", "de": "Ehemann von Praskowja"}, "parents": ["busse_anton", "leman_anna"]},
        {"id": "vinogradova_praskovya", "x": 1320, "y": 790, "type": "maternal", "name": {"ru": "Прасковья Виноградова", "de": "Praskowja Vinogradova"}, "region": {"ru": "Россия", "de": "Russland"}, "info": {"ru": "Солдатская дочь", "de": "Soldatentochter"}, "parents": []},

        // 6 ПОКОЛЕНИЕ
        {"id": "great4_grandfather_spiridon", "x": 80, "y": 940, "type": "paternal", "name": {"ru": "Спиридон Сырейщиков", "de": "Spiridon Syreishchikov"}, "region": {"ru": "д. Башкири", "de": "Dorf Baschkiri"}, "info": {"ru": "Родоначальник ветки", "de": "Stammvater"}, "parents": []},
        {"id": "busse_anton", "x": 1000, "y": 940, "type": "maternal", "name": {"ru": "Антон Буссе", "de": "Anton Busse"}, "region": {"ru": "Пруссия", "de": "Preußen"}, "info": {"ru": "Сын Самуэля и Барбары", "de": "Sohn von Samuel u. Barbara"}, "parents": ["busse_samuel", "zinke_barbara"]},
        {"id": "leman_anna", "x": 1220, "y": 940, "type": "maternal", "name": {"ru": "Анна Леман", "de": "Anna Lehmann"}, "region": {"ru": "Пруссия", "de": "Preußen"}, "info": {"ru": "Дочь Готтлиба и Анны", "de": "Tochter von Gottlieb u. Anna"}, "parents": ["leman_gottlib", "schonknecht_anna"]},

        // 7 ПОКОЛЕНИЕ (КОРНИ)
        {"id": "busse_samuel", "x": 880, "y": 1090, "type": "maternal", "name": {"ru": "Самуэль Буссе", "de": "Samuel Busse"}, "region": {"ru": "Царство Польское", "de": "Kongresspolen"}, "info": {"ru": "Муж Барбары Цинке", "de": "Ehemann von Barbara Zinke"}, "parents": []},
        {"id": "zinke_barbara", "x": 1010, "y": 1090, "type": "maternal", "name": {"ru": "Барбара Цинке", "de": "Barbara Zinke"}, "region": {"ru": "Пруссия", "de": "Preußen"}, "info": {"ru": "Жена Самуэля", "de": "Ehefrau von Samuel"}, "parents": []},
        {"id": "leman_gottlib", "x": 1140, "y": 1090, "type": "maternal", "name": {"ru": "Gottlieb Lehmann", "de": "Gottlieb Lehmann"}, "region": {"ru": "Пруссия", "de": "Preußen"}, "info": {"ru": "Муж Анны Розины", "de": "Ehemann von Anna Rosina"}, "parents": []},
        {"id": "schonknecht_anna", "x": 1270, "y": 1090, "type": "maternal", "name": {"ru": "Анна Розина Шёнкнехт", "de": "Anna Rosina Schönknecht"}, "region": {"ru": "Пруссия", "de": "Preußen"}, "info": {"ru": "Жена Готтлиба Лемана", "de": "Ehefrau von Gottlieb"}}
    ]
};
