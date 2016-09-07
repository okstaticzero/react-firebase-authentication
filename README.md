# react-firebase-authentication
Boilerplate / build Configuration for authentication and real-time database using React and Firebase.
Demo: http://react-fire-auth.zerostatic.com/

## Features
- Authentication and real-time database using Firebase
- Sign in using Email, Facebook or Google, with ability to add more social logins.
- Protected and unprotected Routes with React Router
- Lost/reset password functionality
- Login/Logout Functionality
- Validates email client side
- ES6 syntax

## Instructions:
- npm install
- Add your Firebase app configurations to file: src/firebase/Firebase.js
- For facebook login, follow instructions here: https://firebase.google.com/docs/auth/web/facebook-login
- Run: npm start and open http://localhost:3000
- To create production build: npm run build

## Built using:
- create-react-app build tool: https://github.com/facebookincubator/create-react-app
- Firebase: http://firebase.google.com
- React: https://facebook.github.io/react/
