import { Link, useLocation } from 'wouter'
import UserNav from "./components/UserNav";
import DesktopNav from "./components/DesktopNav";
import useNavigation from '../hooks/useNavigation';

const Navbar = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const [location] = useLocation()
    const navigation = useNavigation()

    if (location.endsWith("/auth/iniciar-sesion") || location.endsWith("/auth/recuperar-cuenta")) return

    return (
        <div className="navbar bg-gray shadow shadow-orange h-10 rounded-b-2xl">
            <div className="navbar-start mr-10">
                <Link href="/" className="pl-2 text-xl">
                    <img src="/logo.webp" alt="Logo" className="h-7" />
                </Link>
            </div>

            <DesktopNav
                navigation={navigation}
            />

            <UserNav
                navigation={navigation}
            />

        </div>
    );
}

export default Navbar;
