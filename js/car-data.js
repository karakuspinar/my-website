// js/car-data.js
// Marka -> Model -> Yıl/Kasa listesi
// Not: "Tüm Kasalar" ve "2012+" gibi ifadeler aynen kullanılır.

window.CAR_DATA = {
  "Audi": {
    "HB": ["2003-2012"]
  },

  "BMW": {
    "E36": ["Tüm Kasalar"]
  },

  "Chery": {
    "Tiggo": ["Tüm Kasalar"]
  },

  "Chevrolet": {
    "Aveo SD": ["2006-2011", "2012+"],
    "Aveo HB": ["2006-2011", "2012+"],
    "Cruze HB": ["Tüm Kasalar"],
    "Cruze SD": ["Tüm Kasalar"],
    "Lacetti HB": ["Tüm Kasalar"],
    "Lacetti SD": ["Tüm Kasalar"],
    "Lacetti STW": ["Tüm Kasalar"],
    "Captiva": ["Tüm Kasalar"],
    "Kalos HB": ["Tüm Kasalar"],
    "Kalos SD": ["Tüm Kasalar"]
  },

  "Citroen": {
    "C3": ["2011-2015", "2015-2021"],
    "C4": ["2004-2011", "2012+", "2021+"],
    "C4 Grand Picasso": ["2008-2012"],
    "C5": ["2007+"],
    "Saxo": ["Tüm Kasalar"],
    "Nemo": ["Tüm Kasalar"],
    "Berlingo": ["2008-2018", "2018+"],
    "Elysee": ["Tüm Kasalar"]
  },

  "Dacia": {
    "Logan SD": ["2004-2012"],
    "Logan STW": ["2006-2012"],
    "Sandero": ["2007-2012"],
    "Stepway": ["2013-2020", "2021-2023"],
    "Duster": ["2010-2017", "2017+"],
    "Dokker": ["Tüm Kasalar"],
    "Lodgy": ["Tüm Kasalar"],
    "Logan MCV": ["2013+"]
  },

  "Fiat": {
    "Serçe": ["Tüm Kasalar"],
    "Doblo 1": ["2000-2009", "2010-2022"],
    "Albea SD": ["Tüm Kasalar"],
    "Siena": ["Tüm Kasalar"],
    "Palio": ["Tüm Kasalar"],
    "Linea": ["Tüm Kasalar"],
    "Tempra": ["Tüm Kasalar"],
    "Tipo": ["Tüm Kasalar"],
    "Tofaş": ["Tüm Kasalar"],
    "Şahin": ["Tüm Kasalar"],
    "Doğan": ["Tüm Kasalar"],
    "Kartal": ["Tüm Kasalar"],
    "Hacı Murat": ["Tüm Kasalar"],
    "Egea HB": ["Tüm Kasalar"],
    "Egea SD": ["Tüm Kasalar"],
    "Cross": ["Tüm Kasalar"],
    "Punto": ["2006+"],
    "Brava": ["Tüm Kasalar"],
    "Bravo": ["2007+"],
    "Uno": ["Tüm Kasalar"],
    "Marea SD": ["Tüm Kasalar"],
    "Marea HB": ["Tüm Kasalar"],
    "500L": ["Tüm Kasalar"],
    "Fiorino": ["2008+"],
    "Ducato": ["2006-2017"],
    "Idea": ["Tüm Kasalar"]
  },

  "Ford": {
    "Fiesta": ["1990-2002", "2002-2009", "2018+"],
    "Focus 1 SD": ["1998-2004"],
    "Focus 1 HB": ["1998-2004"],
    "Focus 1 STW": ["2005+"],
    "Focus 2 SD": ["2005-2011"],
    "Focus 2 HB": ["2005-2011"],
    "Focus 3 SD": ["2011-2015"],
    "Focus 3 HB": ["2011-2015"],
    "Focus 4 HB": ["2015-2018"],
    "Focus 4 SD": ["2015-2018"],
    "Mondeo": ["2001-2007", "2008-2013"],
    "Transit": ["1995-2001", "2003-2013"],
    "Escort SD": ["Tüm Kasalar"],
    "Escort HB": ["Tüm Kasalar"],
    "Escort STW": ["Tüm Kasalar"],
    "Fusion": ["2002-2012"],
    "Ranger": ["1999-2012", "2013-2020"],
    "B-Max": ["Tüm Kasalar"],
    "C-Max": ["2003-2010", "2011-2022"],
    "Taunus HB": ["Tüm Kasalar"],
    "Taunus SD": ["Tüm Kasalar"],
    "Kuga": ["2008-2012", "2013-2019"],
    "Connect": ["2002-2013", "2014+"],
    "Courier": ["2014-2022"]
  },

  "Honda": {
    "Jazz": ["2002-2008", "2009-2015"],
    "Civic SD": ["1992-1995", "1996-2001", "2001-2007", "2007-2012", "2012-2015", "2016+"],
    "CR-V": ["1996-2002", "2002-2007", "2007-2012", "2012-2017"],
    "City": ["2006-2009", "2009-2011", "2021-2023"],
    "HR-V": ["1999-2006"],
    "Accord": ["2003-2008", "2008-2012"]
  },

  // ⚠️ Senin listende bu kısım HONDA altında yazılmış ama modeller HYUNDAI.
  "Hyundai": {
    "Accent (Yumurta Kasa)": ["1995-2000"],
    "Admira": ["2003-2006"],
    "Accent Era": ["2005-2011"],
    "Accent Blue": ["2011+"],
    "Bayon": ["Tüm Kasalar"],
    "Getz": ["Tüm Kasalar"],
    "i10": ["2013-2019"],
    "i20": ["2008-2011", "2012-2014", "2015-2020", "2021-2022"],
    "i30": ["2007-2012", "2012-2017"],
    "ix35": ["Tüm Kasalar"],
    "Elantra": ["1996-2001", "2002-2007", "2010-2015", "2016-2020", "2021+"],
    "Starex": ["Tüm Kasalar"],
    "Tucson": ["2005-2010", "2015-2020", "2022+"]
  },

  "Kia": {
    "Clarus": ["Tüm Kasalar"],
    "Sephia": ["1990-1997"],
    "Sorento": ["2002-2010", "2011-2014"],
    "Rio STW": ["2003-2005"],
    "Rio SD": ["2003-2005", "2011-2017"],
    "Rio HB": ["2003-2011", "2012-2017", "2016-2021"],
    "Ceed HB": ["2012-2017"],
    "Sportage": ["2005-2010", "2011-2015"],
    "Cerato": ["2004-2009", "2016-2020"],
    "Bongo": ["2006+"],
    "Picanto": ["Eski Kasa"]
  },

  "Lada": {
    "Samara HB": ["Tüm Kasalar"],
    "Samara SD": ["Tüm Kasalar"],
    "Vega HB": ["Tüm Kasalar"],
    "Vega SD": ["Tüm Kasalar"],
    "Vega STW": ["Tüm Kasalar"]
  },

  "Mazda": {
    "2": ["2009-2013"],
    "3 HB": ["2009-2014"],
    "3 SD": ["2003-2009", "2009-2014", "2015-2019"],
    "6 SD": ["2002-2007"],
    "626 SD": ["1992-1997"],
    "626 HB": ["1992-1997", "1998-2002"],
    "323 SD": ["1990-1996", "1999-2003"]
  },

  "Mercedes": {
    "190E": ["Tüm Kasalar"],
    "C Serisi": ["1993-1999", "2000-2007"],
    "200E": ["1984-1995"],
    "Sprinter": ["1999-2007", "2007-2019"]
  },

  "Mitsubishi": {
    "L200": ["1992-1999", "2007-2014"],
    "ASX": ["Tüm Kasalar"],
    "Lancer": ["2003-2008", "2009-2015"],
    "L300": ["1988-2018"]
  },

  "Nissan": {
    "Juke": ["2010-2018"],
    "Qashqai": ["2007-2013", "2014-2021"],
    "Skystar": ["Tüm Kasalar"],
    "Navara": ["2006-2015"],
    "Micra": ["2003-2010", "2011-2018"],
    "Almera HB": ["Tüm Kasalar"],
    "Almera SD": ["Tüm Kasalar"],
    "Primera": ["1995-2002", "2002-2007"]
  },

  "Opel": {
    "Corsa B": ["1993-2000"],
    "Corsa C": ["2000-2006"],
    "Corsa D": ["2007-2014"],
    "Corsa E": ["2007-2014"],
    "Corsa F": ["2020-2023"],

    "Astra F SD": ["1991-1997"],
    "Astra F HB": ["1991-1997"],
    "Astra F STW": ["1991-1997"],

    "Astra G SD": ["1998-2009"],
    "Astra G HB": ["1998-2009"],

    "Astra H HB": ["2004-2015"],
    "Astra H SD": ["2008-2017"],

    "Astra J SD": ["Tüm Kasalar"],
    "Astra J HB": ["Tüm Kasalar"],

    "Astra K HB": ["2015-2020"],

    "Vectra A": ["Tüm Kasalar"],
    "Vectra B": ["1995-2002"],
    "Vectra C": ["2002-2018"],

    "Zafira": ["2000-2011"],
    "Meriva": ["2003-2009"],
    "Mokka": ["2012-2020", "2021+"],
    "Insignia": ["Tüm Kasalar"],
    "Vivaro": ["Tüm Kasalar"],
    "Combo C": ["2001-2011", "2001-2015"]
  },

  "Peugeot": {
    "106": ["Tüm Kasalar"],
    "206 HB": ["Tüm Kasalar"],
    "206 SD": ["Tüm Kasalar"],
    "206 STW": ["Tüm Kasalar"],
    "207 HB": ["Tüm Kasalar"],
    "208": ["2010-2020", "2021-2023"],
    "301": ["Tüm Kasalar"],
    "306 SD": ["Tüm Kasalar"],
    "306 HB": ["Tüm Kasalar"],
    "307 HB": ["Tüm Kasalar"],
    "307 STW": ["Tüm Kasalar"],
    "308": ["2007-2013", "2013+"],
    "405 SD": ["1990-1995"],
    "406": ["Tüm Kasalar"],
    "407": ["Tüm Kasalar"],
    "508": ["2010-2018"],
    "2008": ["2013-2019", "2019-2022"],
    "3008": ["2016+"],
    "Bipper": ["2008+"],
    "Rifter": ["2019+"],
    "Partner": ["1998-2007"]
  },

  "Proton": {
    "415": ["Tüm Kasalar"],
    "416": ["Tüm Kasalar"]
  },

  "Renault": {
    "Clio 1 HB": ["1993-1998"],

    "Clio 2 SD": ["1999-2008"],
    "Clio 2 HB": ["1999-2008"],

    "Clio 3 HB": ["2008-2012"],
    "Clio 3 SD": ["2008-2012"],

    "Clio 4 HB": ["2012-2018"],
    "Clio 4 STW": ["2012-2018"],

    "Clio 5 HB": ["2019-2021"],

    "Symbol": ["2008-2012", "2013+"],

    "Megane 1 HB": ["1996-2004"],
    "Megane 1 SD": ["1996-2004"],
    "Megane 1 STW": ["1996-2004"],

    "Megane 2 SD": ["2004-2010"],
    "Megane 2 HB": ["2004-2010"],

    "Megane 3 HB": ["2010-2016"],
    "Megane 3 STW": ["2010-2016"],

    "Megane 4 Sedan": ["2016-2021"],

    "Fluence": ["Tüm Kasalar"],
    "R19 Europa": ["Tüm Kasalar"],
    "R21": ["Tüm Kasalar"],

    "Laguna 1": ["1993-2002"],
    "Laguna 2": ["2003-2007"],
    "Laguna 3": ["2008-2012"],

    "Kangoo 2": ["2008-2021"],
    "Scenic 1": ["1998-2003"],
    "Scenic 2": ["2004-2009"],
    "Scenic 3": ["2009-2015"],

    "Captur": ["2013-2019"],
    "Master": ["2010+"],
    "Trafic": ["Tüm Kasalar"],
    "Twingo": ["Tüm Kasalar"]
  },

  "Seat": {
    "Ibiza HB": ["2003-2009", "2009-2017"],
    "Ibiza STW": ["2009-2017"],
    "Leon": ["1998-2005", "2005-2012", "2013+"],
    "Cordoba": ["1997-2002", "2003-2009"],
    "Toledo": ["1998-2005", "2013-2017"],
    "Altea": ["2004-2015"]
  },

  "Skoda": {
    "Fabia SD": ["1999-2009"],
    "Fabia HB": ["1999-2009", "2009-2014", "2015-2020"],
    "Octavia SD": ["1996-2004", "2005-2012", "2013+"],
    "Favorit": ["Tüm Kasalar"],
    "Formen": ["Tüm Kasalar"],
    "Felicia": ["Tüm Kasalar"],
    "Yeti": ["Tüm Kasalar"],
    "Scala": ["2020-2021"],
    "Roomster": ["Tüm Kasalar"],
    "Rapid": ["2013-2019"]
  },

  "Suzuki": {
    "Vitara": ["2006-2015", "2016-2021"],
    "Swift": ["1990-2003", "2006-2017"]
  },

  "Tata": {
    "Indiga": ["Tüm Kasalar"],
    "Indigo": ["Tüm Kasalar"],
    "Vista": ["Tüm Kasalar"],
    "Marina": ["Tüm Kasalar"],
    "Telcoline": ["Tüm Kasalar"]
  },

  "Toyota": {
    "Corolla HB": ["1993-1998", "1999-2001", "2007-2013", "2019-2023"],
    "Corolla SD": ["1993-1998", "1999-2001", "2007-2013", "2019-2023"],
    "Verso": ["2004-2009", "2010-2017"],
    "Auris": ["2007-2012", "2013-2015"],
    "Yaris": ["2005-2012", "2012-2018"],
    "Avensis": ["1997-2002", "2003-2009", "2009-2018"],
    "Hilux": ["2004-2015"],
    "RAV4": ["1999-2005", "2006-2012"],
    "Carina": ["1993+"],
    "Corona": ["1993+"]
  },

  "Volkswagen": {
    "Polo Classic SD": ["1996-2001"],
    "Polo HB": ["1994-2001", "2002-2009", "2009-2017", "2018+"],
    "Bora": ["Tüm Kasalar"],
    "Golf 2": ["Tüm Kasalar"],
    "Golf 3": ["Tüm Kasalar"],
    "Golf 4 HB": ["1998-2004"],
    "Golf 5": ["2005-2009"],
    "Golf 6": ["2010-2013"],
    "Jetta": ["1984-1994", "2006-2010", "2011+"],
    "Passat 3B": ["1996-2005"],
    "Passat B5": ["1996-2005"],
    "Passat 3C": ["2005-2010"],
    "Passat B6": ["2005-2010"],
    "Caddy": ["Tüm Kasalar"],
    "Transporter T4": ["1990-2004"],
    "Transporter T5": ["2004-2014"],
    "Transporter T6": ["Tüm Kasalar"],
    "Transporter T7": ["Tüm Kasalar"],
    "Crafter": ["2004-2006", "2007-2019"],
    "Amarok": ["Tüm Kasalar"],
    "Tiguan": ["Tüm Kasalar"]
  },

  "Volvo": {
    "S40": ["1997-2004", "2004-2012"],
    "S60": ["2001-2010"],
    "S80": ["1999-2006"]
  }
};