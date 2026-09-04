import { useState } from "react";
import styles from "./UserDetails.module.css";

const UserDetails = () => {

    const [id, setId] = useState("");
    const [userData, setUserData] = useState(null);

    console.log("USER DATA:", userData);

    const handleClick = async () => {

        const response = await fetch(
            "http://localhost:8080/users/userdetail",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    id: id
                })
            }
        );

        const data = await response.json();

        setUserData(data);
    };

    return (
        <div className={styles.container}>

            <h3 className={styles.title}>
                Welcome to User Details
            </h3>

            <label className={styles.label} htmlFor="userId">
                Enter User ID:
            </label>

            <input
                className={styles.input}
                id="userId"
                type="text"
                name="userId"
                onChange={(e) => {
                    setId(e.target.value);
                }}
            />

            <button
                className={styles.button}
                onClick={handleClick}
            >
                FETCH
            </button>

            <div className={styles.userDetails}>
                {userData && (
                    <div>
                        <p>First Name: {userData.firstName}</p>
                        <p>Last Name: {userData.lastName}</p>
                        <p>Email: {userData.email}</p>
                        <p>Phone: {userData.phone}</p>
                        <p>Date of Birth: {userData.dateOfBirth}</p>
                        <p>Gender: {userData.gender}</p>
                        <p>Role: {userData.role}</p>
                        <p>Status: {userData.status}</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default UserDetails;