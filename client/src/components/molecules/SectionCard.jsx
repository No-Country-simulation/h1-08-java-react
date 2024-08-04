import PropTypes from "prop-types";


const SectionCard = ({ sectionName, sectionIcon, altIcon, description, children, sizesIcon }) => {
    return (
        <div className="text-black px-2 py-6 rounded-2xl bg-light backdrop-blur-sm card-shadow border border-orange transition ease hover:border-fucsia hover:bg-white w-9/12 min-w-[350px] mb-5">
            <h1 className="font-bold text-2xl md:text-3xl font-poppins px-2 max-w-[300px] leading-10">
                {sectionName}
            </h1>

            {sectionIcon &&
                <div className={`absolute ${sizesIcon ? "right-8" : "right-3"} 
                ${sizesIcon ? "top-5" : " top-2.5"}`}>
                    <img src={sectionIcon} height={sizesIcon ? sizesIcon.height : 60} width={sizesIcon ? sizesIcon.width : 60} alt={altIcon} />
                </div>
            }

            {description &&
                <p className="font-roboto text-xl my-1 p-3 leading-7">
                    {description}
                </p>
            }
            {children && children}
        </div>
    )
}

SectionCard.propTypes = {
    sectionName: PropTypes.string.isRequired,
    description: PropTypes.string,
    sectionIcon: PropTypes.string || undefined || PropTypes.any,
    altIcon: PropTypes.string || undefined,
    children: PropTypes.any || undefined,
};

export default SectionCard