import "./App.css";
import Create from "./components/create/Create";

function App() {
  return (
    <>
      <div className="main">
        <div>
          <h2>CRUD Operations</h2>
        </div>
        <div>
          <Create />
        </div>
      </div>
    </>
  );
}

export default App;
