import useFetch from "../../hooks/useFetch";
import "./Featured.css";
const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=Karachi,Lahore,Multan"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://picsum.photos/seed/random1/1000"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Karachi</h1>
              <h2>{data[0]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://picsum.photos/seed/random2/1000"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitles">
              <h1>Lahore</h1>
              <h2>{data[1]} Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://picsum.photos/seed/random3/1000"
              alt=""
              className="featuredImg"
            />

            <div className="featuredTitles">
              <h1>Multan</h1>
              <h2>{data[2]} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
