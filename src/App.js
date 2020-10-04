import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryChooser from "./components/CountryChooser/CountryChooser";
import { fetchData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const apiData = await fetchData();
    this.setState({ data: apiData });
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards data={this.state.data} />
        <Chart />
        <CountryChooser />
      </div>
    );
  }
}

export default App;
