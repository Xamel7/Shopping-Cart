/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);
console.log(state.allProducts)

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i = 0; i < state.allProducts; i++) {
    // console.log([i])
    
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading

  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let selectHTML = document.getElementById("items")
  let selectedProductName = innerHTML.value
  let inputHTML = document.getElementById("quantity")
  let selectedProductQuantity = inputHTML.value
  // TODO: Add a new element to the cartContents div with that information
  let cartDiv = document.getElementById("cartContents");
  let product = undefined;
  for(let i = 0; i < state.allProducts.length; i++){
    if(state.allProducts[i].name === selectedProductName){
      product = state.allProducts[i]
    }
  }
  let previewDiv = document.createElement("div");
  let nameHTML = document.createElement("h3");
  quantityHTML.innerHTML = selectedProductQuantity;
  nameHTML.innerHTML = product.nameHTML;
  previewDiv.append(nameHTML);
  previewDiv.append(quantityHTML);
  cartDiv.append(previewDiv);

  let images = document.createElement('img');
  images.src = product.filePath
  cartDiv.append(images);

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
