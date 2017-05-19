var cartItems = 0;
var myButton = $(".buy-button1");
var myCartLink = $(".cartlink");
var myHeader1 = $(".header2-head1");
var myHeader2 = $(".header2-head2");
var myHeader3 = $(".header2-head3");
var myHead2 = $(".head2");
var myHead3 = $(".head3");

displayCart();
myButton.click(function(){
    myButton.text("Added To Cart!");
    incrementCart();
    setTimeout(function(){myButton.text("Buy Now!");}, 1000);
});

function displayCart(){
  var cartText = "Shopping Cart (" + cartItems + ")";
  myCartLink.text(cartText);
}

function incrementCart(){
  cartItems = cartItems + 1;
  displayCart();
}

myHeader1.click(function(){
    myHeader1.css("color", "#AF2307");
    myHeader1.css("border-bottom", "4px solid #FBC1C2");
    myHeader2.css("color", "#FF512F");
    myHeader2.css("border-bottom", "none");
    myHeader3.css("color", "#FF512F");
    myHeader3.css("border-bottom", "none");
    myHead2.text("Exciting Topic");
    myHead3.text("Content Here");
});

myHeader2.click(function(){
    myHeader2.css("color", "#AF2307");
    myHeader2.css("border-bottom", "4px solid #FBC1C2");
    myHeader1.css("color", "#FF512F");
    myHeader1.css("border-bottom", "none");
    myHeader3.css("color", "#FF512F");
    myHeader3.css("border-bottom", "none");
    myHead2.text("Find Your Shoe Size & Fit");
    myHead3.text("Content Here");
});

myHeader3.click(function(){
    myHeader3.css("color", "#AF2307");
    myHeader3.css("border-bottom", "4px solid #FBC1C2");
    myHeader1.css("color", "#FF512F");
    myHeader1.css("border-bottom", "none");
    myHeader2.css("color", "#FF512F");
    myHeader2.css("border-bottom", "none");
    myHead2.text("What Our Customers Are Saying!");
    myHead3.text("Don't take our word for it!  Read what our customers are saying about this product. We guarantee you won't be disappointed with your purchase.");
});
