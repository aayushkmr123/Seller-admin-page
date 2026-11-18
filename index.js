const productform=document.getElementById("productform");
const sellingprice=document.getElementById("sellingprice");
const productname=document.getElementById("productname");
const productlist=document.getElementById("productlist");
const totalprice=document.getElementById("totalprice");

let products=[];
let total=0;




function handlesubmit(event){
    event.preventDefault();

    const price=Number(sellingprice.value);
    const name=productname.value;

    const product={
        name:name,
        price:price
    };

    products.push(product);

    const li=document.createElement("li");

    li.textContent=`${product.name} - ${product.price}`;

    productlist.appendChild(li);

    total=total+price;
    totalprice.textContent=total;

    productform.reset();

}

productform.addEventListener("submit",handlesubmit);
