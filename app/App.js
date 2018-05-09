import React from "react";
import { WebView } from "react-native";

const source = {
  // REPLACE THIS WITH YOUR SERVER
  uri: "http://10.0.0.20:3001/index.html",
  headers: {
    Authorization: "Basic Zm9vOmJhcg==" // base64 of 'foo:bar'
  }
};

export default class App extends React.Component {
  render() {
    return <WebView source={source} style={{ flex: 1, margin: 30 }} />;
  }
}
