import PropTypes from "prop-types";

function CustomButton({ children, className, onClick }) {
  return (
    <button
      className={`mx-auto max-w-[387px] h-auto px-6 py-4 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta text-center ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

CustomButton.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.string,
};

export default CustomButton;
