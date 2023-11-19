import React from "react";

function Login() {
  return (
    <>
      <div className="flex flex-column justify-center items-center h-[100dvh] bg-black">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title justify-center">Login</h2>
            <label className="label">Enter username</label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered"
            />
            <label className="label">Enter password</label>
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered"
            />

            <div className="card-actions justify-center">
              <button className="btn btn-primary btn-sm mt-2 bg-gray-900 text-sm border border-none normal-case">
                Login
              </button>
            </div>
            <a href="/register" className="underline flex justify-center">
              or register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
