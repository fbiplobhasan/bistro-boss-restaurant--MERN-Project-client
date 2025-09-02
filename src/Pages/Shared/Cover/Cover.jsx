import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="cover image"
      strength={-200}
    >
      <div className="hero min-h-[400px] md:min-h-[600px] lg:min-h-[700px]">
        <div className="hero-overlay bg-black/40"></div>
        <div className="hero-content text-neutral-content text-center px-4 md:px-6">
          <div className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl">
            {/* Title */}
            <h1 className="mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
              {title}
            </h1>
            {/* Description */}
            <p className="mb-5 text-sm sm:text-base md:text-lg lg:text-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
