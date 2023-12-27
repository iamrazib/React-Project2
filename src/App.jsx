import { Card } from "./components/Card";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Tab from "./components/Tab";
import { Timeline } from "./components/Timeline";

function App() {
  
  return (
    <>
      <h1 className="text-center text-3xl bg-red-200">Project 2</h1>
      <div className="flex mt-3 space-x-4 justify-center">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Timeline />
      </div>
      <div className="flex mt-5 mb-7 space-x-4 justify-center">
        <Steps />
      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Tab />
      </div>
      <div className="flex mt-5 mb-5 space-x-4 justify-center">
        <Stats />
      </div>
    </>
  );
}

export default App
