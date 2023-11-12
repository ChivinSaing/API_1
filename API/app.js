
//const url = ("https://fakestoreapi.com/products/15");

const url = ("https://fakestoreapi.com/products?limit=16");
var txt='';
const fetchData = async () => {
    const respone = await fetch(url);
    const data = await respone.json();
    try {
        const respone = await fetch(url);
        const data = await respone.json();
        for (let item of data) {
            txt += `
            <div class="card px-3"  style="width: 15rem;">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    
                    <h3>Price : ${item.price}</h3>
                    <h3>Rate  : ${item.rating['rate']}</h3>
                    <h3>Count : ${item.rating['count']}</h3>
                </div>
            </div>
            `;
        }
        document.getElementsByClassName('container')[0].innerHTML = txt;
    } catch (err) {
        console.log(err);
    }  
}
fetchData();