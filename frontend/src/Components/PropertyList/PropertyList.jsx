import useFetch from "../../hooks/useFetch";
import "./PropertyList.css";
const PropertyList = () => {
  const { data, loading, error } = useFetch("hotels/countByType");

  const images = [
    "https://picsum.photos/seed/random1/1000",
    "https://picsum.photos/seed/random2/1000",
    "https://picsum.photos/seed/random3/1000",
    "https://picsum.photos/seed/random4/1000",
    "https://picsum.photos/seed/random5/1000",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            images.map((img, idx) => (
              <div className="pListItem" key={idx}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[idx]?.type}</h1>
                  <h2>
                    {data[idx]?.count} {data[idx]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
