using System;
using Northwind.Web.Models;

namespace Northwind.Web.Services
{
	public interface IWeatherForecastService 
	{
		WeatherForecast ForecastFor(DateTime dateTime);

		string SummaryFor(int temperature);
	}


	public class WeatherForecastService : IWeatherForecastService
	{
		private static readonly string[] Summaries = new[]
		{
				"Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		public WeatherForecast ForecastFor(DateTime dateTime)
		{
			var rng = new Random();
			var temperatureC = rng.Next(-20, 55);
			if (dateTime < DateTime.Now)
            {
				throw new ArgumentException("date didnt work");
            }
			return new WeatherForecast
			{
					Date = dateTime,

					TemperatureC = temperatureC, 
					Summary = SummaryFor(temperatureC)
	
			};
		}

		public string SummaryFor(int temperature)
		{
			if (temperature > 21 || temperature < 25)
			{
				return Summaries[4];
			}
			else if (temperature > 15 || temperature < 20)
			{
				return Summaries[3];
			}
			else if (temperature > 50 || temperature < 10)
			{
				return Summaries[2];
			}
			else if (temperature > 10 || temperature < 0)
			{
				return Summaries[1];
			}
			else if (temperature > 0 || temperature < - 10)
			{
				return Summaries[0];
			}
			else if (temperature > 30 || temperature < 35)
			{
				return Summaries[6];
			}
			else if (temperature > 35 || temperature < 40)
			{
				return Summaries[7];
			}
			else if (temperature > 40 || temperature < 11)
			{
				return Summaries[8];
			}
			else if (temperature > 25 || temperature < 30)
			{
				return Summaries[5];
			}
			else
			{
				return Summaries[9];
			}
		}
	}

}