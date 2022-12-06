import React from "react";
import styles from "./Currentdata.module.scss";

function Currentdata({data}) {
  return (
    <div className={styles.section}>
      <div className={styles.location}>
        {data.name}, {data.sys.country}
      </div>
    </div>
  );
}

export default Currentdata;