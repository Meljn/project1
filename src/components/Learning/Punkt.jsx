import "./Learning.css";

export default function Punkt({children}) {
  return (
    <div className="programm_punkt">
      <div className="punkt">
        {children}
      </div>
      <img src="/public/point.svg" alt="" className="point" />
    </div>
  );
}
