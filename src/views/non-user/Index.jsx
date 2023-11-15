import React from "react";

function Index() {
  return (
    <>
      <div className="">
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
              className="h-[30vh] animate-floating"
              alt="Logo"
            />
          </div>

          <div className="h-[100dvh]"></div>
        </div>
      </div>
    </>
  );
}

export default Index;
