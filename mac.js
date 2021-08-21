  //memory
  document.getElementById('primary-button').addEventListener('click', function(){
     const firstField = document.getElementById('input-quantity');
     const firstFieldText = firstField.innerText;
     const firstValue = parseFloat(firstFieldText);
     firstField.innerText = 0;
  });
  
  document.getElementById('memory-button').addEventListener('click',function(){
   const inputField = document.getElementById('input-quantity');
   const inputQuantityText = inputField.innerText;
   const quantityValue = parseFloat(inputQuantityText);
   inputField.innerText = 180;
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

document.getElementById('first-delivery-button').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText;
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 0;
});

document.getElementById('last-delivery-button').addEventListener('click', function(){
   const deliveryCost = document.getElementById('delivery-cost');
   const deliveryCostText = deliveryCost.innerText;
   const deliveryValue = parseFloat(deliveryCostText);
   deliveryCost.innerText = 20;
});