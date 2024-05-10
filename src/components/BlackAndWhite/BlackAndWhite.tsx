import React, { useState } from "react";
import styles from "./BlackAndWhite.module.css"

function Modes2() {
  const [blackAndWhiteMode, setBlackAndWhiteMode] = useState(false);

  const toggleBlackAndWhiteMode = () => {
    setBlackAndWhiteMode(prevMode => !prevMode);
    
    document.body.classList.toggle(styles.bodyBlackAndWhiteMode);
  };

  return (
    <div className={blackAndWhiteMode ? styles.blackAndWhiteMode : ""}>
      <button className={styles.button62} onClick={toggleBlackAndWhiteMode}>
        Toggle Black & White Mode
      </button>
     
    </div>
  );
}

export default Modes2;
