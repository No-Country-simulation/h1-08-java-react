import {
    hamburger,
    close,
    doctor,
    capuse_pink,
    injectionIcon,
    folder_pink,
    person_pink,
    help,
    home_pink
} from "../../assets"

import { Link } from 'wouter'
import useAuthStore from '../../store/auth-store'
import { shallow } from 'zustand/shallow'
import LanguageSwitcher from './LanguageSwitcher'
import useLanguage from '../../hooks/useLanguage'
import LogoutModal from './LogoutModal'

function selectIcon(name) {
    switch (name) {
        case "/mis-vacunas":
            return injectionIcon
        case "/mis-citas":
            return doctor
        case "/mis-tratamientos":
            return capuse_pink
        case "/historial-clinico":
            return folder_pink
        case "/mi-perfil":
            return person_pink
        default:
            return help;
    }
}


const Drawer = ({ navigation }) => {
    const currentLanguage = useLanguage()
    const role = useAuthStore(state => state.user?.role) ?? false

    const { isLogged, logout } = useAuthStore((state => ({
        isLogged: state.isLogged, logout: state.logout
    })), shallow)

    if (!isLogged || !role) return null

    return (
        <div className="drawer w-fit drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-[46px]">
                <label htmlFor="my-drawer-4" className="drawer-button">
                    <img height={60} width={46}
                        className="cursor-pointer rounded-xl p-1 transition ease duration-200 hover:bg-orange/60"
                        src={hamburger} alt="hamburger" />
                </label>
            </div>


            <div className="drawer-side z-10">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
                </label>

                <ul tabIndex={2} className="menu bg-lightOrange text-base-content rounded-l-2xl h-fit w-80 gap-4 p-4 capitalize font-poppins text-lg shadow shadow-orange">

                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay">
                        <img height={45} width={45}
                            className="ml-auto mr-1 cursor-pointer"
                            src={close} alt="hamburger-close" />
                    </label>

                    <li className="md:hidden">
                        <Link href={"/"} className={`card-shadow border border-orange hover:border-fucsia hover:bg-white`}>
                            <img src={home_pink} alt={`home-icon`} width={30} height={30} />
                            inicio
                        </Link>
                    </li>

                    {navigation.getNavigation(role).map((item, i) => (
                        <li key={`${i}-${item.name}`} className="md:hidden">
                            <Link href={item.path} className={`card-shadow border border-orange hover:border-fucsia hover:bg-white ${item.path == "#" && "is-disabled"}`}>
                                <img src={selectIcon(item.path)} alt={`${item.name}-icon`} width={35} height={35} />
                                {item.name}
                            </Link>
                        </li>
                    ))}


                    {
                        navigation.getProfileNavigation().map((item, i) => (
                            <li key={`${i}-${item.name}`} className="">
                                <Link href={item.path}
                                    className={`card-shadow border border-orange hover:border-fucsia hover:bg-white ${item.path == "#" && "is-disabled"}`}>
                                    <img src={selectIcon(item.path)} alt={`${item.name}-icon`} width={35} height={35} />
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }


                    <LanguageSwitcher currentLanguage={currentLanguage} es={navigation.getLanguages()[0]} en={navigation.getLanguages()[1]} />


                    <div className="divider my-1"></div>


                    <LogoutModal
                        currentLanguage={currentLanguage}
                        logout={logout}
                    />

                </ul>
            </div>
        </div>)
}

export default Drawer