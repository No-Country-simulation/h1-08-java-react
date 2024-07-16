import PropTypes from "prop-types";

const CardHistory = ({ image, title, icon }) => {
  return (
    <div className="card rounded-2xl bg-light backdrop-blur-sm border border-orange w-[350px] h-[182px] flex items-center justify-center py-6 card-shadow">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center justify-center gap-x-48">
            <img src={image} alt={title} className="size-16" />
            <img src={icon} alt={title} className="w-6 h-9" />
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
  )
}

CardHistory.propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

export default CardHistory