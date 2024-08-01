import PropTypes from "prop-types";

function CustomButton({ children, className, onClick }) {
  return (
    <button
      className={`max-w-[387px] h-auto py-3 border border-magenta rounded-xl font-poppins font-normal text-xl text-magenta hover:border-fucsia hover:text-fucsia text-center ${className}`}
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
