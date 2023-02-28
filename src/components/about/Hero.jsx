import React from "react";
import about from "../../assets/about.svg";
import dots from "../../assets/group10.svg";

const Hero = () => {
  return (
    <div className="pt-28 flex items-center md:flex-row flex-col-reverse">
      <div className="w-[90%] pl-20 mr-20">
        Sed ut sit nec ultrices. Diam enim, augue auctor quisque senectus enim,
        nibh ipsum. Feugiat tempor nisi, ut dolor pellentesque egestas.
        Tristique dictumst odio justo, volutpat. Pharetra, mi, venenatis ut id
        volutpat habitant. Sed ut sit nec ultrices. Diam enim, augue auctor
        quisque senectus enim, nibh ipsum. Feugiat tempor nisi, ut dolor
        pellentesque egestas. Tristique dictumst odio justo, volutpat. Pharetra,
        mi, venenatis ut id volutpat habitant.
      </div>
      <div className="md:w-[100%] p-10">
        <img
          src={dots}
          alt=""
          className="absolute left-[39%] top-[9%] hidden md:block"
        />
        <img src={about} alt="" />
      </div>
    </div>
  );
};

export default Hero;
