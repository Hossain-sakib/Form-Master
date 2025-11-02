import React from "react";
import useInputState from "../../Hooks/useInputState/useInputState";

const HookForm = () => {
  const [name, handleNameChange] = useInputState("Sakib");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl text-center mb-6">Hook Form</h2>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input
                value={name}
                onChange={handleNameChange}
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
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

export default HookForm;
