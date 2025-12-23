const loadAllProduct = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProduct(data);
    });
};

const displayProduct = (products) => {
  const productContainer = document.getElementById("product-container");
  products.forEach((product) => {
    console.log(product);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img class="card-img" src=${product.image} alt"" />
        <h5>${product.title}</h5>
        <p>price:${product.price}</p>
        <p>${product.description.slice(0, 50)} </br>
        <button onclick="singleProduct('${product.id}')">Details</button>
        <button onclick="handleAddToCart('${product.title.slice(0, 12)}','${
      product.price
    }')">Add to Cart</button>    
        `;

    productContainer.appendChild(div);
  });
};

const handleAddToCart = (name, price) => {
  const cartCount = document.getElementById("count").innerText;
  let convertedCount = parseInt(cartCount);
  convertedCount = convertedCount + 1;
  document.getElementById("count").innerText = convertedCount;

  const container = document.getElementById("cart-main-container");
  const div = document.createElement("div");
  div.classList.add("card-info");
  div.innerHTML = `
    <div class='list'>
    <p>${name}</p>
    <h3 class="price">${price}</h3>
    </div>
    `;
  container.appendChild(div);
  updateTotal();
};

const updateTotal = () => {
  const allPrice = document.getElementsByClassName("price");
  let count = 0;
  for (const element of allPrice) {
    count = count + parseFloat(element.innerText);
  }
  document.getElementById("total").innerText = count.toFixed(2);
};

const singleProduct = (id) => {
  console.log(id);
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

loadAllProduct();
