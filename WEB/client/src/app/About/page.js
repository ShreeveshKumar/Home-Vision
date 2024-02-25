"use-client";
import React from "react";
import Navbar from "@/components/Navbar";
import Model from "@/components/Model";



const achieve_data = [
  {
    name: "Collabrated with small businesses and start-ups ",
    img:""
  },
  {
    name: "Cost estimation model",
    img:"",
  },
  {
    name: "Automated AR experinece of your house",
    img:"",
  }
]

const About = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Model />
      <Achievements />
    </div>
  );
};

const Heading = () => {
  return (
    <div className="flex flex-wrap  m-10">
      <div className="flex flex-col gap-10 place-content-center align-middle w-3/5 font-semibold ">
        <div>
          At RealityHex, we're not just a team; we're dreamweavers on a mission.
          Picture this: a collective of creative minds, each armed with unique
          skills, all geared towards turning your imagination into tangible
          reality. From sleek designs to intricate developments, we're the
          wizards making magic happen.
        </div>

        <div>
          We're not followers; we're trendsetters. Our collaborative mojo
          ensures that your project gets the Midas touch – a blend of diverse
          perspectives resulting in innovation that speaks volumes. Virtual
          reality, app wizardry, or cutting-edge design – you name it, and we're
          on it.
        </div>
      </div>
      <div>
        <img
          src="https://reallygooddesigns.com/wp-content/uploads/2022/01/Young-Girls-Boys-Cartoon-People-Waving.jpg"
          alt="people iamge here "
        />
      </div>
    </div>
  );
};

const Achievements = () => {
  return (
    <div>
      <div className="flex place-content-center align-middle text-2xl font-bold ">Achievements</div>
      <div>
        {
          achieve_data.map((pog) => {
            return (
              <Achievecard  desc={pog.name} img={pog.img}/>
            )
          })
        }

      </div>
    </div>
  ) 
};

const Achievecard = ({ img, desc }) => {
  return (
    <div className="flex place-content-center m-3 gap-10 ">
      <div>{desc}</div>
      <div>
        <img src={img} alt="image" />
      </div>
    </div>
  );
};





export default About;
