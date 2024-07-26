import { useLocation } from "wouter"
import useAuthStore from "../store/auth-store"
import { shallow } from "zustand/shallow"
import home from "../assets/navigation/home.svg"
import medical from "../assets/navigation/medical.svg"
import qr_code from "../assets/navigation/qr-code.svg"
import user from "../assets/navigation/user.svg"

const MobileNav = () => {
    const [location, setLocation] = useLocation()
    const { isLogged } = useAuthStore(state => ({
        isLogged: state.isLogged
    }), shallow)

    const onClickNavigateTo = (to) => setLocation(to)

    const isActive = (path) => "transition duration-200 ease rounded-t-2xl " + (location === path ? "bg-orange font-semibold" : "hover:bg-hoverOrange")


    if (isLogged) return (
        <div className="btm-nav rounded-t-2xl bg-lightOrange h-[68px] md:hidden z-10">

            <button className={isActive("/")} type="button" onClick={() => onClickNavigateTo("/")}>
                <img src={home} alt="home" className="w-7 h-7" />
                <span className="btm-nav-label">Inicio</span>
            </button>


            <button className={isActive("/agenda")} type="button" onClick={() => onClickNavigateTo("/")}>
                <img src={medical} alt="medical-icon" className="w-7 h-7" />
                <span className="btm-nav-label">Agenda</span>
            </button>


            <button className={isActive("/mi-perfil")} type="button" onClick={() => onClickNavigateTo("/mi-perfil")}>
                <img src={user} alt="user-icon" className="w-7 h-7" />
                <span className="btm-nav-label">Usuario</span>
            </button>


            <button className={isActive("/mi-informacion")} type="button" onClick={() => onClickNavigateTo("/mi-informacion")}>
                <img src={qr_code} alt="qr-code-icon" className="w-7 h-7" />
                <span className="btm-nav-label">QR</span>
            </button>
        </div>)
}

export default MobileNav