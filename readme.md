<h1 align="center"> Quadcopter flight application </h1>

<p align="center"> Authored by Brian Sturgis</p>
<p align="center">Project started on May 7th, 2021</p>


## Description
This application can take control of a small DJI Tello quadcopter allowing a user to give it basic flight commands.  It issues those commands via Node.js and the user interacts with the aircraft via a REACT front end.  The application is a capstone project for the the Epicodus full stack developer program finishing in the spring of 2021.  Its purpose is to demonstrate skills learned during the course as well as be a portfolio piece.

## Software Used
* React.js
* CSS/HTML
* Node.js and UDP4 sockets
* Socket.io WebSockets
* Adobe Photo Shop
* Adobe XD

## Hardware Used
* [DJI Tello Drone](https://amzn.to/2SvzqON)
* [Extra Batteries](https://amzn.to/2SyV70J)
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)

# Using This Application

### Frontend (turns on controls and UI)
1. cd `frontend`
1. `npm install`
1. `npm run dev`

### Backend (connects system to aircraft)
1. cd `backend`
1. `npm install`
2. Go to your systems wifi settings and look for a network named "TELLO" on your aircraft it may be set to an OEM network at name at first.
3. `npm start`