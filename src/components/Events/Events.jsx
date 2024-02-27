import "./Events.css";
import Event_card from "./Event_card.jsx";
import { events } from "./data";
import { useState } from "react";

export default function Events() {
    const [eventCount, setEventCount] = useState(3);
  return (
    <div className="events_desktop">
      <div className="events_intro">Предстоящие события</div>
      <div className="events_cards">
        {events.map((event, i) => {
            return eventCount > i ? (
                <Event_card key = {i} {...event} />
            ):null
        })}
      </div>
      <button className="events_link"
      onClick ={() => {
        if (events.length > eventCount) setEventCount(events.length);
        else setEventCount(3);
      }}>
        {events.length > eventCount ? "Показать все курсы >" : "Скрыть"}
      </button>
    </div>
  );
}
