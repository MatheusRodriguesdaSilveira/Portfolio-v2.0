import Image from "next/image";
import Me from "/public/matheus.png";

import SalesforceIcon from "/public/SalesforceIcon.png";
import AgentforceIcon from "/public/AgentforceIcon.png";
import FlowIcon from "/public/FlowIcon.png";

import { FaGitAlt, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { Braces } from "lucide-react";

export const ImageBorder = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center xl:mr-16 2xl:mr-20">
      <div className="profileCard_container relative p-5 xl:p-5 2xl:p-10 border-2 border-dashed rounded-full border-gray-400/50">
        {/* Salesforce */}
        <button className="profile_item absolute left-[60px] top-[-10px] xl:left-[70px] xl:top-[-15px] 2xl:left-[100px] 2xl:top-[-15px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/50">
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <Image
              src={SalesforceIcon}
              alt="Salesforce"
              width={34}
              height={34}
              className="object-contain"
            />
          </span>
        </button>

        {/* Agentforce */}
        <button className="profile_item absolute right-[50px] top-[-5px] xl:right-[60px] xl:top-[-10px] 2xl:right-[70px] 2xl:top-[-5px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/50">
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <Image
              src={AgentforceIcon}
              alt="Agentforce"
              width={34}
              height={34}
              className="object-contain"
            />
          </span>
        </button>

        {/* Braces */}
        <button
          aria-label="Code"
          className="profile_item absolute left-[-15px] top-[70px] xl:left-[-25px] xl:top-[100px] 2xl:left-[-15px] 2xl:top-[100px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-lime-500/50"
        >
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <Braces className="size-6 text-lime-600" />
          </span>
        </button>

        {/* JavaScript */}
        <button
          aria-label="JavaScript"
          className="profile_item absolute right-[-15px] top-[70px] xl:right-[-25px] xl:top-[100px] 2xl:right-[-15px] 2xl:top-[100px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-yellow-500/50"
        >
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <RiJavascriptFill className="size-6 text-yellow-300" />
          </span>
        </button>

        {/* Git */}
        <button
          aria-label="Git"
          className="profile_item absolute left-[0] bottom-[40px] xl:left-[0] xl:bottom-[50px] 2xl:left-[0] 2xl:bottom-[60px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/50"
        >
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <FaGitAlt className="size-6 text-orange-600" />
          </span>
        </button>

        {/* Node.js */}
        <button
          aria-label="Node.js"
          className="profile_item absolute right-[0] bottom-[40px] xl:right-[0] xl:bottom-[50px] 2xl:right-[0] 2xl:bottom-[60px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-green-500/50"
        >
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <FaNodeJs className="size-6 text-green-500" />
          </span>
        </button>

        {/* Flow */}
        <button className="profile_item absolute right-[40%] bottom-[-15px] xl:right-[40%] xl:bottom-[-25px] 2xl:right-[40%] 2xl:bottom-[-30px] rounded-full cursor-pointer border border-gray-400/50 p-1 xl:p-1.5 active:scale-95 hover:scale-95 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/50">
          <span className="size-6 xl:size-7 2xl:size-10 rounded-full bg-zinc-700 flex items-center justify-center p-1">
            <Image
              src={FlowIcon}
              alt="Salesforce Flow"
              width={26}
              height={26}
              className="object-contain"
            />
          </span>
        </button>

        {/* Foto central */}
        <button className="profile_item w-[220px] h-[220px] xl:w-[270px] xl:h-[270px] 2xl:w-[320px] 2xl:h-[320px] p-2 border rounded-full border-gray-400 hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
          <div className="w-[200px] h-[200px] xl:w-[250px] xl:h-[250px] 2xl:w-[300px] 2xl:h-[300px] flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 transition-all duration-500">
            <Image
              src={Me}
              alt="Me"
              className="p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 brightness-90 shadow-lg shadow-cyan-400/60 hover:shadow-cyan-500/90 duration-300"
            />
          </div>
        </button>
      </div>
    </div>
  );
};
