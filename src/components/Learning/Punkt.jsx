import "./Learning.css";
const icons = [
  "/public/icon-earth.svg",
  "/public/icon-barbeque.svg",
  "/public/icon-security shield.svg",
  "/public/icon-fork.svg",
];

export default function Punkt({ children }, props) {
  return (
    <div className="programm_punkt">
      <div className="punkt">{children}</div>
    </div>
  );
}
