import { useState } from "react";
import { es, enUS } from "date-fns/locale";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { addDays, addMonths, addYears } from "date-fns";
import useLanguage from "../../hooks/useLanguage";
import SectionCard from "../../components/molecules/SectionCard"
import "react-day-picker/style.css";
import { doctor } from "../../assets";

const Dates = () => {
    const currentDate = new Date()
    const [selected, setSelected] = useState([
        addDays(currentDate, 1),
        addMonths(addDays(currentDate, -5).setHours(9), 1)
    ])
    const currentLanguage = useLanguage()
    const startMonth = new Date(2024, 6, 1)
    const endMonth = addYears(startMonth, 1)

    const defaultClassNames = getDefaultClassNames();
    const customClass = {
        root: `${defaultClassNames.root} bg-orange w-fit p-5 rounded-xl capitalize font-poppins
         border border-orange duration-200 transition ease hover:border-fucsia
        `,
        today: `border-amber-500 bg-fucsia text-white rounded-full`,
        selected: `bg-amber-500 font-bold text-white rounded-full`,
        chevron: `${defaultClassNames.chevron} fill-textColor`,
        caption_label: `${defaultClassNames.caption_label} text-textColor p-3`,
        dropdown: `${defaultClassNames.dropdown} p-2 bg-orange/50 text-textColor`,
    }

    return (
        <section className="mt-10 mb-16 mx-auto flex flex-col gap-5 items-center justify-center">


            <SectionCard
                sectionIcon={doctor}
                altIcon={"schedule-section-icon"}
                sectionName={
                    currentLanguage == "es"
                        ? "Mis Citas"
                        : "My Dates"
                }
                description={
                    currentLanguage == "es"
                        ? "En esta sección encontrarás tus citas medicas pendientes."
                        : "In this section you will find your pending medical appointments."
                }
            />
            <div className="flex flex-wrap gap-4 md:gap-8 max-w-[770px] justify-center md:justify-normal mx-auto">

                <DayPicker
                    locale={currentLanguage == "es" ? es : enUS}
                    captionLayout="dropdown"
                    startMonth={startMonth}
                    endMonth={endMonth}
                    classNames={customClass}


                    mode="multiple"
                    selected={selected}
                    // onSelect={setSelected}
                    // onDayClick={() => { return }}

                    components={{
                        DayButton: (props) => {
                            const { day, modifiers, ...buttonProps } = props;
                            return (
                                <button
                                    {...buttonProps}
                                    onClick={() => { }} />
                            );
                        }
                    }}
                />

                <div className="text-xl font-poppin flex flex-col gap-3 justify-center items-center w-[362px]">
                    <p className="flex justify-between w-3/4"><span className="bg-fucsia px-3 rounded-full"></span>  {currentLanguage == "es" ? "Día actual" : "Current Date"}.</p>
                    <p className="flex justify-between w-3/4"><span className="bg-orange px-3 rounded-full"></span>  {currentLanguage == "es" ? "Próxima cita" : "Next appointment"}.</p>
                    <p className="text-center p-2  w-full my-3">
                        {currentLanguage == "es" ? `Usted tiene ${selected.length} citas pendientes` : `You have ${selected.length} pending appointments`}
                    </p>
                    <p className="text-textColor/60 text-center text-lg">
                        {currentLanguage == "es"
                            ? "A continuación encontrarás los detalles de tus citas pendientes"
                            : "Below you will find the details of your pending appointments"}.
                    </p>
                </div>

                {
                    selected.map((date, key) => (
                        <div key={key}
                            className={"p-6 rounded-2xl w-[362px]  bg-light backdrop-blur-sm card-shadow border border-orange transition ease hover:border-fucsia hover:bg-white"}
                        >
                            <h4 className="text-2xl text-textColor flex justify-between font-semibold">
                                {currentLanguage == "es" ? "Fecha" : "Date"}:
                                <span>
                                    {date.toLocaleDateString()}
                                </span>
                            </h4>
                            <h3 className="text-xl my-5 text-black/50  flex flex-col justify-between font-normal">
                                {currentLanguage == "es" ? "Hora de cita" : "Time of date"}:
                                <span className="text-textColor pl-1">
                                    {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </h3>


                            <div className="text-xl mt-5 text-color flex flex-col justify-between font-normal">
                                <span className="text-black/50">
                                    {currentLanguage == "es" ? "Nota" : "Note"}:
                                </span>

                                <p className="ml-1 mt-1 min-h-[90px] rounded-xl bg-orange/40 px-3 py-2">
                                    Cita medica con Dr. Pepe, Hospital Español.
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default Dates