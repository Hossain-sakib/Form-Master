import React, { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be s character or longer");
    } else {
      setError("");
    }
    console.log("form submitted");
    console.log(name, email, password);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl text-center mb-6">Stateful Form</h2>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input
                onChange={handleNameChange}
                type="text"
                required
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                onChange={handleEmailChange}
                type="email"
                required
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                onChange={handlePasswordChange}
                type="password"
                required
                name="password"
                className="input"
                placeholder="Pasword"
              />
              {error && <p>{error}</p>}

              <button type="submit" className="btn btn-neutral mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatefulForm;
