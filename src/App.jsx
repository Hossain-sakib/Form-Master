import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";
function App() {
  return (
    <>
      <div className="w-6xl mx-auto text-center flex flex-row justify-center items-center content-center">
        <SimpleForm></SimpleForm>
        <StatefulForm></StatefulForm>
      </div>
    </>
  );
}

export default App;
