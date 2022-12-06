import React from "react";
import styles from "./Header.module.scss";
import Image from 'next/image';

function Header() {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo_icon.png"
        alt="Logo Icon"
        width={50}
        height={50}
      />
      <h1 className={styles.text}>Weather App</h1>
    </div>
  );
}

export default Header;