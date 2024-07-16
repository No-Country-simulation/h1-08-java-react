import PropTypes from "prop-types";


const SectionCard = ({ sectionName, sectionIcon, altIcon, description }) => {
    return (
        <div className="text-black px-2 py-6 rounded-2xl bg-light backdrop-blur-sm card-shadow border border-orange transition duration-200 ease hover:border-fucsia hover:bg-white w-9/12 min-w-[350px] mb-5">
            <h1 className="font-bold text-3xl font-poppins px-2 max-w-[290px] leading-10">
                {sectionName}
            </h1>

            {sectionIcon &&
                <div className="absolute right-1.5 top-3">
                    <img src={sectionIcon} height={60} width={60} alt={altIcon} />
                </div>
            }

            <p className="font-roboto text-xl my-1 p-3 leading-7">
                {description}
            </p>
        </div>
    )
}

SectionCard.propTypes = {
    sectionName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    sectionIcon: PropTypes.string || undefined || PropTypes.any,
    altIcon: PropTypes.string || undefined,
};

export default SectionCard