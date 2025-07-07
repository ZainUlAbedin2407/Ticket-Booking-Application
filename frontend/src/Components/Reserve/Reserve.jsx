import { FaCircleXmark } from "react-icons/fa6";
import "./Reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext.js";
const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const getDatesRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    const dates = [];

    while (data <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  console.log(getDatesRange(dates[0].startDate, dates[0].endDate));
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = () => {};

  // console.log(selectedRooms);
  return (
    <div className="reserve">
      <div className="rContainer">
        <FaCircleXmark className="rClose" onClick={() => setOpen(false)} />
        <span>Select your rooms: </span>
        {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc"> {item.desc} </div>
              <div className="rMax">
                Max People: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice"> {item.price} </div>
            </div>
            {item.roomNumbers.map((roomNumber) => (
              <div className="room" key={roomNumber._id}>
                <label>{roomNumber.number}</label>
                <input
                  type="checkbox"
                  value={roomNumber._id}
                  onChange={handleSelect}
                />
              </div>
            ))}
            <button className="rButton" onClick={handleClick}>
              Reserve Now!
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reserve;
