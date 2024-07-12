import PropTypes from "prop-types";

const CardButton = ({ image, title }) => {
  return (
      <div className="card rounded-2xl bg-light backdrop-blur-sm border border-orange size-[167px] flex items-center justify-center p-1.5 card-shadow">
        <div className="flex flex-col gap-5 items-center">
          <div className="bg-lightGreen border border-black rounded-full size-20 flex items-center justify-center">
            <img src={image} alt={title} className="size-16" />
          </div>
          <div>
            <span
              className="text-center font-poppins font-semibold text-lg"
            >
              {title}
            </span>
          </div>
        </div>
      </div>
  );
};

CardButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardButton;
