import HookForm from "./Components/HookForm/HookForm";
import RefForm from "./Components/RefForm/RefForm";
import ReusableForm from "./Components/ReusableForm/ReusableForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";
function App() {
  const handleSignUpSubmit = (data) => {
    console.log('Sign Up', data);
  };
  const handleProfileUpdateSubmit = (data) => {
    console.log('Update Profile', data);
  };
  return (
    <>
      <div className="w-6xl mx-auto text-center flex flex-row justify-center items-center content-center">
        <div className="grid grid-cols-3">
          <SimpleForm></SimpleForm>
          <StatefulForm></StatefulForm>
          <RefForm></RefForm>
          <HookForm></HookForm>
          <ReusableForm
            handleSubmit={handleSignUpSubmit}
            formTitle={"Sign Up"}
            submitText={"Sign Up"}
          ></ReusableForm>
          <ReusableForm
            handleSubmit={handleProfileUpdateSubmit}
            formTitle={"Profile Update"}
            submitText={"Update"}
          ></ReusableForm>
        </div>
      </div>
    </>
  );
}

export default App;
