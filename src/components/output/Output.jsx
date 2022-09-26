import React, { useState } from "react";
import styles from "./output.module.css";

import { Howl } from "howler";

const Output = ({ data }) => {
  const callMySound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });
    sound.play();
  };

  return (
    <div className={styles.outputContainer}>
      <div className={styles.outputlayout}>
        {data?.map((item) => {
          return (
            <div className={styles.flexcontrol}>
              <h1
              
               style={{
                color: "white",
                padding: "2rem",
                fontSize: "1rem",
                marginBottom: "1rem",
              }}
              >
                {item.word}
              </h1>
              <div
                className={styles.soundclicker}
                onClick={() => {
                  callMySound(item.phonetics[0].audio);
                }}
              >
                click me
              </div>
              <h1
               className={styles.resheader}
                
              >
                Meaning: {item.meanings[0].definitions[0].definition}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
