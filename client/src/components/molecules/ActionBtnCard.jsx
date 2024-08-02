import PropTypes from "prop-types";
import CustomButton from "../atoms/CustomButtom";

const ActionBtnCard = ({
  title,
  buttonText,
  titleSize,
  buttonClassName,
  onClickOpen,
}) => {
  return (
    <div className="font-roboto p-6 rounded-2xl bg-light backdrop-blur-sm shadowCard border border-orange text-black w-8/12 min-w-[330px]  h-36">
      <div className="flex flex-col gap-3 items-center">
        <h1
          className={`text-black font-poppins capitalize font-medium ${titleSize}`}
        >
          {title}
        </h1>
        {buttonText === "Ingresar Código" || buttonText === "Enter Code"  ? (
          <CustomButton className={buttonClassName} onClick={onClickOpen}>
            {buttonText}
          </CustomButton>
        ) : (
          <CustomButton className={buttonClassName}>{buttonText}</CustomButton>
        )}
      </div>
    </div>
  );
};

ActionBtnCard.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  titleSize: PropTypes.string,
  buttonClassName: PropTypes.string,
  onClickOpen: PropTypes.func || PropTypes.string,
};

export default ActionBtnCard;
