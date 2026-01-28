function getUser(){
  return JSON.parse(localStorage.getItem("user") || "null");
}

function logout(){
  localStorage.removeItem("user");
  location.reload();
}

function getCart(){
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function updateCartCount(){
  const cart = getCart();
  const total = cart.reduce((s,i)=> s + (i.qty || 1), 0);
  const el = document.getElementById("cartCount");
  if(el) el.textContent = total;
}

function renderAuth(){
  const el = document.getElementById("authArea");
  if(!el) return;

  const user = getUser();

  if(user){
    el.innerHTML = `
      <span style="font-weight:900;">${user.email}</span>
      <a class="member-link" href="#" onclick="logout(); return false;">Çıkış</a>
      <a class="cart-link" href="cart.html">Sepet (<span id="cartCount">0</span>)</a>
    `;
  }else{
    el.innerHTML = `
      <a class="member-link" href="login.html">Giriş Yap</a>
      <a class="member-link" href="uye.html">Üye Ol</a>
      <a class="cart-link" href="cart.html">Sepet (<span id="cartCount">0</span>)</a>
    `;
  }

  updateCartCount();
}

document.addEventListener("DOMContentLoaded", renderAuth);