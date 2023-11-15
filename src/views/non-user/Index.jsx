import React from "react";
import Navbar from "../../components/Navbar";

function Index() {
  return (
    <>
      <div className="">
        <Navbar />
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: `url('src/images/cover_1.jpg')`,
            height: "100vh",
          }}
        >
          <div className="flex flex-column justify-center items-center h-full">
            <img
              src="src/images/Path-of-Exile-Logo.png"
              className="h-[30vh] animate-floating z-10 opacity-90"
              alt="Logo"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
        </div>
        <div className="h-[100dvh] bg-black"></div>
      </div>
    </>
  );
}

export default Index;
