import { shallow } from "zustand/shallow";
import { Link } from 'wouter'
import Navigation from '../locales/routes'
import useLanguageStore from '../store/language-store';
import useAuthStore from "../store/auth-store";
import { useLocation } from "wouter";
// useRoute("/:locale?/home"); averiguar esto para el locale

const Navbar = () => {
    window.scrollTo(0, 0)
    const [location, setLocation] = useLocation();
    const { isLogged, logout } = useAuthStore((state => ({
        isLogged: state.isLogged,
        logout: state.logout
    })), shallow)
    const { currentLanguage, handleLanguageChange } = useLanguageStore(state => ({
        currentLanguage: state.currentLanguage,
        handleLanguageChange: state.handleLanguageChange
    }), shallow);

    const navigation = new Navigation(currentLanguage); // Puedes cambiar "es" por "en" para inglés
    const role = "patient"; // Puedes cambiar este valor para probar con diferentes roles
    if(location === "/auth/iniciar-sesion" || location === "/auth/login") return
    // text-neutral-content 
    return (
        <div className="navbar bg-gray shadow-lg h-10">
            <div className="navbar-start">
                {isLogged &&
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow capitalize">
                            {
                                navigation.getNavigation(role).map((item, i) => (
                                    <li key={`${i}-${item.name}`}>
                                        <Link href={item.path}>
                                            {item.name}
                                        </Link>
                                        {
                                            item.sub_menu && item.sub_items && (
                                                <ul className="p-2">
                                                    {item.sub_items.map((subItem, j) => (
                                                        <li key={`${i}-${j}-${subItem.name}`}>
                                                            <Link href={subItem.path}>
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                }

                <Link href="/" className="btn btn-ghost text-xl">
                    <img src="/logo.webp" alt="Logo" className="h-7" />
                </Link>
            </div>

            {
                isLogged &&
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 capitalize text-base">
                        {
                            navigation.getNavigation(role).map((item, i) => (
                                <li key={`${i}-${item.name}`}>
                                    {
                                        item.sub_menu
                                            ?
                                            item.sub_items && (
                                                <details>
                                                    <summary>{item.name}</summary>
                                                    <ul className="p-2">
                                                        {item.sub_items.map((subItem, j) => (
                                                            <li key={`${i}-${j}-${subItem.name}`}>
                                                                <Link href={subItem.path}>
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </details>
                                            )
                                            :
                                            <Link href={item.path}>
                                                {item.name}
                                            </Link>
                                    }

                                </li>
                            ))
                        }
                    </ul>
                </div>
            }

            {
                isLogged &&
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">

                        <div tabIndex={2} role="button" className="flex justify-center items-center avatar placeholder ">
                            <div className="w-12 h-12 rounded-full ring-offset-base-100 ring-offset-2
                         hover:ring hover:ring-primary ">
                                {/* <span className="text-lg">UI</span> */}
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>

                        <ul
                            tabIndex={2}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] w-30 p-2 shadow capitalize right-0 gap-1">
                            <li>
                                <label className="flex cursor-pointer gap-2">
                                    <span className="label-text ">{navigation.getLanguages()[0]}</span>
                                    <input
                                        type="checkbox"
                                        checked={currentLanguage === "en"}
                                        onChange={handleLanguageChange}
                                        className="toggle"
                                    />
                                    <span className="label-text">{navigation.getLanguages()[1]}</span>
                                </label>
                            </li>
                            {
                                navigation.getProfileNavigation().map((item, i) => (
                                    <li key={`${i}-${item.name}`} className="capitalize">
                                        <Link href={item.path}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))
                            }

                            <div className="divider my-1"></div>

                            <button role="button" onClick={logout} className="btn btn-sm btn-outline btn-error capitalize">
                                {currentLanguage === "es" ? "cerrar sesión" : "logout"}
                            </button >
                        </ul>
                    </div>

                </div>
            }
        </div>
    );
}

export default Navbar;
