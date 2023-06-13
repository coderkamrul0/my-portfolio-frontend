import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="text-[#E2E8F0] pb-24 md:pb-48 ">
      <div>
        <div>
          <p className="text-center  pb-3 font-bold text-4xl text-[#38BDF8]">
            Projects
          </p>
          <p className="text-center font-semibold pb-10">
            Here are some of my projects!
          </p>
        </div>

        <div>
          <div className="md:flex justify-between gap-20">
            {projects.map((item) => (
              <div className="bg-[#1E293B] border border-[#38BDF8]  rounded-md mb-5 transform transition duration-500 hover:scale-110  p-2">
                <img src={item.image} className="" alt="" />
                <div>
                  <h2 className="font-bold opacity-60 text-xl">Name: {item.name}</h2>
                  <p className="pt-3">
                    <span className="font-bold opacity-60 text-lg">Technology:</span>{" "}
                    <div className="grid opacity-60 grid-cols-3 gap-1">
                      {item.technology.map((tech) => (
                        <p className="hover:text-[#38BDF8] font-bold cursor-pointer">{tech}</p>
                      ))}
                    </div>
                  </p>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <Link to={item.liveLink}>
                  <button className="bg-[#38BDF8]  px-2 rounded text-black font-semibold hover:text-white">Live Site</button></Link>
                  <Link to={item.clientCodeLink}>
                  <button className="bg-[#38BDF8]  px-2 rounded text-black font-semibold hover:text-white">Client Code</button></Link>
                  <Link to={item.serverCodeLink}>
                  <button className="bg-[#38BDF8]  px-2 rounded text-black font-semibold hover:text-white">Server Code</button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
