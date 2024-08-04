import { useState } from "react";
import { es } from "date-fns/locale";
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
                        ? "Mi Agenda"
                        : "My Schedule"
                }
                description={
                    currentLanguage == "es"
                        ? "En esta sección encontrarás tus citas medicas pendientes."
                        : "In this section you will find your pending medical appointments."
                }
            />
            <div className="flex flex-wrap gap-4 md:gap-8 max-w-[770px] justify-center md:justify-normal mx-auto">

                <DayPicker
                    locale={es}
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