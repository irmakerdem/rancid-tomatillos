# Rancid Tomatillos

## Table of Contents
- [Introduction](#introduction)
- [Learning Goals](#learning-goals)
- [Technologies](#technologies)
- [Set Up](#set-up)
- [Features](#features)
- [Organizational Resources](#organizational-resources)
- [Future Features](#future-features)
- [Reflection](#reflection)
- [Contributors](#contributors)
- [Project Specifications](#project-specifications)

### Introduction
Rancid Tomatillos is a mash-up between IMDB, Rotten Tomatoes, and any movie database that comes to mind, but on a much smaller scale! A user is able to view all movies in card format on the homepage; clicking on a movie card or selecting alphabetically by movie title from the dropdown directs to another page with additional movie details. On a given film's movie page, you can see a movie's main poster, backdrop image, and a few other little details about the selected film 👻. Click around and explore all 40 films! 🎬

### Learning Goals
- Gain competency with React fundamentals
- Learn how to test React components & asynchronous JS
- Practice refactoring
- Create a multi-page UX using Router

### Technologies
- JavaScript
- CSS
- API fetch
- React
- React Router
- Cypress

### Set Up
1. Clone this [repository](https://github.com/CorCanavan/rancid-tomatillos).
2. `cd` into the directory.
3. Run `npm install`.
4. Start the server by running `npm start` and view at http://localhost:3000/.
5. To run tests, first install Cypress with `npm i -D cypress` then run `npm run cypress`.
6. Enter `control + c` to stop the server at any time.

### Features

![Travel Tracker gif](https://media.giphy.com/media/vhA6AzFigFfxUQcfg9/giphy.gif)

<img width="600" alt="login-image" src="https://user-images.githubusercontent.com/90080658/173740603-4651abfd-fce4-4d1a-8cc1-5833fd922bf8.png">

- User sees movie cards 🂡 on page load
- User can click a movie's image 📸 to be directed to a page with its details that has a backdrop 🌠 image
- User can also use the dropdown ⤵️  on the homepage to find a movie 🔤 alphabetically
- User can click the back arrow ⬅ on browser OR arrow on bottom right to return to home 🏠 page
- User sees a "loading" ⏳ message if their download speed is too slow 🐢
- User sees an error ⛔️ message if there is an error with the network request

### Organizational Resources
- [GitHub Projects](https://github.com/CorCanavan/rancid-tomatillos/projects/2)
- [Figma](https://www.figma.com/file/Y3abnRjSmXF8JVpcYPHKDb/Rancid-Tomatillos-Wireframe) 

### Future Features
- User can view trailers from YouTube
- User can log in to add and delete their own ratings
- Movie details page displays budget, revenue, and runtime
- User can filtered movies by genre, release date, average rating, and/or runtime
- Website title allows user to go back to home page
- Use another API to show list of main actors per movie

### Reflection
- React makes it so much faster to spin up an app! There was definitely a learning curve to figuring out how components should be structured and how data should be passed around - making a diagram before actually writing any code was incredibly helpful.  
- Team had difficulties making MovieDisplay a functional component and opted to make it a class component.
- When refactoring with React Router, team struggled initially when the conditional rendering using a ternary had to be discarded along with any event listeners. 
- When creating the Dropdown component, team learned it was necessary to create a copy of the movies array being passed down as props in order to use the sort method on the titles for the dropdown options without affecting state being held in App.
- Team utilized a Determine the Relationship (DTR) document detailing team collaboration expectations and stayed true to what was agreed upon for entire duration of the project! ❤️
- Moving the fetch calls ☎️ from the component files to their own apiCalls file did not prove to be as difficult 🧠 as originally thought! 💪
- Cypress 📝 testing was very exciting to perform for the first time! Although it was easy to maneuver around the E2E window/UI, some of the methods were tough to utilize (e.g. find, select) specifically with the dropdown. Initially, team had a hard time testing for existence of images.
- React syntax was a bit of an adjustment overall but team very quickly got used to it!

### Contributors
- [Corinne Canavan](https://www.linkedin.com/in/corinnecanavan/)
- [Irmak Erdem](https://www.linkedin.com/in/irmakerdem/)

### Project Specifications
- Project specs can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html).