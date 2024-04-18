const assert = require('assert');

const { Given, When, Then } = require('@cucumber/cucumber');

module.exports = {

};

// Scenario: Search for a Product

Given(
    "the customer is on the homepage of the Zalando online store",
    function () {
      console.log("You are on the Zalando homepage");
    }
  );
  
  Given("the customer sees the search field in the header", function () {
    console.log("You see the search field in the header");
  });
  
  When("the customer enters {string} in the search field", function (product) {
    this.product = product;
    console.log(`You entered the ${this.product} in the search field`);
  });
  
  When("the customer clicks the search button", function () {
    console.log("You confirmed your choice");
  });
  
  Then(
    "the customer should see the search results with cards displaying a preview of the {string} and a set of essential options",
    function (product) {
      this.product = product;
      console.log(`You see a list of ${this.product}'s items`);
    }
  );
  
  // Scenario: Add a Product to the Cart
  
  Given(
    "the customer is on the page of the online store Zalando where cards with a preview of products are displayed, grouped by a certain characteristic",
    function () {
      console.log("You see an item list of previously chosen product");
    }
  );
  
  When(
    "the customer clicks the {string} on the product they liked",
    function (cartIcon) {
      assert.strictEqual("basket icon", cartIcon);
    }
  );
  
  Then("the product is added to the cart", function () {
    console.log("Product was added to the cart");
  });
  
  // Scenario: Purchase a Product
  
  Given("the minimum of one product has been added to the cart", function () {
    console.log("You have one or more items in your cart");
  });
  
  Given("the customer has navigated to the cart", function () {
    console.log("You've been navigated to the cart");
  });
  
  When(
    "the customer clicks the {string} button",
    function (cartReceiptSubmitOrder) {
      assert.strictEqual("Order", cartReceiptSubmitOrder);
    }
  );
  
  Then("the customer is taken to the checkout page", function () {
    console.log("You've been navigated to the checkout page");
  });
  
  // Scenario: Complete the Checkout Process
  
  Given(
    "the customer is on the checkout page of the Zalando",
    function () {
      console.log("You are on the checkout page of the Zalando store");
    }
  );
  
  Given("the customer has at least one product in the cart", function () {
    console.log("You have one or more items in your cart");
  });
  
  When("the customer enters the necessary shipping information", function () {
    console.log("You successfully entered the necessary information");
  });
  
  When("the customer clicks the button {string}", function (button) {
    assert.strictEqual("I confirm the order", button);
  });
  
  Then("the order should be successfully placed", function () {
    console.log("Your order successfully placed");
  });
  
  When("the customer is redirected to the confirmation page", function () {
    console.log("Your redirected to the confirmation page");
  });
  
  Then(
    "the customer should see the confirmation of a successful order placement",
    function () {
      console.log("Thank You for shopping!");
    }
  );
  
  Then("the customer should receive an order ID", function () {
    console.log("Thank You for shopping!");
  });