Feature: Search and Purchase Products on Zalando Online store
  The customer wants to search for and purchase a product on the Zalando online store

  @search
  Scenario Outline: Search for a Product
    Given the customer is on the homepage of the Zalando online store
    And the customer sees the search field in the header
    When the customer enters "<product>" in the search field
    And the customer clicks the search button
    Then the customer should see the search results with cards displaying a preview of the "<product>" and a set of essential options

  Examples:
    | product          |
    | Casual Dress     |
    | Denim Jacket     |
    | Socks            |

  @add_to_cart
  Scenario: Add a Product to the Cart
    Given the customer is on the page of the online store Zalando where cards with a preview of products are displayed, grouped by a certain characteristic
    When the customer clicks the "basket icon" on the product they liked
    Then the product is added to the cart

  @purchase
  Scenario: Purchase a Product
    Given the minimum of one product has been added to the cart
    And the customer has navigated to the cart
    When the customer clicks the "Order" button
    Then the customer is taken to the checkout page

  @checkout
  Scenario: Complete the Checkout Process
    Given the customer is on the checkout page of the Zalando 
    And the customer has at least one product in the cart
    When the customer enters the necessary shipping information
    And the customer clicks the button "I confirm the order"
    Then the order should be successfully placed

    When the customer is redirected to the confirmation page
    Then the customer should see the confirmation of a successful order placement
    And the customer should receive an order ID