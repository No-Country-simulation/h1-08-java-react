import PropTypes from "prop-types";

const HealthInfo = ({ title, referenceRange, result, resultIndicator }) => {
  return (
    <div className="health-info w-9/12 min-w-[332px] bg-lightYellow rounded-lg">
      <div className="flex flex-col justify-between gap-3">
        <div className="flex flex-row items-center justify-between relative">
          <h3 className="font-poppins font-normal text-black text-[26px] pl-4 py-3 w-56">{title}</h3>
            <div className="flex items-center justify-center absolute top-0 right-0 bg-darkYellow w-auto h-3/4 min-h-[76px] p-1 rounded-lg">
                <span className="result font-poppins font-semibold text-black text-4xl">
                    {result}
                </span>
                <span className="result-indicator font-poppins font-normal text-black text-lg">
                    {resultIndicator}
                </span>
            </div>
        </div>
        <p className="font-poppins font-normal text-black/50 text-xl pl-4 pb-3">{referenceRange}</p>
      </div>
    </div>
  );
};

HealthInfo.propTypes = {
  title: PropTypes.string.isRequired,
  referenceRange: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
  resultIndicator: PropTypes.string.isRequired,
};

export default HealthInfo;
