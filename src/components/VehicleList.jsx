
import { VehicleCard } from "./VehicleCard"

export const VehicleList = ({vehicles, onSelect}) => {
  return (
        <div className="h-full overflow-y-auto space-y-3 p-4 bg-gray-50 border-r">
      {vehicles.map((v) => (
        <VehicleCard key={v.id} vehicle={v} onSelect={onSelect} />
      ))}
    </div>
  )
}
