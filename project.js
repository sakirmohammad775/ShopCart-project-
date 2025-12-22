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
        <img src=${product.image} alt"" />
        <h5>h</h5>
        <p></p>
        <button>Details</button>
        <button>Add to Cart</button>    
        `;

        productContainer.appendChild(div)
    })
}
loadAllProduct()