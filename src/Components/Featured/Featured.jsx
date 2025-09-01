import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="Featured bg-fixed my-12">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Items"}
      ></SectionTitle>

      <div className="flex flex-col md:flex-row justify-center items-center py-10 md:py-20 px-4 md:px-36 space-y-6 md:space-y-0 md:space-x-10">
        {/* Image */}
        <div className="flex-1">
          <img
            className="w-full md:w-auto rounded-xl"
            src={featuredImg}
            alt="Featured"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-white text-sm md:text-base mb-2">
            March 20, 2023
          </h4>
          <h3 className="text-white text-xl md:text-3xl font-bold mb-4">
            WHERE CAN I GET SOME?
          </h3>
          <p className="text-white text-sm md:text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, aperiam. Saepe obcaecati animi iusto inventore eaque,
            facilis placeat excepturi vel!
          </p>
          <button className="btn btn-outline border-0 border-b-4 rounded-xl">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
