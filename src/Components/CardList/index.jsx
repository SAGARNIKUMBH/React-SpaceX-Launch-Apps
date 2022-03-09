import React from "react";

import styles from "./CardList.module.css";

const CardList = ({ launchesData }) => {
  return (
    <div className={styles.rocketCardList}>
      {launchesData.map((launchValue, index) => {
        return (
          <Card
            key={`${launchValue.mission_name}-index`}
            rocketData={launchValue}
          />
        );
      })}
    </div>
  );
};

const Card = ({ rocketData }) => {
  const cores = rocketData.rocket?.first_stage?.cores;
  const landingSucess =
    cores && cores?.length ? cores[cores.length - 1]?.land_success : "";

  return (
    <div className={styles.rocketCard}>
      {/* card header */}
      <div className={styles.rocketCardImageHeader}>
        <img
          className={styles.rocketCardImage}
          src={rocketData.links?.mission_patch_small}
          alt={rocketData.mission_name}
        />
      </div>
      <div className={styles.rocketCardBody}>
        <div className={styles.rocketTitle}>
          <h4>
            {rocketData?.mission_name}
            <span>#{rocketData?.flight_number}</span>
          </h4>
        </div>

        {/* mission ids */}
        <div className={styles.missionIds}>
          <h5>Mission Ids</h5>
          <ul>
            {rocketData?.mission_id?.map((missionId) => {
              return <li key={missionId}>{missionId}</li>;
            })}
          </ul>
        </div>

        {/* launch year  */}
        <div className={styles.rocketDescription}>
          <h5>Launch Year</h5>:<p>{rocketData.launch_year}</p>
        </div>

        <div className={styles.rocketDescription}>
          <h5>Successful Launch</h5>:
          <p>{rocketData.launch_success?.toString()}</p>
        </div>

        <div className={styles.rocketDescription}>
          <h5>Successful Landings</h5>:<p>{landingSucess?.toString()}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
