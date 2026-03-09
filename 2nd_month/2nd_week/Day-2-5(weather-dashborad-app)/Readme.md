1. Project Overview
   This is a single-page, responsive Weather Dashboard built entirely with vanilla HTML, CSS, and JavaScript (no frameworks or libraries except Font Awesome icons via CDN).
   The application allows users to:

- Search for current weather by city name
- Use device geolocation to get weather for their current location
- View real-time weather information fetched from the OpenWeatherMap API
- Switch between Celsius (°C) and Fahrenheit (°F)
- See dynamic background gradients based on weather conditions
- Experience smooth animations and a modern glassmorphism UI

The project demonstrates core frontend skills learned during Weeks 3–8:

- Semantic HTML structure
- Advanced CSS (Flexbox, Grid, media queries, animations, glassmorphism)
- JavaScript fundamentals (variables, functions, conditionals, loops, DOM manipulation)
- Event handling (form submit, clicks, geolocation)
- Fetch API + async/await
- LocalStorage for persistence
- Error handling and loading states

2. Features
   Core Features

City search via input form
"My Location" button using browser Geolocation API
Displays: city name & country, current date, weather icon, temperature, description, feels-like, humidity, wind speed
°C / °F unit toggle with active state styling
Last searched city saved and auto-loaded on page refresh (via localStorage)

Visual & UX Enhancements

Responsive design: mobile-first, adapts beautifully from phones (≈400px) to desktops (1200px+)
Dynamic background gradients that change according to weather (sunny orange, rainy blue, cloudy gray, etc.)
Glassmorphism card with blur backdrop, subtle border, and shadow
Animations:
Card entrance (pop + fade)
Weather icon floating effect
Temperature count-up animation
Smooth spinner rotation during loading

Hover effects on buttons and detail cards
Error messages with shake animation (auto-disappear after 5 seconds)

Technical Highlights

Uses OpenWeatherMap Current Weather API (free tier)
Async fetch with proper try/catch/finally
Loading state with centered spinner
Clean separation: HTML structure → CSS styling → JS logic
Safe DOM access with optional chaining and checks

3. Technologies Used

HTML5 – Semantic elements, forms, accessibility basics
CSS3 – Flexbox, Grid, media queries, animations (@keyframes), transitions, backdrop-filter (glass effect), custom properties
JavaScript (ES6+) – async/await, fetch, template literals, event listeners, localStorage, geolocation API
External Resources
OpenWeatherMap API (current weather endpoint)
Google Fonts (Inter family)
Font Awesome 6 (icons for feels-like, humidity, wind)

4. How to Run the Project

Open the folder containing three files:
index.html
style.css
script.js

Double-click index.html or open it with a browser (Firefox/Chrome recommended)
The app loads the last searched city automatically (defaults to Lahore if first time)
Type a city name (e.g. Karachi, London) and press search or Enter
Or click the 📍 button to use current location

Note: The OpenWeatherMap API key is already included in script.js. It should work immediately (activated after signup delay). 5. Folder Structure
textweather-dashboard/
├── index.html # Main page structure
├── style.css # All styling + responsiveness + animations
└── script.js # Logic: API calls, DOM updates, events 6. Challenges Faced & Solutions

API key activation delay → Waited 1–2 hours after signup; used fake data temporarily to test UI
Loading spinner not hiding → Added explicit hideLoading() calls in success path + ensured .hidden class uses !important
Responsive layout → Used mobile-first media queries (@600px and @900px breakpoints)
Geolocation permission → Added fallback error message if user denies or browser doesn't support

7. Future Improvements (Nice-to-Haves)

5-day forecast view (using different OpenWeather endpoint)
Search history dropdown
Dark/light mode toggle
Better icon handling for night/day variants
Temperature change animation (green/red arrows)

8. Learning Outcomes
   This project helped solidify:

Building complete interactive UIs from scratch
Working with third-party APIs safely
Creating responsive, animated, modern-looking interfaces
Debugging network requests (Network tab), console errors, and timing issues
Writing clean, maintainable code with good separation of concerns
