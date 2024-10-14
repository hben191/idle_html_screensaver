# Idle Screensaver Script
A shell script to launch a screensaver when your system is idle, using Firefox in kiosk mode!

## Features
- Detects system idle time using `xprintidle`
- Opens a custom screensaver in Firefox kiosk mode
- Automatically sets up a dedicated Firefox profile for the screensaver
- Fully customizable with your own HTML content

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/hben191/idle_html_screensaver
   ```

2. You'll need [xprintidle](https://github.com/g0hl1n/xprintidle):
   ```sh
   sudo apt install xprintidle
   ```

3. Make the script executable:
   ```sh
   chmod +x idlecustomscreensaver.sh
   ```

## Environment Variables
To customize the weather display in your screensaver, you'll need to set up a few environment variables in a `.env` file in the project directory.

### Required Variables
- **`WEATHER_API_KEY`**: Your API key for accessing the OpenWeatherMap API. You can create a free account and obtain your API key from [OpenWeatherMap](https://openweathermap.org/appid).
- **`CITY`**: The name of the city for which you want to display the weather. You can set this variable in the `.env` file, or the script will default to "London" if not provided.

## Usage
Simply run the script and it will start monitoring your idle time:
```bash
./idlecustomscreensaver.sh
```

## Customization
### Shell script
- **Idle Time**: Adjust the `IDLE_TIME` variable in the script to change how long the system waits before launching the screensaver.
- **HTML Content**: Replace `index.html` with your own custom screensaver content. You can use any HTML, CSS, and JavaScript to create your perfect screensaver.

The screensaver is just an HTML/CSS page with some JS on the back; I use OpenWeatherMap to display the weather and just tick every second to show the time.

The background is a video I found on Pexels, all credits to [Pixabay](https://www.pexels.com/fr-fr/@pixabay/).

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

> Written in shell script, so no need to ask "What the heck is Bash anyway?" 😏
