import PropTypes from "prop-types";
import { useLocation } from "wouter";

const CardHistory = ({ image, title, icon, addClassName, link }) => {
  // eslint-disable-next-line no-unused-vars
  const [location, setLocation] = useLocation()
  return (
    <div className={`card rounded-2xl bg-light backdrop-blur-sm card-shadow border border-orange transition duration-200 ease hover:border-fucsia hover:bg-white w-9/12 min-w-[350px] h-[182px] flex items-center justify-center px-2 py-6 card-shadow cursor-pointer ${addClassName}`} onClick={() => setLocation(link)}>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center justify-center gap-x-48">
          <img src={image} alt={title} className="size-16" />
          <img src={icon} alt={title} className="w-6 h-9" />
        </div>
        <div>
          <p
            className="font-poppins font-semibold text-[22px] md:text-2xl"
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  )
}

CardHistory.propTypes = {
  image: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardHistory