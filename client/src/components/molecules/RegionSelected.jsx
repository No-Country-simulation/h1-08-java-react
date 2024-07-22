import { CountryDropdown, RegionDropdown, } from 'react-country-region-selector';



const RegionSelected = ({ register, watch, setValue }) => {
    const selectedCountry = watch("country", "Argentina");
    const selectedRegion = watch("region", "");

    return (<>
        <div className="form-control">

            <label className="label">
                <span className={`label-text text-poppins text-lg w-full`}>
                    País
                </span>
            </label>

            <div className="max-w-[310px] mx-auto">
                <CountryDropdown
                    classes="select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-full text-lg w-[310px] text-ellipsis overflow-hidden"
                    showDefaultOption={false}
                    value={selectedCountry}
                    onChange={(val) => setValue("country", val)}
                />
            </div>

            <input type="hidden" {...register("country")} value={selectedCountry} />
        </div>

        <div className="form-control">

            <label className="label">
                <span className={`label-text text-poppins text-lg w-full`}>
                    Provincia
                </span>
            </label>

            <div className="max-w-[310px] mx-auto">
                <RegionDropdown
                    classes="select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-full text-lg w-[310px] text-ellipsis overflow-hidden"
                    showDefaultOption={false}
                    country={selectedCountry}
                    value={selectedRegion}
                    onChange={(val) => setValue("region", val)}
                />
            </div>

            <input type="hidden"  {...register("region")} value={selectedRegion} />
        </div>
    </>)
}

export default RegionSelected
