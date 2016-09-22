var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function getCart() {
  return cart;
}
var addToCart = function (item) {
  var price = Math.floor((Math.random() * 100) + 0);
  cart.push({item: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
var viewCart = function() {
  var str = "In your cart, you have";
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if(cart.length > 0) {
      for(var i = 0; i < cart.length; i++) {
        for(var item in cart[i]){
		if(i === cart.length-1) {
          str+= ` ${item} at ${cart[i][item]}.`;
        } else {
          str+= ` ${item} at ${cart[i][item]},`;
        }
        }
  }
}
return str;
};
