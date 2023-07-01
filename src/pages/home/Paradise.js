import { useLoaderData, Link } from "react-router-dom";

export default function Paradise() {
  const places = useLoaderData();
  const selectedPlace = places[Math.floor(Math.random() * (24)) + 1]

  return (
    <div className="main-explore">
      <div className="explore">
        {

          <div className="explore-image-box" >
            <div className="explore-text">
              <div className="explore-image-title">Place: {selectedPlace.title}</div>
              <div className="explore-image-place">Location: {selectedPlace.place}</div>
            </div>
            <Link to='explore'>
              <div className="explore-image">
                <img src={process.env.PUBLIC_URL + selectedPlace.photo}
                  alt=""
                  className="explore-image-image"
                />
              </div>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}