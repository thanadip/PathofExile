import React from "react";
import Navbar from "../../components/Navbar";

function Index() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        {/* Index banner */}
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: `url('src/images/cover_1.jpg')`,
            height: "100vh",
          }}
        >
          <div className="flex flex-column justify-center items-center h-[80vh]">
            <img
              src="src/images/Path-of-Exile-Logo.png"
              className="h-72 animate-floating z-10 opacity-90"
              alt="Logo"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
        </div>

        {/* Content grid */}
        <div className="text-4xl ml-[17vw] mb-[20px] ">Game content guides</div>
        <div className="grid grid-cols-4 gap-4 h-[100dvh] mx-[17vw]">
          <a
            className="flex justify-center h-fit hover:scale-95 duration-150"
            href="/XD"
          >
            <div className="card w-[300px] bg-base-100 shadow-xl hover:border border-slate-200">
              <figure className="">
                <img src="src\images\Abyss_league_logo.png" />
              </figure>
              <div className="card-body p-[15px]">
                <h2 className="card-title text-green-500 hover:underline">
                  End-game
                </h2>
                <p>All about end-game contents in the game</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">End-game</div>
                  <div className="badge badge-outline">Content</div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Index;
