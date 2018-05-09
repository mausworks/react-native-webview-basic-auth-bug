This project outlines a bug with Basic Authentication and the React Native WebView.

## Running the server
The server runs on node + express.

To run the server, run `npm install`, then `npm start` from the `/server` directory. 
Make sure it can be reached via your local network.

## Running the app
The app is bootstrapped from "create-react-native-app".

To run the app, first replace the source URI in `/app/App.js` with the IP-address your server runs on. 
Then run `npm install` followed by `npm start` from the `/app` directory.
