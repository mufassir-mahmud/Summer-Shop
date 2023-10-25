let itemTotalPrice = 0;
function handleClick(target){
    const itemName = target.childNodes[5].innerText;
    // console.log(itemName);
    const li = document.createElement('li');
    li.classList.add('m-4', 'text-xl', 'font-bold')
    li.innerText = itemName;
    const newItemAdd = document.getElementById('selected-item');
    newItemAdd.style.listStyleType = "number";
    
    newItemAdd.appendChild(li)


    // const price = document.getElementById('price');
    // console.log(typeof(price));
    const price = target.childNodes[7].childNodes[0].innerText;
    // console.log(price);
    itemTotalPrice = parseFloat(itemTotalPrice) +  parseFloat(price);
    const totalFixed = itemTotalPrice.toFixed(2)
    
    
    const findTotal = document.getElementById('find-total');
    findTotal.innerText = totalFixed;
    const priceTotal = document.getElementById('find-total');
    const priceTotalStr = priceTotal.innerText;
    const priceTotalFloat = parseFloat(priceTotalStr);
    console.log(typeof(priceTotalFloat));
    if(priceTotalFloat == 0){
        document.getElementById('purchase-btn').disabled 
    }
}
