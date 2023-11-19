import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Index() {
  const guides = [
    {
      id: 1,
      topic: "End-game",
      image: "src/images/deli1.png",
      text: "All about end-game contents in the game",
      badge: ["End-game", "Content"],
      link: "/end-game",
    },
    {
      id: 2,
      topic: "Gears",
      image: "src/images/gears.png",
      text: "Recommend gears",
      badge: ["Gear", "Beginner", "End-game"],
      link: "/gears",
    },
    {
      id: 3,
      topic: "Skill gems",
      image: "src/images/gems.png",
      text: "Best gem combination",
      badge: ["Skill", "Beginner", "End-game"],
      link: "/gems",
    },
    {
      id: 4,
      topic: "Maps",
      image: "src/images/maps.png",
      text: "Reccomend grinding map",
      badge: ["Map", "End-game"],
      link: "/maps",
    },
    {
      id: 5,
      topic: "Tools",
      image: "src/images/Filters.png",
      text: "Quailty of life tools",
      badge: ["Tools", "3rd party"],
      link: "/login",
    },
  ];
  return (
    <>
      <div className="bg-black">
        {/* <Navbar /> */}
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

        <div className="grid grid-cols-4 gap-4 h-[800px] mx-[17vw]">
          {guides.map((guide, index) => (
            <a
              className="flex justify-center h-[310px] hover:scale-95 duration-150"
              href={guide.link}
              key={index}
            >
              <div className="card w-[300px] h-[350px] max-h-[350px] bg-base-100 shadow-xl hover:border border-slate-200">
                <figure className="">
                  <img
                    src={guide.image}
                    className="h-[175px] object-cover w-full min-h-[175px]"
                  />
                </figure>
                <div className="card-body p-[15px]">
                  <h2 className="card-title text-green-500 hover:underline">
                    {guide.topic}
                  </h2>
                  <p className="line-clamp-3">{guide.text}</p>
                  <div className="card-actions justify-end">
                    {guide.badge.map((badge, badgeIndex) => (
                      <div className="badge badge-outline" key={badgeIndex}>
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Index;
