let quantityCart = parseInt(localStorage.getItem("quantity-cart")) || 0;
let maxQuantity = 10;

document.getElementById("quantity-cart").value = quantityCart;

function popup_add() {
  let inputQuantity = parseInt(document.getElementById("quantity").value);

  if (!inputQuantity || inputQuantity <= 0) {
    inputQuantity = 1;
  }

  if (inputQuantity + quantityCart > maxQuantity) {
    alert("The cart is full");
    return;
  }
  quantityCart += inputQuantity;
  localStorage.setItem("quantity-cart", quantityCart);
  document.getElementById("quantity-cart").value = quantityCart;
  alert("Added " + inputQuantity + " item(s) to the cart");
  document.getElementById("quantity").value = 1;
}

function popup_buy() {
  if (quantityCart === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Purchased\n" + `${quantityCart} item(s) have been Order`);
  quantityCart = 0;
  localStorage.setItem("quantity-cart", quantityCart);
  document.getElementById("quantity-cart").value = quantityCart;
  document.getElementById("quantity").value = 1;
}

function popup_remove() {
  let inputQuantity = parseInt(document.getElementById("quantity").value);

  if (isNaN(inputQuantity) || inputQuantity <= 0 || inputQuantity >= 10) {
    alert("Please enter a valid quantity greater than 0 and less than 10!!!");
    return;
  }

  if (quantityCart <= 0) {
    alert("Don't have any products to remove");
    document.getElementById("quantity").value = 1;
    return;
  }

  if (inputQuantity > quantityCart) {
    alert("You can't remove more item than you have in your cart!!!");
    document.getElementById("quantity").value = 1;
    return;
  }

  quantityCart -= inputQuantity;
  localStorage.setItem("quantity-cart", quantityCart);
  document.getElementById("quantity-cart").value = quantityCart;
  alert(`${inputQuantity}item(s) has been remove`);
  document.getElementById("quantity").value = 1;
}

function popup_clear() {
  if (quantityCart <= 0) {
    alert("Your cart is empty!!");
    return;
  }
  quantityCart = 0;
  localStorage.setItem("quantity-cart", quantityCart);
  document.getElementById("quantity-cart").value = 0;
  document.getElementById("quantity").value = 1;
  alert("Your cart have been clear!!!");
}
