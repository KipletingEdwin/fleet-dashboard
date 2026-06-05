
import { Dashboard } from "./pages/Dashboard";
import { useVehicles } from "./hooks/useVehicles";

function App() {
  const vehicles = useVehicles();


  
  return (
    <div className="bg-background min-h-screen">
    <Dashboard vehicles={vehicles} />
    </div>
  );
}

export default App;
