import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const selectedData = {
      confirmed: confirmed,
      recovered: recovered,
      deaths: deaths,
      lastUpdate: lastUpdate,
    };

    return selectedData;
  } catch (error) {
    console.log("error getting response");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`https://corona-api.com/timeline`);

    const selectedData = data.data.map((dailyData) => ({
      confirmed: dailyData.confirmed,
      recovered: dailyData.recovered,
      deaths: dailyData.deaths,
      date: dailyData.date,
    }));

    return selectedData;
  } catch (error) {
    console.log(error);
  }
};
