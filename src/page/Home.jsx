import React, { useState } from "react";

// import styles of css
import styles from "./home.module.css";

function Home() {
  // Make a usestate for change theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // This is a function for toggling the mode of theme
  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // This is part of JSX in react

    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {/* Below div is a animation circle part  */}
      <div
        className={`${isDarkMode ? "animationbox2" : "animationbox1"}`}
      ></div>

      <div className={styles.container}>
        {/* Navbar Section */}
        <nav className={styles.nav}>
          <div className={styles.navleft}>
            {/* This is a logo of block flow */}
            <img
              src={isDarkMode ? "logo-dark.svg" : "logo-light.svg"}
              alt="logo"
              style={{ width: "44px", height: "42px" }}
            />
            <p style={{ fontSize: "25px", fontWeight: "700" }}>BLOCKFLOW</p>
          </div>
          <div className={styles.navright}>
            <li>docs</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Contact us</li>

            {/* Below button is a button that helps in toggle the mode of theme */}
            <button
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={toggleMode}
            >
              <img
                src={isDarkMode ? "light-mode.svg" : "dark-mode.svg"}
                alt={isDarkMode ? "light-mode" : "dark-mode"}
              />
            </button>
          </div>
        </nav>

        {/* Content Bar Section */}
        <section className={styles.section1}>
          <div>
            <h1
              style={{
                fontSize: "4vw",
                textTransform: "uppercase",
                fontWeight: "500",
                fontFamily: "Neue Montreal",
              }}
            >
              Elevate your
              <br />
              dapp development
              <br />
              with blockflow
            </h1>
            <p style={{ fontSize: "25px" }}>
              Efficient API Creation for Your
              <br /> Blockchain Data Needs.
            </p>
            <button className={styles.btn}>REQUEST DEMO</button>
          </div>
          <div className={styles.imgcontainer}>
            <img
              src={isDarkMode ? "vector-light.svg" : "vector-dark.svg"}
              alt="hex"
              width={145}
              height={160}
              style={{ position: "absolute", left: "-336px" }}
            />
            <img
              src={isDarkMode ? "vector-light.svg" : "vector-dark.svg"}
              alt="hex"
              width={145}
              height={160}
              style={{ position: "absolute", left: "-91px", top: "148px" }}
            />
            <img
              src={isDarkMode ? "vector-dark 1.svg" : "vector-light 1.svg"}
              alt="hex"
              width={66}
              height={138}
              style={{ position: "absolute", left: "-250px", top: "158px" }}
            />
            <img
              src={isDarkMode ? "vector-dark 2.svg" : "vector-light 2.svg"}
              alt="hex"
              width={66}
              height={138}
              style={{ position: "absolute", left: "-170px", top: "168px" }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
