import { useLoaderData } from "react-router-dom";
import uuid4 from "uuid4";

export default function Explore() {
  const places = useLoaderData();
  return (
    <div className="main-explore">
      {
        places.map((place, count = 1) => (
          <div key={uuid4()}>
            <span>{count}</span>
            <h2>{place.title}</h2>
            <h2>{place.place}</h2>
            <img src={place.photo} alt="" />
          </div>
        ))
      }
    </div>
  );
}



// placeLoader Function 

export const placeLoader = async () => {
  const res = await fetch('http://localhost:4000/places');
  if (!res.ok) {
    throw Error(`Couldn't Found the page`);
  }
  return res.json();
}