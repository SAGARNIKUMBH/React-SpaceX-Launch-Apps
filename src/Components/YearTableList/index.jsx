import React, { useEffect, useState } from "react";
import axios from "axios";

import FilterButton from "../FilterButton";

import styles from "./YearTableList.module.css";

const dates = [
  "ALL",
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
  
];

const YearTableList = ({
  limit,
  allDataSelected,
  setLaunchesData,
  setAllDataSelected,
  
}) => {
  const [launchYear, setLaunchYear] = useState(null);
  const [launchSuccess, setLaunchSuccess] = useState(null);
  const [landSuccess, setLandSuccess] = useState(null);

  const handleLaunchYearFilter = (selectedLaunchYear) => {
    if (allDataSelected) setAllDataSelected(false);
    setLaunchYear(selectedLaunchYear);
  };

  const handleLaunchSuccessFilter = (selectedLaunchSuccess) => {
    if (allDataSelected) setAllDataSelected(false);
    if (launchSuccess === selectedLaunchSuccess) {
      setLaunchSuccess(null);
      return;
    }
    setLaunchSuccess(selectedLaunchSuccess);
  };

  const handleLandSuccessFilter = (selectedLandSuccess) => {
    if (allDataSelected) setAllDataSelected(false);
    if (landSuccess === selectedLandSuccess) {
      setLandSuccess(null);
      return;
    }
    setLandSuccess(selectedLandSuccess);
  };

  const handleAllDataSelected = () => {
    if (launchYear !== null) setLaunchYear(null);
    if (launchSuccess !== null) setLaunchSuccess(null);
    if (landSuccess !== null) setLandSuccess(null);
    setAllDataSelected(true);
  };

  useEffect(() => {
    console.log("All Api ,land,launch, year called");
    if (launchYear !== null || launchSuccess !== null || landSuccess !== null) {
      // call API
      const filterURL = generateFilterURL(
        limit,
        launchYear,
        landSuccess,
        launchSuccess
      );

      console.log("filterURL", filterURL);

      axios.get(filterURL).then((response) => {
        setLaunchesData(response.data);
      });
    }
  }, [launchYear,launchSuccess,landSuccess]);

  return (
    <div className={styles.filterList}>
      <h4 className={styles.filterTitle}>Filters</h4>

      

      <div className={styles.filterListContainer}>
        <div>
          <span className={styles.launchYearTitle}>Launch Year</span>

          <ul className={styles.yearListFilter}>
            {dates.map((date, index) => {
              return (
                <li className={styles.yearListItem} key={`${date}-${index}`}>
                  <FilterButton
                    isActive={
                      launchYear === date ||
                      (date === "ALL" && allDataSelected === true)
                    }
                    onClick={() =>
                      date === "ALL"
                        ? handleAllDataSelected(date)
                        : handleLaunchYearFilter(date)
                    }
                  >
                    {date}
                  </FilterButton>
                </li>
              );
            })}
          </ul>
        </div>

        

        <div style={{ marginTop: 15 }}>
          <span className={styles.launchYearTitle}>SuccessFul Launch</span>

          <ul className={styles.yearListFilter}>
            <li className={styles.yearListItem}>
              <FilterButton
                isActive={launchSuccess === true}
                onClick={() => handleLaunchSuccessFilter(true)}
              >
                True
              </FilterButton>
            </li>

            <li className={styles.yearListItem}>
              <FilterButton
                isActive={launchSuccess === false}
                onClick={() => handleLaunchSuccessFilter(false)}
              >
                False
              </FilterButton>
            </li>
          </ul>
          </div>

        <div style={{ marginTop: 15 }}>
          <span className={styles.launchYearTitle}>SuccessFul Landing</span>

          <ul className={styles.yearListFilter}>
            <li className={styles.yearListItem}>
              <FilterButton
                isActive={landSuccess === true}
                onClick={() => handleLandSuccessFilter(true)}
              >
                True
              </FilterButton>
            </li>

            <li className={styles.yearListItem}>
              <FilterButton
                isActive={landSuccess === false}
                onClick={() => handleLandSuccessFilter(false)}
              >
                False
              </FilterButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YearTableList;

function generateFilterURL(limit, launchYear, launchSuccess, landSuccess) {
  const baseURL = `https://api.spacexdata.com/v3/launches?limit=${limit}`;
  const url = new URL(baseURL);
  if (launchYear !== null) {
    url.searchParams.append("launch_year", launchYear);
  }
  if (launchSuccess !== null) {
    url.searchParams.append("launch_success", launchSuccess);
  }
  if (landSuccess !== null) {
    url.searchParams.append("land_success", landSuccess);
  }
  return url.toString();
}
