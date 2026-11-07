const treeData = {
 "persons": [
  {"id":"me","x":1000,"y":40,"t":"me","n":{"ru":"Роман Дмитриевич Буссе","de":"Roman Busse"},"r":{"ru":"Главный профиль","de":"Hauptprofil"},"i":{"ru":"Создатель древа","de":"Gründer"},"p":["father_dmitry","mother_ekaterina"]},
  {"id":"father_dmitry","x":450,"y":190,"t":"paternal","n":{"ru":"Дмитрий Александрович Сырейщиков","de":"Dmitry Syreishchikov"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Отец • Род. 06.02.1969","de":"Vater • Geb. 06.02.1969"},"p":["sireishchikov_alexander","konurova_alexandra"],"h":false},
  {"id":"mother_ekaterina","x":1550,"y":190,"t":"maternal","n":{"ru":"Екатерина Евгеньевна Буссе","de":"Ekaterina Busse"},"r":{"ru":"Линия матери","de":"Mütterliche Linie"},"i":{"ru":"Ветвь Буссе","de":"Busse-Zweig"},"p":["busse_evgeny","kuznetsova_zoya"],"h":false},
  
  // ================= ТЕТИ, ДЯДИ, БРАТЬЯ И ПЛЕМЯННИКИ =================
  {"id":"martin","x":1300,"y":-110,"t":"paternal","n":{"ru":"Мартин Артемович Буссе","de":"Martin Busse"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Сын Артема","de":"Sohn von Artem"},"p":["cousin_artem"],"h":false},
  {"id":"cousin_artem","x":1300,"y":40,"t":"paternal","n":{"ru":"Артем Константинович Буссе","de":"Artem Busse"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Двоюродный брат • Род. 08.06.1992","de":"Cousin • Geb. 1992"},"p":["uncle_konstantin","aunt_svetlana"]},
  {"id":"aunt_svetlana","x":1150,"y":190,"t":"paternal","n":{"ru":"Светлана Александровна Буссе (Сырейщикова)","de":"Svetlana Busse"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Тетя • Род. 05.02.1972","de":"Tante • Geb. 1972"},"p":["sireishchikov_alexander","konurova_alexandra"],"h":false},
  {"id":"uncle_konstantin","x":1350,"y":190,"t":"maternal","n":{"ru":"Константин Евгеньевич Буссе","de":"Konstantin Busse"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Дядя • Род. 03.08.1973","de":"Onkel • Geb. 1973"},"p":["busse_evgeny","kuznetsova_zoya"],"h":false},
  {"id":"uncle_dmitry_e","x":1750,"y":190,"t":"maternal","n":{"ru":"Дмитрий Евгеньевич Буссе","de":"Dmitry Busse"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Дядя • Род. 20.08.1982","de":"Onkel • Geb. 1982"},"p":["busse_evgeny","kuznetsova_zoya"],"h":false},
  
  // ================= ОТЦОВСКАЯ ВЕТКА =================
  {"id":"sireishchikov_alexander","x":200,"y":340,"t":"paternal","n":{"ru":"Александр Сырейщиков","de":"Alexander Syreishchikov"},"r":{"ru":"г. Йошкар-Ола","de":"Joschkar-Ola"},"i":{"ru":"Дед • 1945 — 2000","de":"Großvater • 1945 — 2000"},"p":["sireishchikov_vasily","fokina_ekaterina"],"h":false},
  {"id":"sireishchikov_vasily","x":80,"y":490,"t":"paternal","n":{"ru":"Василий Алексеевич Сырейщиков","de":"Wassili Syreishchikov"},"r":{"ru":"д. Башкири (Марий Эл)","de":"Dorf Baschkiri"},"i":{"ru":"Прадед • 30.12.1922 — 09.04.1991","de":"Urgroßvater • 1922 — 1991"},"p":["great2_grandfather_alexei"],"h":false},
  {"id":"great2_grandfather_alexei","x":80,"y":640,"t":"paternal","n":{"ru":"Алексей Сырейщиков","de":"Alexei Syreishchikov"},"r":{"ru":"д. Башкири","de":"Dorf Baschkiri"},"i":{"ru":"Прапрадед","de":"Ururgroßvater"},"p":[]},
  
  {"id":"fokina_ekaterina","x":310,"y":490,"t":"paternal","n":{"ru":"Екатерина Васильевна Фокина","de":"Ekaterina Fokina"},"r":{"ru":"д. Непейно, Дмитров","de":"Dorf Nepeino"},"i":{"ru":"Прабабушка • 18.11.1924 — 06.09.2010","de":"Urgroßmutter"},"p":["fokin_vasily"],"h":false},
  {"id":"fokin_vasily","x":310,"y":640,"t":"paternal","n":{"ru":"Василий Иванович Фокин","de":"Wassili Fokin"},"r":{"ru":"д. Непейно","de":"Dorf Nepeino"},"i":{"ru":"Прапрадед • Род. 23.05.1900","de":"Ururgroßvater"},"p":["fokin_ivan","fokina_irina"],"h":false},
  {"id":"fokin_ivan","x":200,"y":790,"t":"paternal","n":{"ru":"Иван Яковлевич Фокин","de":"Iwan Fokin"},"r":{"ru":"д. Непейно","de":"Dorf Nepeino"},"i":{"ru":"Пра(3)дед • Род. ок. 1860","de":"Ur(3)großvater"},"p":["fokin_yakov"],"h":false},
  {"id":"fokina_irina","x":420,"y":790,"t":"paternal","n":{"ru":"Ирина Лаврентьевна Фокина","de":"Irina Fokina"},"r":{"ru":"д. Непейно","de":"Dorf Nepeino"},"i":{"ru":"Пра(3)бабушка • Род. ок. 1860","de":"Ur(3)großmutter"},"p":["fokin_lavrenty"],"h":false},
  {"id":"fokin_yakov","x":200,"y":940,"t":"paternal","n":{"ru":"Яков Фокин","de":"Jakob Fokin"},"r":{"ru":"д. Непейно","de":"Dorf Nepeino"},"i":{"ru":"Пра(4)дед","de":"Ur(4)großvater"},"p":[]},
  {"id":"fokin_lavrenty","x":420,"y":940,"t":"paternal","n":{"ru":"Лаврентий","de":"Lawrenti"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Пра(4)дед (отец Ирины)","de":"Ur(4)großvater"},"p":[]},

  {"id":"konurova_alexandra","x":650,"y":340,"t":"paternal","n":{"ru":"Александра Алексеевна Конурова","de":"Alexandra Konurova"},"r":{"ru":"д. Рыбино, Вятская губ.","de":"Dorf Rybino"},"i":{"ru":"Бабушка • Род. 30.04.1947","de":"Großmutter • Geb. 1947"},"p":["konurov_alexei","sokova_ustinya"],"h":false},
  {"id":"konurov_alexei","x":540,"y":490,"t":"paternal","n":{"ru":"Алексей Николаевич Конуров","de":"Alexei Konurov"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прадед • 09.02.1914 — 08.01.2000","de":"Urgroßvater"},"p":["konurov_nikolai","konurova_evdokiya"],"h":false},
  {"id":"sokova_ustinya","x":760,"y":490,"t":"paternal","n":{"ru":"Устинья Григорьевна Сокова","de":"Ustinija Sokova"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прабабушка • Ум. 11.09.1982","de":"Urgroßmutter"},"p":["sokov_grigori","sokova_natalya"],"h":false},
  {"id":"konurov_nikolai","x":430,"y":640,"t":"paternal","n":{"ru":"Николай Конуров","de":"Nikolai Konurov"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прапрадед","de":"Ururgroßvater"},"p":[]},
  {"id":"konurova_evdokiya","x":540,"y":640,"t":"paternal","n":{"ru":"Евдокия Конурова","de":"Jewdokija Konurova"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прапрабабушка","de":"Ururgroßmutter"},"p":[]},
  {"id":"sokov_grigori","x":650,"y":640,"t":"paternal","n":{"ru":"Григорий Соков","de":"Grigori Sokov"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прапрадед","de":"Ururgroßvater"},"p":[]},
  {"id":"sokova_natalya","x":760,"y":640,"t":"paternal","n":{"ru":"Наталья Сокова","de":"Natalja Sokova"},"r":{"ru":"д. Рыбино","de":"Dorf Rybino"},"i":{"ru":"Прапрабабушка","de":"Ururgroßmutter"},"p":[]},

  // ================= МАТЕРИНСКАЯ ВЕТКА =================
  {"id":"busse_evgeny","x":1550,"y":340,"t":"maternal","n":{"ru":"Евгений Дмитриевич Буссе","de":"Ewgeni Busse"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Дед • 05.10.1942 — 20.08.2008","de":"Großvater"},"p":["busse_dmitry","larionova_margarita_p"],"h":false},
  {"id":"busse_dmitry","x":1350,"y":490,"t":"maternal","n":{"ru":"Дмитрий Александрович Буссе","de":"Dmitry Busse"},"r":{"ru":"Ижевск / Казань","de":"Ischewsk / Kasan"},"i":{"ru":"Прадед • 1918 — 22.03.1981","de":"Urgroßvater"},"p":["busse_alexander","zhuravleva_nina"],"h":false},
  {"id":"larionova_margarita_p","x":1650,"y":490,"t":"maternal","n":{"ru":"Маргарита Ларионова","de":"Margarita Larionova"},"r":{"ru":"Казань","de":"Kasan"},"i":{"ru":"Прабабушка","de":"Urgroßmutter"},"p":[]},
  
  {"id":"busse_alexander","x":1250,"y":640,"t":"maternal","n":{"ru":"Александр Иванович Буссе","de":"Alexander Busse"},"r":{"ru":"Казань","de":"Kasan"},"i":{"ru":"Прапрадед • 25.05.1893 — 12.07.1943","de":"Ururgroßvater"},"p":["busse_ivan","vinogradova_praskovya"],"h":false},
  
  {"id":"busse_ivan","x":1150,"y":790,"t":"maternal","n":{"ru":"Иван Антонович (Ян) Буссе","de":"Johann (Jan) Busse"},"r":{"ru":"Томашув-Мазовецки / Казань","de":"Tomaszów / Kasan"},"i":{"ru":"Пра(3)дед • 30.06.1856 — 1934","de":"Ur(3)großvater"},"p":["busse_anton","leman_anna"],"h":false},
  {"id":"vinogradova_praskovya","x":1350,"y":790,"t":"maternal","n":{"ru":"Прасковья Макаровна Виноградова","de":"Praskowja Vinogradova"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Пра(3)бабушка • Род. 1866","de":"Ur(3)großmutter"},"p":["vinogradov_makar"],"h":false},
  {"id":"vinogradov_makar","x":1350,"y":940,"t":"maternal","n":{"ru":"Макар Виноградов","de":"Makar Vinogradov"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Пра(4)дед","de":"Ur(4)großvater"},"p":[]},

  {"id":"busse_anton","x":1050,"y":940,"t":"maternal","n":{"ru":"Антон Буссе","de":"Anton Busse"},"r":{"ru":"Царство Польское","de":"Polen"},"i":{"ru":"Пра(4)дед • Мельник, род. ок. 1833","de":"Ur(4)großvater • Müller"},"p":["busse_samuel","zinke_barbara"],"h":false},
  {"id":"leman_anna","x":1250,"y":940,"t":"maternal","n":{"ru":"Анна Доротея Леман","de":"Anna Dorothea Lehmann"},"r":{"ru":"Пруссия / Польша","de":"Preußen / Polen"},"i":{"ru":"Пра(4)бабушка • Род. ок. 1822","de":"Ur(4)großmutter"},"p":["leman_gottlib","schonknecht_anna"],"h":false},

  {"id":"busse_samuel","x":950,"y":1090,"t":"maternal","n":{"ru":"Самуэль Буссе","de":"Samuel Busse"},"r":{"ru":"Пруссия","de":"Preußen"},"i":{"ru":"Пра(5)дед","de":"Ur(5)großvater"},"p":[]},
  {"id":"zinke_barbara","x":1050,"y":1090,"t":"maternal","n":{"ru":"Барбара Цинке","de":"Barbara Zinke"},"r":{"ru":"Пруссия","de":"Preußen"},"i":{"ru":"Пра(5)бабушка","de":"Ur(5)großmutter"},"p":[]},
  
  {"id":"leman_gottlib","x":1150,"y":1090,"t":"maternal","n":{"ru":"Готтлиб Леман","de":"Gottlieb Lehmann"},"r":{"ru":"Пруссия","de":"Preußen"},"i":{"ru":"Пра(5)дед","de":"Ur(5)großvater"},"p":[]},
  {"id":"schonknecht_anna","x":1250,"y":1090,"t":"maternal","n":{"ru":"Анна Розина Шёнкнехт","de":"Anna Rosina Schönknecht"},"r":{"ru":"Пруссия","de":"Preußen"},"i":{"ru":"Пра(5)бабушка","de":"Ur(5)großmutter"},"p":[]},

  {"id":"zhuravleva_nina","x":1450,"y":640,"t":"maternal","n":{"ru":"Нина Николаевна Журавлёва","de":"Nina Shurawljowa"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Прапрабабушка • 14.08.1894 — 09.06.1965","de":"Ururgroßmutter"},"p":["zhuravlev_nikolai","zhuravleva_maria"],"h":false},
  {"id":"zhuravlev_nikolai","x":1350,"y":790,"t":"maternal","n":{"ru":"Николай Акимович Журавлёв","de":"Nikolai Shurawljow"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Пра(3)дед • 27.11.1863 — 1932","de":"Ur(3)großvater"},"p":["zhuravlev_akim"],"h":false},
  {"id":"zhuravleva_maria","x":1550,"y":790,"t":"maternal","n":{"ru":"Мария Андреевна Журавлёва","de":"Maria Shurawljowa"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Пра(3)бабушка • 1866 — 1942","de":"Ur(3)großmutter"},"p":[]},
  {"id":"zhuravlev_akim","x":1450,"y":940,"t":"maternal","n":{"ru":"Иоаким (Аким) Никитич Журавлев","de":"Ioakim Shurawljow"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Пра(4)дед","de":"Ur(4)großvater"},"p":["zhuravlev_nikita"],"h":false},
  {"id":"zhuravlev_nikita","x":1450,"y":1090,"t":"maternal","n":{"ru":"Никита Филиппович Журавлев","de":"Nikita Shurawljow"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Пра(5)дед • Оружейник","de":"Ur(5)großvater"},"p":["zhuravlev_filipp"],"h":false},
  {"id":"zhuravlev_filipp","x":1450,"y":1240,"t":"maternal","n":{"ru":"Филипп Ларионович Журавлев","de":"Filipp Shurawljow"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Пра(6)дед","de":"Ur(6)großvater"},"p":["zhuravlev_larion"],"h":false},
  {"id":"zhuravlev_larion","x":1450,"y":1390,"t":"maternal","n":{"ru":"Ларион Корнилович Журавлев","de":"Larion Shurawljow"},"r":{"ru":"Ижевск","de":"Ischewsk"},"i":{"ru":"Пра(7)дед","de":"Ur(7)großvater"},"p":["zhuravlev_kornil"],"h":false},
  {"id":"zhuravlev_kornil","x":1450,"y":1540,"t":"maternal","n":{"ru":"Корнил Журавлев","de":"Kornil Shurawljow"},"r":{"ru":"Россия","de":"Russland"},"i":{"ru":"Пра(8)дед (XVIII век)","de":"Ur(8)großvater (18. Jhd.)"},"p":[]},

  {"id":"kuznetsova_zoya","x":1850,"y":340,"t":"maternal","n":{"ru":"Зоя Ивановна Кузнецова","de":"Soja Kuznezova"},"r":{"ru":"д. Гришунята / Казань","de":"Dorf Grischunjata / Kasan"},"i":{"ru":"Бабушка • Род. 16.10.1946","de":"Großmutter • Geb. 1946"},"p":["kuznetsov_ivan","kuznetsova_maria_p"],"h":false},
  {"id":"kuznetsov_ivan","x":1750,"y":490,"t":"maternal","n":{"ru":"Иван Кузнецов","de":"Iwan Kuznezov"},"r":{"ru":"д. Гришунята","de":"Dorf Grischunjata"},"i":{"ru":"Прадед • 10.08.1900 — 20.08.1958","de":"Urgroßvater"},"p":[]},
  {"id":"kuznetsova_maria_p","x":1950,"y":490,"t":"maternal","n":{"ru":"Мария Шалахова (Кузнецова)","de":"Maria Shalachowa"},"r":{"ru":"д. Праздничата","de":"Dorf Prasdnitschata"},"i":{"ru":"Прабабушка • 06.01.1906 — 23.03.1968","de":"Urgroßmutter"},"p":[]}
 ]
};
