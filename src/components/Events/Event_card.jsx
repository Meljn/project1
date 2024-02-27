import "./Events.css";

export default function Event_card(props) {
  return (
    <div className="card">
      <img src={props.bg_image} alt="" className="card_image"/>
      <button className="card_but">{props.prop1}</button>
      <div className="card_content">
        <div className="content_heading">
          <div className="heading_days">
            <img src="/public/icon-calendar.svg" alt="" className="calendar"/>
            {props.prop2}
          </div>
          <div className="heading_description">{props.prop3}</div>
        </div>
        <div className="content_details">
          <div className="details_dif">Сложность</div>
          <img src={props.dif_image} alt="" className="stars"/>
        </div>
      </div>
    </div>
  );
}
