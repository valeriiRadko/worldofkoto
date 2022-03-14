import React from "react";
import styles from "../../styles/components/sections/signup.module.css";

const SignUp = () => {
  return (
    <div className={styles.signupcontainer}>
      <div className={styles.blur}>
        <div className={styles.titlecontainer}>
          <h1 className={styles.title}>Stay Up To Date</h1>
          <h3 className={styles.subtitle}>
            Join us to stay up to date on all things KOTO.
          </h3>
        </div>
        <div className={styles.emailcontainer}>
          <div className={styles.emailinputcontainer}>
            <input placeholder="Enter your email" className={styles.input}/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
