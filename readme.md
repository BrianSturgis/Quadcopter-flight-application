<h1 align="center"> Quadcopter flight application </h1>

<p align="center"> Authored by Brian Sturgis</p>
<p align="center">Project started on May 7th, 2021</p>

## UI
<img src="img/UI.png" width="auto" height="auto" >

## Description
This application can take control of a small DJI Tello quadcopter allowing a user to give it basic flight commands.  It issues those commands via Node.js and the user interacts with the aircraft via a REACT front end.  The application is a capstone project for the the Epicodus full stack developer program finishing in the spring of 2021.  Its purpose is to demonstrate skills learned during the course as well as be a portfolio project.

## Known bugs
- This application has functionality not working such as the drones state parsed into the dom as well as its tilt view not connecting to art work to show the air crafts position.
- The application currently only has basic controls and the six special moves at the bottom of the ui do not work.


## Work Log
```
- March 14th researched drones and coding on the internet via numerous websites and you tube videos for.
- March 17th purchased the drone I decided to use as well as accessories.
- March 23rd received the aircraft and its kit and started updating it and flying it to see what its limitations and best conditions for flight were.
- April 16th began drawing wire frames for application and built a look book doc of UI ideas I liked and periodically went back the doc over the month.
- May 7th built a few variations of the component diagram in Photo Shop.
- May 14th built A new project to establish the projects git profile as well as README,  Updated aircraft version, built go() function to test connectivity.
- May 17th built the backend and placed the basic buttons into a UI.
- May 18th worked with front end and added a "command" function as well as a battery state function.  Spent the afternoon making styling changes to UI.
- May 19th spent the morning cleaning up the entire project and choosing images to add to the readme.  Spent the afternoon and night working on the presentation and updating the Discord channel.
```

## Before Using This Application

### `npm install`
This app uses node.js. If you do not already have node.js installed, visit https://nodejs.org/en/download/ and install.
After installing node..
- navigate to the root directory of the cloned repo in a as Command Prompt or Git Bash.
- Type in "npm install".
- Type in "npm run build".

### `npm run build`
Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Using The Application
### Frontend (turns on controls and UI)
1. cd `frontend`
2. `npm install`
3. `npm run dev`

### Backend (connects system to aircraft)
1. cd `backend`
2. `npm install`
3. Go to your systems wifi settings and look for a network named "TELLO" on your aircraft it may be set to an OEM network at name at first.
4. `npm start`

### aircraft manual
[Tello manual](https://dl-cdn.ryzerobotics.com/downloads/Tello/20180404/Tello_User_Manual_V1.2_EN.pdf)

[Tello SDK Manual](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)

## Hardware Used
* [DJI Tello Drone](https://amzn.to/2SvzqON)
* [Extra Batteries](https://amzn.to/2SyV70J)
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)

## Software Used
- [VS Code](https://code.visualstudio.com/download)
- Git & GitHub
- ES6 JavaScript
- JSX
- React Framework v17.0
- npm
- node js
- next js
- webpack v5.11.1
- node.js v15.8.0
- Adobe Photo Shop
- Adobe XD
- Wacom Cintiq

### License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..

Copyright (c) 2020 **Brian Micheal Sturgis**