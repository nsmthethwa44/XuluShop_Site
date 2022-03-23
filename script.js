
//when clicling all header image buttons
//apply the following actions
let searchForm = document.querySelector(".searchForm");
let loginForm = document.querySelector(".loginForm");
let searchBtn = document.querySelector(".searchBtn");
let loginBtn = document.querySelector(".loginBtn");
let shopCart = document.querySelector(".shopCart");
let cartBtn = document.querySelector(".cartBtn");

searchBtn.onclick = () =>{
  searchForm.classList.toggle("active");
  loginForm.classList.remove("active");
  shopCart.classList.remove("active");
}
loginBtn.onclick = () =>{
  loginForm.classList.toggle("active");
searchForm.classList.remove("active");
shopCart.classList.remove("active");
}
cartBtn.onclick = () =>{
  shopCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
}
window.onscroll = () =>{
  shopCart.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
}

//products nav must be active when clicked
//and filtering products
let selectors = document.querySelectorAll(".products .container .title .selectors li a .selector");
let products = document.querySelectorAll(".products .container .container_box .box");

Array.from(selectors).forEach((item,index) =>{
  item.onclick = (e) =>{
    let currentBtn = document.querySelector(".products .container .title .selectors li a .selector.active");
    currentBtn.classList.remove("active");
    e.target.classList.add("active");

    e.preventDefault();

    let filter = e.target.dataset.filter;
    products.forEach((item) =>{
      if (filter ==="All"){
        item.style.display = "flex";
      }else if (item.classList.contains(filter)){
        item.style.display = "flex";
      }else{
        item.style.display = "none";
      }
    })
   
  }
})