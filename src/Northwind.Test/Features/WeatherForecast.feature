Feature: Get Weather Forecast
	 To get the weather forecast 

Scenario: Get the weather forecast tomorrow
	Given the weather forecast 
	When I get the forecast for tomorrow
	Then the forecast temperature F should be greater than 0

Scenario: Cannot forecast the past
	Given the weather forecast
	When I get the forecast for yesterday
	Then the service should throw an argument exception

Scenario: 70 F weather forecast is mild
	Given the weather forecast
	When I get the forecast for tomorrow
	Then the temperature 70 F should say mild