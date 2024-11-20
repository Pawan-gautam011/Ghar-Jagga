import { useState } from "react";
import "./App.css";
import logo from "../src/assets/Logo.png";
import search from "../src/assets/search-line.png";
import home from "../src/assets/home-5-line.png";
import profile from "../src/assets/Rectangle 2492.png";
import Hero from "./Hero";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between px-6 py-4  md:px-10">
   
        <img src={logo} alt="logo" className="" />

   
        <div className="hidden md:flex items-center border p-2 rounded-xl w-72">
          <img src={search} alt="" />
          <p className="ml-4">Search Here...</p>
        </div>

      
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black mb-1"></div>
          <div className="w-6 h-1 bg-black"></div>
        </div>

        
        <div className="hidden md:flex items-center text-[#25295B] text-lg">
          <img className="ml-10 cursor-pointer" src={home} alt="" />
          <p className="ml-10 cursor-pointer">Ghar</p>
          <p className="ml-10 cursor-pointer w-16 bg-[#25295B] text-white rounded p-1 flex items-center justify-center">
            Jagga
          </p>
          <p className="ml-10 cursor-pointer">Area Convertor</p>
          <p className="ml-10 cursor-pointer">Community</p>
          <img className="ml-10 cursor-pointer " src={profile} alt="" />
        </div>
      </div>

     
      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-white p-4 border-t">
          <div className="flex items-center border p-2 rounded-xl mb-4">
            <img src={search} alt="" />
            <p className="ml-4">Search Here...</p>
          </div>
          <p className="cursor-pointer mb-2">Ghar</p>
          <p className="cursor-pointer mb-2 bg-[#25295B] text-white rounded p-1">
            Jagga
          </p>
          <p className="cursor-pointer mb-2">Area Convertor</p>
          <p className="cursor-pointer mb-2">Community</p>
          <img className="cursor-pointer w-9 mx-auto" src={profile} alt="" />
        </div>
      )}

      <hr />
      <Hero />
    </>
  );
}

export default App;
