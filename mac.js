  
  
  /*  function macbookCustomize(storage, value){
     const firstField = document.getElementById(storage,value);
     const firstFieldText = firstField.innerText;
     const firstValue = parseFloat(firstFieldText);
     firstValue.innerText = 180;
  }  */
  
  
  
  
  //memory
  document.getElementById('first-button').addEventListener('click',function(){
   const inputField = document.getElementById('memory-cost');
   const inputQuantityText = inputField.innerText;
   const quantityValue = parseFloat(inputQuantityText);
   inputField.innerText = 0;
   calculate()
   
 
});


  document.getElementById('last-button').addEventListener('click', function(){
     
     const firstField = document.getElementById('memory-cost');
     const firstFieldText = firstField.innerText;
     const firstValue = parseFloat(firstFieldText);
     firstField.innerText = 180;
     calculate() 
    
 
  });
  


//storage
document.getElementById('first-storage').addEventListener('click', function(){
  const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 0; 
   calculate()
});

document.getElementById('middle-storage').addEventListener('click', function(){
   const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 100; 
   calculate()
 
});

document.getElementById('last-storage').addEventListener('click', function(){
   const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 180;
   calculate()
});



//delivery

document.getElementById('first-delivery').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText; 
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 0;
   calculate()
});

document.getElementById('last-delivery').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText;
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 20;
   calculate()
});

// calculate total cost
 function calculate(){
   
   const a = parseInt(document.getElementById('memory-cost').innerText);
   const b = parseInt(document.getElementById('storage-cost').innerText);
   const c = parseInt(document.getElementById('delivery-cost').innerText);
   const totalCost = (document.getElementById('total-price').innerText = 1299 + a + b + c);

   
   let totalPrice = parseInt(document.getElementById('total-price').innerText);
   const total = document.getElementById('final-total');
   const totalText = total.innerText;
   total.innerText = totalPrice;

} ;

//promo code

document.getElementById('promo-button').addEventListener('click', function(){
  const promoField = document.getElementById('promo-input');
  //get promo input
  const promoCode = promoField.value;
  if(promoCode == 'stevekaku'){
   let final = document.getElementById('final-total');
   let totalPrice = document.getElementById('total-price').innerText;
   let discountPrice = totalPrice - (totalPrice / 100) * 20;
   final.innerText = discountPrice;
   promoField.value = '';
  }
});





 


