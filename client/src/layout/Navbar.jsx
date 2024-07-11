import { shallow } from "zustand/shallow"; import { Link } from 'wouter'
import Navigation from '../routes'
import useLanguageStore from '../store/language-store';

const Navbar = () => {
    const { currentLanguage, handleLanguageChange } = useLanguageStore(state => ({
        currentLanguage: state.currentLanguage,
        handleLanguageChange: state.handleLanguageChange
    }), shallow);

    const navigation = new Navigation(currentLanguage); // Puedes cambiar "es" por "en" para inglés
    const role = "patient"; // Puedes cambiar este valor para probar con diferentes roles



    return (
        <div className="navbar bg-neutral text-neutral-content h-10">
            <div className="navbar-start">
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
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                    {
                                        item.sub_menu && item.sub_items && (
                                            <ul className="p-2">
                                                {item.sub_items.map((subItem, j) => (
                                                    <li key={`${i}-${j}-${subItem.name}`}>
                                                        <Link to={subItem.path}>
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
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="/logo.webp" alt="Logo" className="h-7" />
                </Link>
            </div>
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
                                                            <Link to={subItem.path}>
                                                                {subItem.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        )
                                        :
                                        <Link to={item.path}>
                                            {item.name}
                                        </Link>
                                }

                            </li>
                        ))
                    }
                </ul>
            </div>
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
                                    className="toggle theme-controller"
                                />
                                {/* <input type="checkbox" value="en" className="toggle theme-controller" /> */}
                                <span className="label-text">{navigation.getLanguages()[1]}</span>
                            </label>
                        </li>
                        {
                            navigation.getProfileNavigation().map((item, i) => (
                                <li key={`${i}-${item.name}`} className="capitalize">
                                    <Link to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))
                        }

                        <div className="divider my-1"></div>

                        <li role="button" className="btn btn-sm btn-outline btn-error">
                            {currentLanguage === "es" ? "cerrar sesión" : "logout"}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
