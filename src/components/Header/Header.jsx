import "./Header.css"
import logo from "/logo.svg"


export default function Header() {
    const menu = ["Гастротуры", "Бронирование", "О нас", "Отзывы", "Фотографии", "Контакты"] 
    return (

        <header>
            <img src={logo} alt="" className="header_logo"/>
            <ul className="header_menu">
                {menu.map((men) => (
                    <li className="menu_punkts">{men}</li>
                ))}
            </ul>
            <div className="header_number">8 800 725-32-32</div>
        </header>
    )
}