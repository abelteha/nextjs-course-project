import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-600 flex flex-col justify-center items-center  py-10  gap-3 sm:gap-10">
      <div>
        <Image
          src="/images/site/abel.jpg"
          alt="abel's image"
          width={300}
          height={300}
          //   layout="responsive"
          className="rounded-full sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]"
        />
      </div>
      <h1 className="sm:text-[4rem] text-4xl text-gray-300 font-bold">
        Hi, I am Abel
      </h1>
      <p className="sm:text-2xl text-xl max-w-[22rem]  text-gray-300 sm:max-w-[40rem] text-center">
        I blog about web development - especially frontend frameworks like React
        or Next.
      </p>
    </section>
  );
};

export default Hero;
