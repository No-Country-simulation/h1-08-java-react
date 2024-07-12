import PropTypes from "prop-types";

const CardDescription = ({ image, title, description }) => {
  return (
    <div className="card rounded-2xl bg-light backdrop-blur-sm border border-orange w-[350px] h-[182px] flex items-center justify-center py-6 card-shadow gap-y-1">
      <div className="flex flex-row items-center justify-center gap-x-16">
        <span className="text-center font-poppins font-semibold text-[26px]">
          {title}
        </span>
      <img src={image} alt={title} className="size-[60px]" />
        
      </div>
      <div className="max-w-[318px]">
        <p className="font-roboto font-normal text-textColor text-xl">{description}</p>
      </div>
    </div>
  );
};

CardDescription.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardDescription;
