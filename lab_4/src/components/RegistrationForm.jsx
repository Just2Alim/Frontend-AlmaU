import { useState } from "react";

export default function RegistrationForm() {
    const [ name, setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ age, setAge] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [ageError, setAgeError] = useState("");

    const [success, setSuccess] = useState("false");

    const validateName = (value) => { 
        const v = value.trim();
        if (!v) return "Name is required";
        if (v.length < 2) return "Name must be at least 2 characters";
        return "";
    };

    const validateEmail = (value) => {
        const v = value.trim();
        if (!v) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(v)) return "Invalid email format";
        return "";
    };

    const validateAge = (value) => {
        if ( value === "" || value === null || value === undefined) return "Age is required";
        const n = Number(value);
        if (Number.isNaN(n)) return "Age must be a number";
        if (n < 18) return "You must be at least 18 years old";
        return "";
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setNameError(validateName(value));
        setSuccess(false);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(validateEmail(value));
        setSuccess(false);
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value);
        setAgeError(validateAge(value));
        setSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nErr = validateName(name);
        const eErr = validateEmail(email);
        const aErr = validateAge(age);

        setNameError(nErr);
        setEmailError(eErr);
        setAgeError(aErr);

        if (nErr || eErr || aErr) {
            setSuccess(false);
            return
        }

        setSuccess(true);

        setName("");
        setEmail("");
        setAge("");
    };

    return (
        <section>
            <h2>User Registration</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 12}}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                        style={{ width: "100%", padding: 10, boxSizing: "border-box" }}
                    />
                    {nameError && <p style={{ color: "red", margin: "4px 0 0" }}>{nameError}</p>}
                </div>

                <div style={{ marginBottom: 12 }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        style={{ width: "100%", padding: 10, boxSizing: "border-box" }}
                    />
                    {emailError && <p style={{ color: "red", margin: "4px 0 0" }}>{emailError}</p>}
                </div>

                <div style={{ marginBottom: 12 }}>
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={handleAgeChange}
                        style={{ width: "100%", padding: 10, boxSizing: "border-box" }}
                    />
                    {ageError && <p style={{ color: "red", margin: "4px 0 0" }}>{ageError}</p>}
                </div>
                    <button type="submit" style={{ padding: "10px 20px", marginTop: 12 }}>
                        Submit
                    </button>

                    {success && <p style={{ color: "green", margin: "12px 0 0" }}>Registration successful!</p>}
             </form>
        </section>
    );
}