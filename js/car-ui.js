// TÜM RESİMLER images/ KLASÖRÜNDEN GELİR

const PRODUCTS = [
  { title: "Cam", image: "images/cam.jpg" },
  { title: "Difüzör", image: "images/difuzor.jpg" },
  { title: "Kolçak", image: "images/kolcak.jpg" },
  { title: "Krom Ürünler", image: "images/krom.jpg" },
  { title: "Kaput", image: "images/kaput.jpg" },
  { title: "Paspas", image: "images/paspas.jpg" },
  { title: "Koltuk", image: "images/koltuk.jpg" },
  { title: "Marşpiyel", image: "images/marspiyel.jpg" },
  { title: "Tavan", image: "images/tavan.jpg" },
  { title: "Ayna", image: "images/ayna.jpg" },
  { title: "Jant", image: "images/jant.jpg" },
  { title: "Tozluk", image: "images/tozluk.jpg" },
  { title: "Telefon Tutucu", image: "images/telefon.jpg" }
];

const CATEGORIES = PRODUCTS;


// 🔥 JSON TEST
fetch("./products.json")
  .then(res => res.json())
  .then(data => {
    console.log("JSON GELDI:", data);
  })

  .catch(err => console.log("JSON HATA:", err));
