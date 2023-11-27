import "./App.css";
import Card from "./components/Card";
import Template_Card from "./components/Template_Card";

function App() {


  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Learing
      </h1>
      <Card btnText="Buy Now Hurry" />
      <Card btnText="Don't Buy " />
      <Template_Card text="About Macbook"/>
      <Template_Card text="About Dell inspiron"/>

    </>
  );
}

export default App;
