import { CountryDropdown, RegionDropdown, } from 'react-country-region-selector';



const RegionSelected = ({ register, watch, setValue, isDisabled, values }) => {
    const valueCountry = values?.country != "sin especificar" ? values.country : "Argentina"
    const valueProvince = values?.province != "sin especificar" ? values.province : "Buenos Aires"
    const selectedCountry = watch("country", valueCountry);
    const selectedRegion = watch("province", valueProvince);

    return (<>
        <div className="form-control">

            <label className="label">
                <span className={`label-text text-poppins text-lg w-full`}>
                    País
                </span>
            </label>

            <div className="w-[310px] mx-auto">
                <CountryDropdown
                    disabled={isDisabled ?? false}
                    classes={`select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-full text-lg w-[310px] text-ellipsis overflow-hidden ${isDisabled && "is-input-disabled"}`}
                    showDefaultOption={false}
                    value={selectedCountry}
                    onChange={(val) => setValue("country", val)}
                />
            </div>

            <input type="hidden" disabled={isDisabled ?? false} {...register("country")} value={selectedCountry} />
        </div>

        <div className="form-control">

            <label className="label">
                <span className={`label-text text-poppins text-lg w-full`}>
                    Provincia
                </span>
            </label>

            <div className="w-[310px] mx-auto">
                <RegionDropdown
                    disabled={isDisabled ?? false}
                    classes={`select select-secondary 
                        border-x-0 border-t-0  border-magenta
                        rounded-b-none focus-within:bg-fullWhite 
                        hover:bg-fullWhite bg-gray shadow-sm shadow-magenta
                        backdrop-blur-sm w-full text-lg w-[310px] text-ellipsis overflow-hidden ${isDisabled && "is-input-disabled"}`}
                    showDefaultOption={false}
                    country={selectedCountry}
                    value={selectedRegion}
                    onChange={(val) => setValue("province", val)}
                />
            </div>

            <input type="hidden" disabled={isDisabled ?? false} {...register("province")} value={selectedRegion} />
        </div>
    </>)
}

export default RegionSelected
