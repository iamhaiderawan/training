Day 1 Objective

Project planning

- Decide on the project idea
- Define main features
- Sketch basic layout / structure
- List technologies and tools to be used
- Identify potential challenges

What I Did Today (Project Planning Phase)

1. Reviewed training progress

- Completed HTML basics (Week 3)
- Completed CSS basics including Flexbox & Box Model (Week 4)
- Completed JavaScript fundamentals, DOM manipulation, events, form validation, ES6 features (Weeks 5–7)
  → Ready to build an interactive frontend project using only vanilla HTML + CSS + JS

2. Brainstormed project ideas
   Received several projects (To-Do List, Personal Portfolio, Calculator, Quiz Game, Weather Dashboard).
   Evaluated each based on:

- How well it uses the skills learned (HTML structure, CSS styling, JS logic & DOM, events, fetch API)
- Visual appeal for demo/presentation
- Real-world usefulness
- Feasibility within 5 days (planning → HTML → CSS → JS → polish/demo)

3. Final project choiceSelected: Weather DashboardReason for choosing this project:

- Allows full use of recently learned skills:
  - Form input + submit event
  - Fetch API + async/await
  - Dynamic DOM updates (temperature, icon, description, etc.)
  - Responsive design with media queries
  - Conditional styling (weather-based backgrounds)
  - LocalStorage for remembering last city
  - Geolocation API (bonus real-device feature)

- Looks modern and impressive (animations, glassmorphism, dynamic colors)
- Feels like a “real” mini-application
- Good opportunity to handle loading states, errors, and API interaction
- Not too simple (like calculator) and not too complex (no backend needed)

4. High-Level Features Planned

- Search weather by city name
- Get weather using current location (geolocation button)
- Display:
  - City name + country
  - Current date
  - Weather icon (from OpenWeatherMap)
  - Temperature (big number)
  - Weather description
  - Feels like, humidity, wind speed

- Switch between °C and °F
- Loading spinner while fetching data
- Error message for invalid city or network issues
- Save last searched city (auto-load on refresh)
- Responsive layout (mobile + desktop)
- Dynamic background color/gradient based on weather condition
- Smooth CSS animations (card appear, icon float, temp pop-in)

5. Technologies & Tools Decided

- HTML5 (semantic structure, form, img)
- CSS3 (Flexbox, Grid for layout, media queries, animations @keyframes, glassmorphism with backdrop-filter)
- JavaScript ES6+ (fetch, async/await, DOM manipulation, events, localStorage, geolocation)
- External API: OpenWeatherMap (free tier – Current Weather Data)
- Fonts: Inter (Google Fonts)
- Icons: Font Awesome 6 (via CDN)
- No frameworks / no build tools (pure vanilla)

6. Basic Layout Sketch (described – drawn on paper/phone)

- Top: Header with title “Weather Dashboard” + °C/°F toggle buttons
- Middle: Search bar (input + search button + location button)
- Loading indicator (centered spinner + text)
- Main weather card (glass style):
  - City & date
  - Large weather icon
  - Big temperature + unit
  - Description
  - 3-column grid: Feels like | Humidity | Wind

- Footer: “Powered by OpenWeatherMap”

7. Potential Challenges Identified (and initial thoughts)

- API key activation delay → Plan to sign up early and wait / use fake data for UI testing
- Handling fetch errors & loading states → Use try/catch/finally, show/hide loading div
- Responsive design → Mobile-first approach with breakpoints at ~600px and ~900px
- Geolocation permission → Add fallback message if denied
- Dynamic background changes → Use body className based on weather.main
- Animations performance → Keep them simple (no heavy transforms)

8. Next Steps (Days 2–5 Plan)

- Day 2: Build HTML structure + basic semantic markup
- Day 3: Apply CSS styling, responsiveness, glass effect, animations
- Day 4: Write JavaScript – API fetch, DOM updates, events, unit toggle, localStorage
- Day 5: Add polish (error handling, geolocation, final testing), prepare demo
