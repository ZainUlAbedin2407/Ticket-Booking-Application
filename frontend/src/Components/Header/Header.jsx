import { FaBed, FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import "./Header.css";
import { FaCalendarDays, FaPerson } from "react-icons/fa6";
import { useContext, useState } from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
const Header = ({ type }) => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const [openNav, setOpenNav] = useState(false);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("hotels", { state: { destination, dates, options } });
  };
  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerNavWrapper">
          <div className="hamburger" onClick={() => setOpenNav(!openNav)}>
            ☰
          </div>

          <div className={`headerList ${openNav ? "showNav" : ""}`}>
            <div className="headerListItem active">
              <FaBed />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FaPlane />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FaCar />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <FaBed />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FaTaxi />
              <span>Airport Taxis</span>
            </div>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels - unlock instant savingsof 10% or
              more with a free Techture booking account
            </p>
            {!user && <button className="headerBtn">Sign in / Register</button>}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FaBed className="headerIcon" size={26} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) =>
                    setDestination(e.target.value) === null
                      ? setDestination(e.target.value)
                      : ""
                  }
                />
              </div>
              <div className="headerSearchItem">
                <FaCalendarDays className="headerIcon" size={20} />
                <span
                  onClick={() => setOpenCalendar(!openCalendar)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openCalendar && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FaPerson className="headerIcon" size={26} />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {" "}
                          {options.room}{" "}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
