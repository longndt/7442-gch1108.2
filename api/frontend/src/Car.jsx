import { useEffect, useState } from "react";
import axios from "axios";

function Car() {
  const backendURL = "https://backend-0j7w.onrender.com/car";
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(backendURL);
        setCars(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container col-md-8 text-center mt-3">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colSpan={3} className="text text-danger h1 bg-info">
              LIST OF CARS
            </th>
          </tr>
          <tr>
            <th>Car Name</th>
            <th>Car Brand</th>
            <th>Car Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id}>
              <td>{car.name}</td>
              <td>{car.brand}</td>
              <td>${car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Car;
