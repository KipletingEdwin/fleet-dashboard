

export const VehicleDetails = ({vehicle, onClose }) => {
    if (!vehicle) return null
  return (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl p-6 border-l">
      <button
        onClick={onClose}
        className="text-sm text-gray-500 hover:text-gray-700"
      >
        Close
      </button>

      <h2 className="text-2xl font-bold mt-4">{vehicle.driver_name}</h2>

      <div className="mt-4 space-y-2">
        <p>Status: {vehicle.status}</p>
        <p>Speed: {vehicle.speed} km/h</p>
        <p>Direction: {vehicle.direction}</p>
        <p>Latitude: {vehicle.lat}</p>
        <p>Longitude: {vehicle.lng}</p>
        <p>
          Last Updated:{" "}
          {new Date(vehicle.last_updated).toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
