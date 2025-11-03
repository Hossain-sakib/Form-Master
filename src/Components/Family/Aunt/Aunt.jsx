import Cousin from "../Cousin/Cousin";


const Aunt = () => {

  return (
    <div className="p-2 border-2 rounded-lg border-amber-400">
      <h2 className="text-center">Aunt</h2>
      <div className="grid grid-cols-3 p-1 gap-4">
        <Cousin name={"Cousin-4"}></Cousin>
        <Cousin name={"Cousin-5"}></Cousin>
        <Cousin name={"Cousin-6"}></Cousin>
      </div>
    </div>
  );
};

export default Aunt;
