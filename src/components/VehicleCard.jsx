

export const VehicleCard = ({vehicle, onSelect}) => {
  return (
    <div
      onClick={() => onSelect(vehicle)}
      className="p-4 bg-white rounded-lg shadow hover:shadow-md cursor-pointer transition"
    >
      <h2 className="font-semibold text-lg">{vehicle.driver_name}</h2>
      <p className="text-sm text-gray-600">Status: {vehicle.status}</p>
      <p className="text-sm text-gray-600">Speed: {vehicle.speed} km/h</p>
      <p className="text-sm text-gray-600">
        Updated: {new Date(vehicle.last_updated).toLocaleTimeString()}
      </p>
    </div>
  )
}
