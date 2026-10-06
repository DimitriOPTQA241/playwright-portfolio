Feature: Product search on LDLC

  As a user
  I want to search for a product on LDLC
  So that I can view its title and price

  Scenario: Search and extract an existing product
    Given I open the LDLC homepage
    When I search for the product "<keyword>"
    Then at least 3 results are displayed
    When I click on the first result
    Then the product title is displayed
    And the product price is displayed
    And the data is saved in a JSON file and Excel file

    Examples:
    |keyword|
    |RTX|