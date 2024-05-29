// LENISJS

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  // console.log(e)
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

// LENISJS

// HAMBURGER MENU

requestAnimationFrame(raf);
let menu = document.getElementById("mobile-menu");
let hamenu = document.getElementById("hamburger");

let width = innerWidth;

if (width > 950) {
  menu.style.display = "block";
}

hamenu.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

const mediaQuerySm = window.matchMedia("(min-width: 950px)");

if (mediaQuerySm.matches) {
  document.getElementById("mobile-menu").style.display = "none";
}

// HAMBURGER MENU
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".btn-collection");
  const shoppingCart = document.getElementById("unordered-list");
  const counterElement = document.getElementById("counter");
  const totalElement = document.getElementById("total");
  const cartItems = new Map();
  let totalAmount = 0;

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const product = button.closest(".product");
      const productName = product.querySelector(".productTitle").textContent;
      const productPrice = parseFloat(
        product.querySelector(".price").textContent.replace("€", "")
      );
      const productImageNumber = parseInt(
        product
          .querySelector("div[class^='product-image']")
          .classList[0].replace("product-image", "")
      );
      const productKey = `${productName}-${productPrice}-${productImageNumber}`;
      const existingListItem = shoppingCart.querySelector(
        `li[data-key="${productKey}"]`
      );

      if (cartItems.has(productKey)) {
        cartItems.set(productKey, cartItems.get(productKey) + 1);
        const newQuantity = cartItems.get(productKey);
        existingListItem.innerHTML = createCartItemHTML(
          productImageNumber,
          productName,
          newQuantity,
          productKey
        );
      } else {
        cartItems.set(productKey, 1);
        const listItem = document.createElement("li");
        listItem.dataset.key = productKey;
        listItem.innerHTML = createCartItemHTML(
          productImageNumber,
          productName,
          1,
          productKey
        );
        shoppingCart.appendChild(listItem);
      }
      updateCounter();
      updateTotal();
    });
  });

  shoppingCart.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-item")) {
      const productKeyToRemove = event.target.dataset.key;
      cartItems.delete(productKeyToRemove);
      const listItemToRemove = shoppingCart.querySelector(
        `li[data-key="${productKeyToRemove}"]`
      );
      shoppingCart.removeChild(listItemToRemove);
      updateCounter();
      updateTotal();
    }
  });

  function createCartItemHTML(imageNumber, productName, quantity, productKey) {
    return `<img src="./Assets/img/dresses-V2/${imageNumber}.jpg" width="60" height="auto" />${productName} - Aantal: ${quantity} <button class="remove-item" data-key="${productKey}">X</button>`;
  }

  function updateCounter() {
    let totalItems = [...shoppingCart.querySelectorAll("li")].reduce(
      (total, item) => {
        const quantityMatch = item.textContent.match(/Aantal: (\d+)/);
        const quantity = quantityMatch ? parseInt(quantityMatch[1]) : 0;
        return total + quantity;
      },
      0
    );
    counterElement.textContent = totalItems;
  }

  function updateTotal() {
    let newTotal = [...cartItems].reduce((total, [productKey, quantity]) => {
      const productDetails = productKey.split("-");
      const productPrice = parseFloat(productDetails[1]);
      return total + productPrice * quantity;
    }, 0);
    totalAmount = newTotal;
    totalElement.innerHTML = `Totaal: € ${newTotal.toFixed(2)}`;
  }
});

// BARCODE

const h5 = document.getElementById("bar-code");
const randomNumber =
  Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
h5.innerHTML = randomNumber;

const currentdate = new Date();
const datetime = `${currentdate.getDate()}/${
  currentdate.getMonth() + 1
}/${currentdate.getFullYear()} - ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
console.log(datetime);

const dateElement = document.getElementById("date");
dateElement.innerHTML = datetime;
const dateReview = document.getElementById("date-review");
dateReview.innerText = datetime;

function toggleDetails(id) {
  var detailsElement = document.getElementById(id);
  if (detailsElement.style.display === "none") {
    detailsElement.style.display = "block";
  } else {
    detailsElement.style.display = "none";
  }
}

function anim() {
  let heart = document.getElementById("heart");
  if ((heart.style.color = "red")) {
    heart.style.color = "red";
  } else {
    heart.style.color = "lightgray";
  }
}
