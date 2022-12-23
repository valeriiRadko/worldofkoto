import React from "react";
import Image from "next/image";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/sections/signup.module.css";

const url =
  "https://themetaversed.us14.list-manage.com/subscribe/post?u=b0b78323f9cd3610a6b1a9b26&amp;id=22f804b3d4";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [signedup, setSignedup] = React.useState(false);
  const onClick = async () => {
    try {
      let data = await fetch(
        `https://cors-anywhere-koto.herokuapp.com/https://themetaversed.us14.list-manage.com/subscribe/post-json?u=b0b78323f9cd3610a6b1a9b26&amp;id=22f804b3d4&EMAIL=${email}`
      );
      console.log(data);
      data = await data.json();
      console.log(data);
      setSignedup(true);
    } catch (e) {
      console.log(e);
    }
  };
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
            {signedup ? (
              <>
                <input
                  placeholder="Enter your email"
                  value={"Thanks for Signing Up!"}
                  style={{ color: "#007369" }}
                  // onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />{" "}
              </>
            ) : (
              <>
                <input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />{" "}
              </>
            )}
            <span className={styles.icon} onClick={onClick}>
              <Image src="/Send.svg" alt="image" height={30} width={30} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
