import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

function About() {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          className=" w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            repudiandae dolores, ex tenetur voluptatum, vitae dolorum quia
            maxime quibusdam et corrupti quisquam delectus animi tempora?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Beatae saepe fuga
            amet sed eveniet aliquam veritatis quam doloribus quasi blanditiis!
          </p>
          <p>
            veritatis tempora molestias mollitia tenetur sequi, ad obcaecati quo
            magnam numquam.Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Perspiciatis delectus ut autem, aliquid doloremque magni eum
            maiores inventore minima at ipsam animi modi? Ipsum eius, sunt iusto
            rem asperiores porro?
          </p>
          <b className=" text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas harum
            similique facere sunt sit, distinctio sapiente quibusdam esse
            provident, commodi dolorem tempora dolores alias totam eaque
            pariatur culpa nam tenetur? Esse enim eligendi iusto culpa quaerat
            minus, sequi eaque fugit!
          </p>
        </div>
      </div>
      <div className=" text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className=" flex flex-col md:flex-row text-sm mb-20">
            <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Quality Assurance</b>
              <p className=" text-gray-600" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed similique corrupti et corporis quo!</p>
            </div>
            <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Convinience</b>
              <p className=" text-gray-600" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed similique corrupti et corporis quo!</p>
            </div>
            <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>Exceptional Customer Service:</b>
              <p className=" text-gray-600" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed similique corrupti et corporis quo!</p>
            </div>
      </div>

      <NewsletterBox/>
      

    </div>
  );
}

export default About;
