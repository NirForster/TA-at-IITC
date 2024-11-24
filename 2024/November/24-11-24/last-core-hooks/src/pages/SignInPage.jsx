import { useRef, useState } from "react";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const pswdRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log(email);
    console.log(pswdRef.current.value);
  };

  return (
    <>
      <h1>Sign In FORM</h1>
      <form
        onSubmit={handleFormSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#A9A9A9",
          padding: "1.5rem",
          borderRadius: "10px",
        }}
      >
        {/* Email */}
        <label htmlFor="email">Email: </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          name="email"
        />

        {/* Password */}
        <label htmlFor="password">Password: </label>
        <input ref={pswdRef} type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignInPage;
