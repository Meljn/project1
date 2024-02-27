import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Hero_desktop from "./components/Hero/Hero_desktop.jsx";
import Events from "./components/Events/Events.jsx";
import Form from "./components/Form/Form.jsx";
import Learning from "./components/Learning/Learning.jsx";
import About from "./components/About/About.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero_desktop />
      <Events />
      <Form />
      <Learning />
      <About />
      <Gallery />
    </>
  );
}
