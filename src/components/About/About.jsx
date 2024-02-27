import "./About.css";

export default function About() {
  return (
    <div className="about">
      <img src="/public/about-picture.png" alt="" className="about_picture"/>
      <div className="about_info">
        <div className="about_header">О нас</div>
        <div className="about_text">
          <div className="text_punkt">
            <div className="punkt_header">История компании</div>
            <div className="punkt_text">
              Наше кулинарное начало — в 2000 году мы открыли свой первый
              ресторан, а в 2005 году расширились до кулинарной школы, чтобы
              делиться нашей страстью к еде со всем миром.
            </div>
          </div>
          <div className="text_punkt">
            <div className="punkt_header">Наша миссия</div>
            <div className="punkt_text">
              Погрузить вас в мир гастрономии, научить создавать кулинарные
              шедевры и открыть секреты шеф-поваров.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
