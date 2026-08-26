import { useState } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePwdChange = (e) => {
    setPwd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function getUser() {
      const response = await fetch(
        "http://localhost:8080/users/login",
        {
          headers: {
            "Content-type": "Application/json",
          },
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: pwd,
          }),
        }
      );

      const data = await response.json();

      console.log(data);
    }

    getUser();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h3 className={styles.title}>Welcome Back!</h3>

        <p className={styles.subtitle}>
          Sign in to continue to your account
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="pwd">Password</label>

            <input
              id="pwd"
              type="password"
              name="pwd"
              value={pwd}
              onChange={handlePwdChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;