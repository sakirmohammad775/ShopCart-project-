const loadAllProduct=()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        displayProduct(data)
    })
}

const displayProduct=(products)=>{
    const productContainer=document.getElementById("product-container");
    products.forEach((product)=>{
        console.log(product)
        const div=document.createElement("div")
        div.classList.add("card")
        div.innerHTML=`
        <img class="card-img" src=${product.image} alt"" />
        <h5>${product.title}</h5>
        <p>price:${product.price}</p>
        <p>${product.description.slice(0,50)} </br>
        <button>Details</button>
        <button onclick="handleAddToCart('${product.title},${product.price}')">Add to Cart</button>    
        `;

        productContainer.appendChild(div)
    })
}
const handleAddToCart=(name,price)=>{
    console.log(name,price)
}

loadAllProduct()