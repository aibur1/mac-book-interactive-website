  
  
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
   
 
});


  document.getElementById('last-button').addEventListener('click', function(){
     
     const firstField = document.getElementById('memory-cost');
     const firstFieldText = firstField.innerText;
     const firstValue = parseFloat(firstFieldText);
     firstField.innerText = 180;
 
  });
  


//storage
document.getElementById('first-storage').addEventListener('click', function(){
   const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 0;
});

document.getElementById('middle-storage').addEventListener('click', function(){
   const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 100;
 
});

document.getElementById('last-storage').addEventListener('click', function(){
   const storageMemory = document.getElementById('storage-cost');
   const storageMemoryText = storageMemory.innerText;
   const memoryCost = parseFloat(storageMemoryText);
   storageMemory.innerText = 180;
});



//delivery

document.getElementById('first-delivery').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText; 
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 0;
});

document.getElementById('last-delivery').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText;
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 20;
});


 


