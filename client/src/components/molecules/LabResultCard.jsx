import PropTypes from "prop-types";

const LabResultCard = ({ examination, location, date }) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded-2xl min-w-[300px] h-auto bg-light border border-orange">
      <div className="flex flex-col">
        <p className="font-roboto font-normal text-black/50 text-xl">Informe:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{examination}</h1>
      </div>
      <div className="flex flex-col">
        <p className="font-roboto font-normal text-black/50 text-xl">Lugar:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{location}</h1>
      </div>
      <div className="flex flex-row gap-1">
        <p className="font-roboto font-normal text-black/50 text-xl">Fecha:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{date}</h1>
      </div>
      <button className="mx-auto w-[268px] h-auto px-6 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta text-center py-2 disabled is-disabled">Descargar PDF</button>
    </div>
  );
};

LabResultCard.propTypes = {
  examination: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default LabResultCard;
