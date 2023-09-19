const productCardTemplate = function (product) {
  return `
  <div class="product" data-id=${product.id}>
    <div class="product-image-container">
        <img
        class="product-image"
        src="${product.imageSource}"
        />
    </div>
    <div class="product-info-container">
        <div class="product-title">${product.title}</div>
        <div class="product-description">
        ${product.description}
        </div>
        <div class="product-price">
        <span class="product-currency">$</span
        ><span class="product-price-value">${product.price}</span>
        </div>
    </div>
    <div>
        <button class="button-product button-add">Add to Cart</button>
        <button class="button-product button-remove">
        Remove from Cart
        </button>
  </div>
</div>
`;
};

const cardsGroup = document.querySelector('.products-list');
let cartItems = [];

// console.log(cardsGroup);

let products = new Array();

async function catchProductList() {
  const response = await fetch('../data/products.json');
  const productsObj = await response.json();

  // console.log(productsObj);

  // Object.assign(products, productsObj);
  products = [...productsObj];
}

async function populateCatalog() {
  await catchProductList();

  console.log('Length: ' + products.length);
  console.table(products);

  for (let i = 0; i < products.length; i++) {
    cardsGroup.insertAdjacentHTML(
      'afterbegin',
      productCardTemplate(products[i])
    );
  }
}

let addToCartButtons = [];

function handleAddToCart() {
  const productId = this.parentElement.parentElement.dataset.id;
  console.log(productId);

  let productToPush = products.find((product) => product.id == productId);
  //   console.log(productToPush.title);
  cartItems.push(productToPush);

  console.table(cartItems);
}

async function init() {
  await populateCatalog();

  addToCartButtons = document.getElementsByClassName(
    'button-product button-add'
  );

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', handleAddToCart);
  }
}

init();

// addToCartButtons.forEach((btn) =>
//   btn.addEventListener('click', handleAddToCart)
// );
