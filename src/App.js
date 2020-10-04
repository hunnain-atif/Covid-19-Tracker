import React from "react";

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryChooser from "./components/CountryChooser/CountryChooser";
import styles from "./App.module.css";

class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Chart />
        <CountryChooser />
      </div>
    );
  }
}

export default App;
