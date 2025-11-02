import RefForm from "./Components/RefForm/RefForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";
function App() {
  return (
    <>
      <div className="w-6xl mx-auto text-center flex flex-row justify-center items-center content-center">
        <div className="grid grid-cols-3">
          <SimpleForm></SimpleForm>
          <StatefulForm></StatefulForm>
          <RefForm></RefForm>
        </div>
      </div>
    </>
  );
}

export default App;
