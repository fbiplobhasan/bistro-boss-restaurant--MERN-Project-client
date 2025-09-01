import React from "react";
import chefImg from "../../assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      className="min-h-[60vh] md:h-[500px] w-full bg-cover bg-center relative mb-8"
      style={{ backgroundImage: `url(${chefImg})` }}
    >
      {/* Overlay box */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white bg-opacity-90 p-4 rounded-lg max-w-2xl md:max-w-2xl text-center md:p-6 lg:p-10">
          <h1 className="text-black text-2xl md:text-3xl lg:text-5xl font-bold mb-4 uppercase">Bistro Boss</h1>
          <p className="text-black text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            repudiandae ipsam numquam minus, consectetur commodi aliquid, odio
            facere repellendus dolorem velit rem totam dolorum in molestiae.
            Provident vero tenetur repudiandae optio aperiam ipsum laborum,
            accusantium blanditiis, consectetur pariatur nihil architecto
            voluptatum itaque dolores exercitationem? Minus quaerat illo
            praesentium sunt ullam vel reprehenderit, pariatur ut tenetur
            asperiores voluptate cum doloremque consectetur, at vero quam illum
            quo, possimus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefService;
