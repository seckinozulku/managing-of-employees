import Home from "./components/Home";
import EmployeeContextProvider from "./contexts/EmployeeContext";


function App() {

  return (
    <div className="App">
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <EmployeeContextProvider>
              <Home />
            </EmployeeContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
