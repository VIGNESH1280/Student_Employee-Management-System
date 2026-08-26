import { useState } from "react";
import styles from "./SignUp.module.css";

const SignUP = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    role: "student",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };




  const handleSubmit = (event) => {
    event.preventDefault();

    async function postUser() {
      const response = await fetch(
        "http://localhost:8080/users/register",
        {
          headers: {
            "Content-type": "Application/json",
          },
          method: "POST",
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            dateOfBirth: formData.dateOfBirth,
            gender: formData.gender,
            password: formData.password,
            role: formData.role,
          }),
        }
      );
      const data = await response.json();
      console.log("Signup successful:", data._id);
    }
    postUser();
  };







  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h3 className={styles.title}>Create Your Account</h3>

        <p className={styles.subtitle}>
          Please fill in the details below
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>

            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>

            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>

            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dateOfBirth">Date of Birth</label>

            <input
              id="dateOfBirth"
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Gender</label>

            <div className={styles.radioGroup}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>

              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="role">Select Your Role</label>

            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="manager">Manager</option>
              <option value="employee">Employee</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUP;