import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

function Contact() {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div
        className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb28
    "
      >
        <img
          src={assets.contact_img}
          className=" w-full md:max-w-[480px]"
          alt=""
        />
        <div className=" flex flex-col justify-center items-start gap-6">
          <p className=" font-semibold text-xl text-gray-600">Our Store</p>
          <p className=" text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>  
          <p className=" text-gray-500">
            Tel:(415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className=" font-medium text-gray-600 text-xl">Careers at Forever</p>
          <p className=" text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor?
          </p>
          <button className=" border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs </button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
}

export default Contact;
