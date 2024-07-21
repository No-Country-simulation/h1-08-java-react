import { gotaDeSangre } from "../../assets";
import HealthInfo from "../atoms/HealthInfo";

const HealthDataCard = () => {
  const healthInfoList = [
    {
      title: "Colesterol HDL",
      referenceRange: "Rango Nominal: 60-140",
      result: "60",
      resultIndicator: "mg/dl",
    },
    {
      title: "Colesterol LDL",
      referenceRange: "Rango Nominal: 50-130",
      result: "106",
      resultIndicator: "mg/dl",
    },
    {
      title: "Glucosa en sangre",
      referenceRange: "Rango Nominal: 70-110",
      result: "96",
      resultIndicator: "mg/dl",
    },
    {
      title: "Triglicéridos",
      referenceRange: "Rango Nominal: 50-150",
      result: "86",
      resultIndicator: "mg/dl",
    },
  ];

  return (
    <div className="card rounded-2xl bg-white/60 backdrop-blur-sm border border-orange w-9/12 min-w-[350px] h-auto flex items-center justify-center p-1.5 card-shadow">
      <div className="flex flex-row gap-2 justify-center items-center">
        <p className="font-poppins font-normal text-black/50 text-[26px]">
          Fecha:
        </p>
        <span className="font-poppins font-normal text-black text-[26px]">
          15/07/2024
        </span>
        <img src={gotaDeSangre} alt="health icon" className="size-[60px]" />
      </div>
      <hr className="border-2 border-black w-4/6 min-w-[293px] mt-2 mb-5" />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-2">
        {healthInfoList.map((data, index) => (
          <HealthInfo
            key={index}
            title={data.title}
            referenceRange={data.referenceRange}
            result={data.result}
            resultIndicator={data.resultIndicator}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthDataCard;
