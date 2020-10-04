import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryChooser from "./components/CountryChooser/CountryChooser";
import { fetchData } from "./api";
import styles from "./App.module.css";
import img from "./images/photo.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const apiData = await fetchData();
    this.setState({ data: apiData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    return (
      <div className={styles.container}>
        <img className={styles.img} src={img} alt="Covid-19" />
        <Cards data={this.state.data} />
        <CountryChooser handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
