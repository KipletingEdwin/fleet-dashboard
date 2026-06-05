
import { useState } from "react";
import { VehicleList } from "../components/VehicleList";
import { MapView } from "../components/MapView";
import { VehicleDetails } from "../components/VehicleDetails";


export const Dashboard = ({vehicles}) => {
    const [selected, setSelected] = useState(null);


  return (
        <div className="flex h-screen" >
      {/* Left: Vehicle List */}
      <div className="w-1/3">
        <VehicleList vehicles={vehicles} onSelect={setSelected} />
      </div>

      {/* Center: Map/Grid */}
      <div className="flex-1">
        <MapView vehicles={vehicles} />
      </div>

      {/* Right: Details Drawer */}
      <VehicleDetails vehicle={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
