import "./Form.css";
import Button from "../Button/Button.jsx";

export default function Form() {
  return (
    <div className="form">
      <div className="form_question">Задать вопрос</div>
      <div className="form_description">
        Заполните форму и наш оператор свяжеться с вами для консультации.
      </div>
      <form action="">
        <input
          type="text"
          className="input1"
          placeholder="Как к вам обращаться?"
        />
        <div className="mini_forms">
          <input type="text" className="input2" placeholder="Телефон" />
          <input type="text" className="input3" placeholder="Email" />
          <Button>Отправить</Button>
        </div>
      </form>
    </div>
  );
}
