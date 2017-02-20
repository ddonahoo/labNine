var newDiv = document.createElement ('div');
var p = document.createElement ('p');
var groceryList = {
cart: [
{item: "Milk", price: 3.99},
{item: "Yogurt", price: 2.50},
{item: "Apples", price: 3.15},
]};

var total = 0;

function printCart(){
  for (i=0; i<groceryList.cart.length; i++){
  newDiv.innerHTML+= (groceryList.cart[i].item + ": $"   +   groceryList.cart[i].price +"<br>");
  };

  document.body.appendChild(newDiv);

  var total = 0;
  for (var i=0; i<groceryList.cart.length; i++) {
  total+= groceryList.cart[i].price;
  p.innerHTML=("Total: $" +total);
  };

  document.body.appendChild (p);
}

function myFunction() {
  var name  = document.getElementById ("name").value;
  console.log(name);
  var price = document.getElementById ("price").value *1;
  var newItems = {item:name, price:price};
  groceryList.cart.push(newItems);
newDiv.innerHTML="";
printCart();

}
