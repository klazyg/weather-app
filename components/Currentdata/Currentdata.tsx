import styles from "./Currentdata.module.scss";

type CurrentdataProps = {
  data: {
    name: string;
    sys: {
      country: string;
    }
  }
}

const Currentdata: React.FC<CurrentdataProps> = ({ data }) => {
  return (
    <div className={styles.section}>
      <div className={styles.location}>
        {data.name}, {data.sys.country}
      </div>
    </div>
  );
}

export default Currentdata;