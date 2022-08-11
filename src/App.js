import logo from "./logo.svg";
import "./App.css";
import DemoClass from "./DemoComponent/DemoClass";
import DemoFunction from "./DemoComponent/DemoFunction";
import Ex_Layout from "./Ex_Layout/Ex_Layout";

function App() {
  return (
    <div className="App">
      {/* <DemoClass></DemoClass> */}

      <DemoFunction />
      <Ex_Layout />
    </div>
  );
}

export default App;
