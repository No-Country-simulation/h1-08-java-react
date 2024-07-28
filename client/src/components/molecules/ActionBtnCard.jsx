import PropTypes from "prop-types";
import CustomButton from "../atoms/CustomButtom";

const ActionBtnCard = ({ title, buttonText, titleSize, buttonClassName }) => {
  return (
    <div className="font-roboto p-6 rounded-2xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-auto max-w-[632px] h-[172px]">
      <div className="flex flex-col gap-6 items-center">
        <h1
          className={`text-black font-poppins capitalize font-medium ${titleSize}`}
        >
          {title}
        </h1>
        <CustomButton className={buttonClassName}>{buttonText}</CustomButton>
      </div>
    </div>
  );
};

ActionBtnCard.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  titleSize: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default ActionBtnCard;
