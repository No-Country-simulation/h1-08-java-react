
const Collapse = ({ title, icon, children }) => {
    return (
        <div className="bg-base-200 font-poppins collapse collapse-arrow bg-light border border-orange w-9/12 min-w-[349px] hover:bg-white transition">
            <input type="checkbox" className="peer" />

            <div
                className="collapse-title flex gap-3 items-center text-2xl font-bold py-0 peer-checked:bg-orange">
                <img src={icon} width={40} height={40} alt={`${title}-icon`} />
                <h3 className="capitalize">
                    {title}
                </h3>
            </div>

            <div className="collapse-content peer-checked:p-5 text-textColor-content">
                {children}
            </div>
        </div>)
}

export default Collapse