Feature: Increment the counter by any number
    This feature lets a user increment the counter by clicking on all the buttons.

Scenario: Basic increment any number scenario
    Given I am on the counter2 page
    When I click on the increment button 21 times
    Then The counter should show "0"