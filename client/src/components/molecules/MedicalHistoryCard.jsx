import PropTypes from "prop-types";
import { useLocation } from "wouter";

const MedicalHistoryCard = ({ specialty, location, date, link }) => {
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useLocation()

  return (
    <div className="flex flex-col gap-2 p-4 rounded-2xl min-w-[300px] h-auto bg-light border border-orange cursor-pointer transition duration-200 ease hover:border-fucsia hover:bg-white" onClick={() => setPage(link)}>
      <div className="flex flex-col">
        <p className="font-roboto font-normal text-black/50 text-xl">Especialidad:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{specialty}</h1>
      </div>
      <div className="flex flex-col">
        <p className="font-roboto font-normal text-black/50 text-xl">Lugar:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{location}</h1>
      </div>
      <div className="flex flex-row gap-1">
        <p className="font-roboto font-normal text-black/50 text-xl">Fecha:</p>
        <h1 className="font-roboto font-normal text-black text-2xl">{date}</h1>
      </div>
      <button className="mx-auto w-[268px] h-auto px-6 border border-magenta rounded-lg font-poppins font-normal text-2xl text-magenta text-center py-2 cursor-pointer">Ver</button>
    </div>
  );
};

MedicalHistoryCard.propTypes = {
  specialty: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default MedicalHistoryCard;
