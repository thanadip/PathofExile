import React, { useState } from "react";

function Register() {
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const registerHandle = async () => {
    // console.log("password is :" + password);
    // console.log("confirm password is :" + conPassword);

    if (!password || !conPassword) {
      alert("You have a blanked field");
    } else if (password != conPassword) {
      alert("Password doesn't match!");
    } else {
      alert("register successfully!");
    }
  };

  return (
    <>
      <div className="flex flex-column justify-center items-center h-[100dvh] bg-black">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title justify-center">Register</h2>
            <label className="label">Enter username</label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered"
            />
            <label className="label">Enter password</label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="label">Confirm password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered"
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
            />

            <div className="card-actions justify-center">
              <button
                className="btn btn-primary btn-sm mt-2 bg-gray-900 text-sm border border-none normal-case"
                onClick={registerHandle}
              >
                Register
              </button>
            </div>
            <a href="/login" className="underline flex justify-center">
              or login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
