import Image from "next/image";
import React from "react";

const WhatsApp = () => {
  return (
    <main className="w-full flex justify-center items-center flex-col space-y-16 p-10">
      <h1 className="font-bold text-5xl text-center">WhatsApp Numbery</h1>
      <div className="w-full flex flex-col lg:flex-row-reverse space-y-2">
        {/* Left Box */}
        <section className="w-full lg:flex-1 flex justify-center items-center">
          <div
            className=" flex justify-center items-center lg:items-start flex-col space-y-8"
            data-aos="fade-right"
            data-aos-duration="400"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-center lg:text-start text-yellow-500">
              One day, I jokingly asked her about her WhatsApp number.
            </h1>
            <h2 className="font-semibold text-slate-500 text-xl sm:text-2xl lg:text-3xl">
              I never imagined this, but she gave me her WhatsApp number
              seriously. Oh my god.
            </h2>
          </div>
        </section>

        {/* Right Box */}
        <section className="w-full h-full flex-1 flex justify-center items-center">
          <div
            className="w-full h-full mx-2 sm:mx-4 md:mx-8 lg:mx-24 lg:my-10"
            data-aos="fade-left"
            data-aos-duration="400"
          >
            <div className="w-full h-full flex justify-center items-center relative">
              <Image
                src="/images/pic10.png"
                alt="Work image"
                width={500}
                height={1}
                sizes="100%"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WhatsApp;
