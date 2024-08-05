
const SectionCollapse = ({ title, children, isStatic, text, className }) => {
    return (
        <div className={`font-poppins collapse collapse-arrow col-span-full my-1 ${className}`}>
            <input type="checkbox" className="peer" />

            <h2 className={`collapse-title text-2xl font-bold bg-light rounded-2xl  border-4 border-orange ${isStatic && "text-center"}`}>
                {title} {isStatic && text}
            </h2>

            <div className="collapse-content peer-checked:py-4 px-0">
                {children}
            </div>
        </div>
    )
}

export default SectionCollapse