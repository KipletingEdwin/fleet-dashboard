import { useEffect, useState } from "react"
import { api } from "../utils/api";


export const useVehicles = () => {

    const [vehicles, setVehicles] = useState([]);

    // Load Initial Data
    useEffect(() => {
        api.get("/vehicles")
        .then((res) => setVehicles(res.data))
    }, [])

    // Live updates every 1 second 
    useEffect(() => {
        const interval = setInterval(() => {
            api.get("/vehicles/live")
            .then((res) => setVehicles(res.data))
        }, 1000)

        return() => clearInterval(interval)
    }, [])



  return vehicles

}
