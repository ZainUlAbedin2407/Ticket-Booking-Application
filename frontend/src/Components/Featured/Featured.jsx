import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://picsum.photos/seed/random1/1000"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://picsum.photos/seed/random1/1000"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Ronin</h1>
          <h2>143 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://picsum.photos/seed/random1/1000"
          alt=""
          className="featuredImg"
        />

        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>653 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
