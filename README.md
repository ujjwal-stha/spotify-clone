# Spotify Clone

This is a Spotify Clone Built using React and dependencies like spotify-web-api-js

# Live Demo 🚀🚀🚀

<a href="https://spotify-clone-78fae.web.app/">Click Here</a> for Live Demo

# Technologies

- React using hooks and React Context API
- spotify-web-api-js
- material-ui

# Platform

- Firebase

# Setup

To clone and run this app, you'll need git and Node js also installed on your PC.

Clone this repository

- $ git clone

Go into the repository

- $ cd spotify-clone

Install dependencies
$ npm install

Go to Spotify's Developers Portal and login to your dashboard

- https://developer.spotify.com/dashboard/

- On your dashboard create a new application and provide necessary details. Next open project overview.

- Under edit settings, you can provide the redirect URL of the site after spotify authorizes the user.
  Usually this is the URL of the hosted site(Firebase). You can enter http://localhost:3000/ initially as it is the local server of the react application.

- Now Copy the CLient ID provided on the dashboard.

- after that go to spotify-clone\src\spotify.js

- In the spotify.js file add client Id
  const clientId = ""; (Add your Client Id key from spotify for developers) and redirect Uri as
  const redirectUri = "http://localhost:3000/" (for Testing locally on the computer)

Run app (dev version on port 3000)

- $ npm start

Credit
I would especially like to thank Clever Programmer Team for this project and <a href="https://www.youtube.com/watch?v=pnkuI8KXW_8&t=4017s">Click Here</a> to check out the video
