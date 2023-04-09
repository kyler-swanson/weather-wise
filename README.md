# WeatherWise

WeatherWise is a web application that provides current weather conditions and a 7-day forecast for any location in the world. It uses the OpenWeatherMap API to gather weather data and displays it in an easy-to-read format.

This repository contains the source code for the WeatherWise web application.

## Live Demo

http://weather-wise-theta.vercel.app/

## Technologies

- Next.js
- React (TypeScript)
- OpenWeatherMap API
- Geolocation API

## Getting Started

To run WeatherWise locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Install the required dependencies by running the following command:

```sh
npm install
```

Create a copy of the `.env.example` file named `.env.local` file in the root directory of the project and add your OpenWeatherMap API key as follows:

```sh
OPENWEATHER_API_KEY=<your API key here>
```

Start the development server by running the following command:

```sh
npm run dev
```

This will launch the WeatherWise application in your default browser.

## Usage

To use WeatherWise, simply enter a location in the search bar and press the "Search" button. The application will retrieve the current weather conditions and a 7-day forecast for that location and display it on the screen.

## Contributing

Contributions to WeatherWise are welcome! If you find a bug or have an idea for a new feature, please create an issue or submit a pull request.

## License

WeatherWise is licensed under the MIT license. See LICENSE for more information.
