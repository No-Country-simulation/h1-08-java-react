import { Link } from 'wouter'
import useAuthStore from '../../store/auth-store'
import { shallow } from 'zustand/shallow'

const DesktopNav = ({ navigation }) => {
    const { isLogged } = useAuthStore(state => ({
        isLogged: state.isLogged
    }), shallow)

    const role = "patient";

    if (isLogged) return (
        < div className="navbar-center items-center hidden md:flex" >
            <ul className="menu menu-horizontal px-1 capitalize text-base">
                {
                    navigation.getNavigation(role).map((item, i) => (
                        <li key={`${i}-${item.name}`}>
                            {
                                item.sub_menu
                                    ?
                                    item.sub_items && (
                                        <details className="z-10">
                                            <summary>{item.name}</summary>
                                            <ul className="p-2">
                                                {item.sub_items.map((subItem, j) => (
                                                    <li
                                                        key={`${i}-${j}-${subItem.name}`}
                                                        className={`${subItem.path == "#" ? "disabled" : ""}`}
                                                    >
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
        </div >
    )
}

export default DesktopNav