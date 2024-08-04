import { Link } from "wouter"
import { arrow } from "../../assets/index"

const CardLink = ({ title, icon, href, onClick }) => (
    <div className="flex justify-between items-center bg-base-200 font-poppins bg-light h-[68px] rounded-2xl border border-orange min-w-[315px] hover:bg-white transition">

        <div
            className="flex gap-3 items-center text-2xl font-bold px-5">
            {icon && <img src={icon} width={40} height={40} alt={`${title}-icon`} />}
            <h3 className="capitalize">
                {title}
            </h3>
        </div>

        {href ?
            <Link href={href ?? "#"} className="py-2 px-5" title="Ver detalles">
                <img src={arrow} alt="arrow-icon" width={16} height={21} className="cursor-pointer" />
            </Link>
            :
            <button className="py-2 px-5" title="Ver detalles" onClick={onClick} type="button">
                <img src={arrow} alt="arrow-icon" width={16} height={21} className="cursor-pointer" />
            </button>}

    </div>
)


export default CardLink