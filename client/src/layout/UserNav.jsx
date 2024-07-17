import { Link } from 'wouter'
import useAuthStore from '../store/auth-store'
import { shallow } from 'zustand/shallow'

const UserNav = ({ currentLanguage, handleLanguageChange, navigation }) => {
    const { isLogged, logout } = useAuthStore((state => ({
        isLogged: state.isLogged, logout: state.logout
    })), shallow)

    if (isLogged) return (
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
    )
}

export default UserNav