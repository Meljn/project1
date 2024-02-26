import "./Learning.css";
import Punkt from "./Punkt";

export default function Learning() {
  return (
    <div className="learning">
      <div className="learning_main">
        <div className="learning_main_header">Обучение</div>
        <div className="learning_main_info">
          Обучение проводится квалифицированными шеф-поварами, имеющими опыт
          работы в различных кухнях мира, включая Кавказскую, Крымскую,
          Индийскую, Европейскую и другие.
        </div>
      </div>
      <div className="learning_programm">
        <div className="learning_programm_header">Программа мастер-классов</div>
        <div className="learning_programm_punkts">
          <div className="icon_and_punkt">
            <img src="/public/icon-earth.svg" alt="" className="punkt_icon" />
            <Punkt>Изучение мировых кулинарных традиций и трендов</Punkt>
            <img src="/public/point.svg" alt="" className="point" />
          </div>
          <div className="icon_and_punkt">
            <img
              src="/public/icon-barbeque.svg"
              alt=""
              className="punkt_icon"
            />
            <Punkt>Обучение использованию кулинарного оборудования</Punkt>
            <img src="/public/point.svg" alt="" className="point" />
          </div>
          <div className="icon_and_punkt">
            <img
              src="/public/icon-security shield.svg"
              alt=""
              className="punkt_icon"
            />
            <Punkt>
              Семинары по устойчивой кулинарии и пищевой безопасности
            </Punkt>
            <img src="/public/point.svg" alt="" className="point" />
          </div>
          <div className="icon_and_punkt">
            <img src="/public/icon-fork.svg" alt="" className="punkt_icon" />
            <Punkt>Объяснение тонкостей кулинарных процессов</Punkt>
            <img src="/public/point.svg" alt="" className="point" />
          </div>
          <img src="/public/Line 1.svg" alt="" className="line" />
        </div>
      </div>
    </div>
  );
}
