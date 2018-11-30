# weather-app
Created with CodeSandbox
+ I used [Create React App](https://github.com/facebook/create-react-app) for bootstrapping the project.
- I used [unfetch](https://www.npmjs.com/package/unfetch#unfetch) to fetch
+ As chrome doesn't let to access geo location on page load and only request info in response to a user gesture, I added a button.
- The design pattern is “Controllable” React components. So `WeatherWidget` is a parent component and editor and widget are children.


## What's missing

+ unit testing 😎 I know it's terrible but I didn't have much time.
I can add on weekend.
- changing the weather icon based on the weather

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>




