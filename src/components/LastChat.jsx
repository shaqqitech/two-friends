import Image from "next/image";
import React from "react";
import Cards from "./Cards";

const LastsChat = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col space-y-16 p-10">
      <h1 className="font-bold text-5xl text-center">Some of our Chats</h1>
      <div className="w-full flex flex-col lg:flex-row space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center lg:items-start flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">
              These are some of our final chats.
            </h1>
            <h2 className="font-semibold text-slate-500 text-xl sm:text-2xl lg:text-3xl">
              Those days never came back.
            </h2>
          </div>
        </section>

        {/* Right Box */}
        <section
          className="w-full h-full flex-1 flex justify-center items-center"
          data-aos="fade-left"
          data-aos-duration="400"
        >
          <Cards />
        </section>
      </div>
    </main>
  );
};

export default LastsChat;
