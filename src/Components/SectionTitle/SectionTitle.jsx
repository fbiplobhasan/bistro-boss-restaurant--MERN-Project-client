const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto md:w-3/12">
      <p className="text-yellow-600 mb-2">---{subHeading}---</p>
      <h2 className="text-2xl uppercase border-y-4 py-3 mb-4">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
