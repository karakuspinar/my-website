console.log("car-ui.js yüklendi ✅", CAR_DATA);
// js/car-ui.js
// Sayfada brand/model/year select varsa otomatik doldurur.
// Seçimleri localStorage -> carFilters içine kaydeder.

function $(id){ return document.getElementById(id); }

function fillSelect(selectEl, items, placeholder){
  if(!selectEl) return;
  selectEl.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = placeholder;
  selectEl.appendChild(opt0);

  items.forEach(v=>{
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    selectEl.appendChild(opt);
  });
}

function getCarFilters(){
  return JSON.parse(localStorage.getItem("carFilters") || "null");
}

function setCarFilters(obj){
  localStorage.setItem("carFilters", JSON.stringify(obj));
}

function initCarSelectors(){
  const brandEl = $("brand");
  const modelEl = $("model");
  const yearEl  = $("year");

  // Bu sayfada select yoksa çık
  if(!brandEl || !modelEl || !yearEl) return;

  // Marka doldur
  const brands = Object.keys(CAR_DATA || {}).sort((a,b)=> a.localeCompare(b, "tr"));
  fillSelect(brandEl, brands, "Marka");

  function onBrandChange(){
    const brand = brandEl.value;
    const models = brand && CAR_DATA[brand] ? Object.keys(CAR_DATA[brand]).sort((a,b)=> a.localeCompare(b, "tr")) : [];
    fillSelect(modelEl, models, "Model");
    fillSelect(yearEl, [], "Model Yılı / Kasa");
    save();
  }

  function onModelChange(){
    const brand = brandEl.value;
    const model = modelEl.value;
    const years =
      (brand && model && CAR_DATA[brand] && CAR_DATA[brand][model]) ? CAR_DATA[brand][model] : [];
    fillSelect(yearEl, years, "Model Yılı / Kasa");
    save();
  }

  function save(){
    setCarFilters({
      brand: brandEl.value || "",
      model: modelEl.value || "",
      year: yearEl.value || ""
    });
  }

  brandEl.addEventListener("change", onBrandChange);
  modelEl.addEventListener("change", onModelChange);
  yearEl.addEventListener("change", save);

  // Daha önce seçim varsa geri yükle
  const saved = getCarFilters();
  if(saved && saved.brand){
    brandEl.value = saved.brand;
    onBrandChange();

    if(saved.model){
      modelEl.value = saved.model;
      onModelChange();

      if(saved.year){
        yearEl.value = saved.year;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", initCarSelectors);