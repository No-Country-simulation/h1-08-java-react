import { search } from "../../assets"
import useLanguage from "../../hooks/useLanguage"

const SearchForm = ({ handleSubmitSearch, className }) => {
    const lang = useLanguage()

    return (
        <form className={`flex md:w-5/12 gap-2 ${className}`} onSubmit={handleSubmitSearch}>
            <input
                type="text"
                name="searched"
                placeholder={lang === "es" ? "Buscar" : "Search"}
                className="w-10/12 h-[50px] font-poppins text-lg focus:bg-white rounded-2xl input input-secondary p-4 bg-transparent border border-magenta is-disabled"
            />
            <button type="submit" className="px-3.5 h-[50px] bg-transparent border border-magenta rounded-2xl text-center is-disabled">
                <img src={search} height={30} width={30} alt="Search icon" />
            </button>
        </form>)
}

export default SearchForm