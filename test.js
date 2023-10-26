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
    // console.log(typeof(priceTotalFloat));
    
    const purchaseBtn = document.getElementById('purchase-btn')
    if(priceTotalFloat > 0){
        purchaseBtn.classList.remove('btn-disabled')
    }
    
    const applyBtn = document.getElementById('apply-btn');
    if(priceTotalFloat > 200){
        applyBtn.classList.remove('btn-disabled')
    }
    
    applyBtn.addEventListener('click', function(){
        const couponCode = document.getElementById('coupon-code');
        const couponCodeValue = couponCode.value; 
       
       const discountTotal = document.getElementById('find-discount');
    //    const discountTotalStr = discountTotal.innerText;
    //    const discountTotalFloat = 
      const grandTotal = document.getElementById('grand-total');
        if(couponCodeValue == 'SELL200'){
            
            const discountPrice = (totalFixed * 20) / 100;
            discountTotal.innerText = discountPrice;
            // console.log(typeof discountPrice);
             const mainTotal = priceTotalFloat - discountPrice;
        grandTotal.innerText = mainTotal;
        }
       
        // grandTotalFloat = parseFloat(grandTotal)
    })
}

