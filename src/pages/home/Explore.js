import { useLoaderData } from "react-router-dom";
import uuid4 from "uuid4";

export default function Explore() {
  const places = useLoaderData();
  return (
    <div className="main-explore">
      <div className="explore">
        {
          places.map((place) => (
            <div key={place.id} className="explore-image-box" >
              <div className="explore-text">
                <div className="explore-image-title">Place: {place.title}</div>
                <div className="explore-image-place">Location: {place.place}</div>
              </div>
              <div className="explore-image">
                <img
                  src={process.env.PUBLIC_URL + place.photo} alt={place.place}
                  className="explore-image-image"
                />
              </div>
            </div>
          ))
        }
      </div>
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