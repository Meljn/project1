import "./Events.css"
import Event_card from "./Event_card.jsx"
import {events} from "./data"


export default function Events() {
    return (
        <div className="events_desktop">
            <div className="events_intro">Предстоящие события</div>
            <div className="events_cards">
                {events.map((event, i) => (
                    <Event_card key = {i} {...event} />
                ))}
            </div>
            <div className="events_link">Показать все курсы {">"}</div>
        </div>
    )
}