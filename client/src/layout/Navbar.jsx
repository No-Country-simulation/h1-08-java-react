import { shallow } from "zustand/shallow";
import { Link } from 'wouter'
import Navigation from '../locales/routes'
import useLanguageStore from '../store/language-store';
import { useLocation } from "wouter";
import UserNav from "./UserNav";
import DesktopNav from "./DesktopNav";
// useRoute("/:locale?/home"); averiguar esto para el locale

const Navbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const [location, setLocation] = useLocation();
    const { currentLanguage, handleLanguageChange } = useLanguageStore(state => ({
        currentLanguage: state.currentLanguage,
        handleLanguageChange: state.handleLanguageChange
    }), shallow);

    const navigation = new Navigation(currentLanguage); // Puedes cambiar "es" por "en" para inglés

    if (location === "/auth/iniciar-sesion" || location === "/auth/login" || location.includes("/auth/forgot-password")) return

    return (
        <div className="navbar bg-gray shadow-lg h-10 rounded-b-2xl">
            <div className="navbar-start mr-10">
                <Link href="/" className="pl-2 text-xl">
                    <img src="/logo.webp" alt="Logo" className="h-7" />
                </Link>
            </div>

            <DesktopNav
                navigation={navigation}
            />

            <UserNav
                currentLanguage={currentLanguage}
                handleLanguageChange={handleLanguageChange}
                navigation={navigation}
            />

        </div>
    );
}

export default Navbar;
