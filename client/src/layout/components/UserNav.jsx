import { Link } from 'wouter'
import useAuthStore from '../../store/auth-store'
import { shallow } from 'zustand/shallow'
import LanguageSwitcher from './LanguageSwitcher'
import useLanguage from '../../hooks/useLanguage'
import LogoutModal from './LogoutModal'

const UserNav = ({ navigation }) => {
    const currentLanguage = useLanguage()

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
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <ul
                    tabIndex={2}
                    className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] w-30 p-2 shadow capitalize right-0 gap-1">
                    <LanguageSwitcher currentLanguage={currentLanguage} es={navigation.getLanguages()[0]} en={navigation.getLanguages()[1]} />
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

                    <LogoutModal
                        currentLanguage={currentLanguage}
                        logout={logout}
                    />
                </ul>
            </div>

        </div>
    )
}

export default UserNav