# Weather App

## Description

A weather application that displays the current weather based on the user's location. The app features a clean design with a transparent background and uses the OpenWeatherMap API to fetch weather data. It includes features such as temperature, sunrise and sunset times, and weather description.

## Live Link <br>


## Features

- Display current weather based on the user's geolocation.
- Show temperature, sunrise, sunset, and weather description.
- Responsive design with a modern, transparent UI.
- Uses Tailwind CSS for styling and Moment.js for date formatting.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Moment.js
- OpenWeatherMap API

## Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone  https://github.com/Tayyab2344/Weather-app-in-react.git
    cd weather-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Create a `.env` file in the root directory and add your API keys:**

    ```plaintext
    VITE_API_URL=https://api.openweathermap.org/data/2.5
    VITE_API_KEY=your_api_key_here
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. The app will automatically request the user's location.
2. Once the location is detected, it fetches the weather data and displays it.
3. The displayed weather information includes temperature, sunrise and sunset times, weather description, and humidity.

## Styling

The app uses Tailwind CSS for styling. The `Weather` component is designed with a transparent background and a frosted glass effect to stand out against a blue background.

## Deployment

To deploy the app on Netlify:

1. Create a new site from Git repository on Netlify.
2. Connect your repository and follow the deployment instructions.
3. Set up environment variables (`VITE_API_URL` and `VITE_API_KEY`) in the Netlify dashboard.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, please feel free to contact me at [your-email@example.com](mailto:your-email@example.com).
