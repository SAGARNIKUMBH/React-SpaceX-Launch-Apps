import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Components/Header";
import CardList from "./Components/CardList";
import YearTableList from "./Components/YearTableList";
import Footer from "./Components/Footer";

function App() {
  const [launchesData, setLaunchesData] = useState([]);
  const [limit, setLimit] = useState(100);

  const [allDataSelected, setAllDataSelected] = useState(true);

  useEffect(() => {
    console.log("CALLING");
    if (allDataSelected === true) {
      const URL = `https://api.spacexdata.com/v3/launches?limit=${limit}`;
      axios
        .get(URL)
        .then((response) => {
          setLaunchesData(response.data);
        })
        .catch((err) => console.log(err));
    }
  }, [allDataSelected]);

  return (
    <div>
      <Header />

      <div className="container">
        <div className="rocketDahboardContainer">
          <div className="filters__continer">
            <YearTableList
              allDataSelected={allDataSelected}
              setAllDataSelected={setAllDataSelected}
              limit={limit}
              setLaunchesData={setLaunchesData}
            />
          </div>
          <div className="rocketCardList">
            <CardList launchesData={launchesData} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
