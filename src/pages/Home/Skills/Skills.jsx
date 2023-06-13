import React from "react";
import htmlImg from "../../../assets/icons/html.png";
import cssImg from "../../../assets/icons/css.png";
import jsImg from "../../../assets/icons/javascript.png";
import bootstrap from "../../../assets/icons/bootstrap.png";
import tailwind from "../../../assets/icons/tailwind.png";
import reactImg from "../../../assets/icons/react.png";
import node from "../../../assets/icons/node.png";
import express from "../../../assets/icons/express.png";
import github from "../../../assets/icons/github.png";
import mongodb from "../../../assets/icons/mongodb.png";
import firebase from "../../../assets/icons/firebase.png";
import photoshop from "../../../assets/icons/photoshop.png";
import figma from "../../../assets/icons/figma.png";
import vscode from "../../../assets/icons/vscode.png";
import typescript from "../../../assets/icons/typescript.png";

const Skills = () => {
  return (
    <div className="text-[#E2E8F0] pb-24 md:pb-48">
      <div>
        <div>
          <p className="text-center  pb-3 font-bold text-4xl text-[#38BDF8]">
            My Skills
          </p>
          <p className="text-center font-semibold pb-10">Here are a few technologies I’ve been working with recently</p>

          <div>
            <div className="md:grid grid-cols-3 gap-5">
              <div className="flex gap-3 items-center">
                <img src={htmlImg} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>HTML - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={cssImg} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>CSS - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={bootstrap} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>Bootstrap - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={tailwind} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>Tailwind - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={jsImg} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[180px] h-10">
                            <p>Javascript - 70%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={reactImg} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[210px] h-10">
                            <p>React JS - 80%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={typescript} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[120px] h-10">
                            <p>TypeScript - 50%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={node} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[210px] h-10">
                            <p>Node JS - 80%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={express} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[210px] h-10">
                            <p>Express JS - 80%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mongodb} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[225px] h-10">
                            <p>MongoDB - 85%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={github} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>Github - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={firebase} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>Firebase - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={vscode} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[250px] h-10">
                            <p>VS Code - 90%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={figma} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[225px] h-10">
                            <p>Figma - 85%</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <img src={photoshop} className="shadow-lg shadow-[#38BDF8]" alt="" />
                <div>
                    <div className="w-[270px] relative border-2 border-[#38BDF8] h-11">
                        <div className="bg-[#38BDF8] flex justify-center items-center font-bold text-[#0C1222] w-[225px] h-10">
                            <p>PhotoShop - 85%</p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
