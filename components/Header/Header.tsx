import styles from "./Header.module.scss";
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.position}>
      <div className={styles.logo}>
        <Image
          src="/logo_icon.png"
          alt="Logo Icon"
          width={50}
          height={50}
        />
        <h1 className={styles.text}>Weather App</h1>
      </div>
    </header>
  );
}

export default Header;