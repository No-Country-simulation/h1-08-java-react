import visibility from "../../assets/input/visibility.svg";
import visibilityOff from "../../assets/input/visibility-off.svg";

const ViewPassword = ({ isPasswordVisible, handleClick }) => {
    return (
        <button onClick={handleClick}>
            <img
                src={isPasswordVisible ? visibilityOff : visibility}
                width={26}
                height={26}
                className="opacity-70"
                alt={isPasswordVisible ? "visibility-off" : "visibility"}
            />
        </button>
    );
}

export default ViewPassword;

