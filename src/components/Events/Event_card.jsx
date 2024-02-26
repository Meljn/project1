import "./Events.css";

export default function Event_card(props) {
  console.log();
  return (
    <div className="card">
      <button className="card_but">{props.prop1}</button>
      <div className="card_content">
        <div className="content_heading">
          <div className="heading_days">{props.prop2}</div>
          <div className="heading_description">{props.prop3}</div>
        </div>
        <div className="content_details">
          <div className="details_dif">Сложность</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
