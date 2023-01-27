import { useState } from "react";
import styles from "./Input.module.scss";
import { BiSearchAlt } from "react-icons/bi";

type InputProps = {
  setCity: (city: string) => void;
}

const Input: React.FC<InputProps> = ({ setCity }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    if (query !== "") setCity(query);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.input}>
        <input
          type="search"
          placeholder="search city..."
          className={styles.text}
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.icons}>
          <BiSearchAlt
            size={50}
            className={styles.icon}
            onClick={handleSearchClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;