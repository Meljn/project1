import Button from "../Button/Button.jsx"
import "./Hero_desktop.css"

export default function Hero_desktop() {
    return (
        <div className="hero_desktop">
            <div className="course_info">
                <div className="first_info">Исследуйте вкусы Кавказа</div>
                <div className="second_info">В сопровождении опытных шеф-поваров вы откроете для себя богатство кавказской кухни и научитесь готовить традиционные блюда.</div>
                <Button>Подробнее о курсе</Button>
            </div>
        </div>
    )
}