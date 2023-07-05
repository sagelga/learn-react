import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // not a React thing
  // constructor will run first, and run once
  constructor(props) {
    // super(props) will call the constructor of the parent class
    super(props);

    // This is the last time we assign this.state with this method. Use setState() instead!
    this.state = { lat: null, errorMessage: "" };
  }

  render() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.errorMessage}</div>;
    }
    return <Spinner message="Please accept location request" />;
  }

  componentDidMount() {
    console.log("componentDidMount");

    // Pull user's Geolocation using navigator.geolocation.getCurrentPosition() but it will takes time to retrieve the location.
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
}

ReactDOM.render(<App />, document.querySelector("#root"));
