import "./Hotel.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import MailList from "../../Components/MailList/MailList";
import Footer from "../../Components/Footer/Footer";
import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaCircleXmark,
  FaLocationDot,
} from "react-icons/fa6";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://picsum.photos/seed/random1/1000",
    },
    {
      src: "https://picsum.photos/seed/random2/1000",
    },
    {
      src: "https://picsum.photos/seed/random3/1000",
    },
    {
      src: "https://picsum.photos/seed/random4/1000",
    },
    {
      src: "https://picsum.photos/seed/random5/1000",
    },
    {
      src: "https://picsum.photos/seed/random6/1000",
    },
  ];

  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {open && (
        <div className="slider">
          <FaCircleXmark className="close" onClick={() => setOpen(false)} />
          <FaCircleArrowLeft
            className="arrow"
            onClick={() => handleMove("l")}
          />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FaCircleArrowRight
            className="arrow"
            onClick={() => handleMove("r")}
          />
        </div>
      )}

      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaLocationDot />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHightlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, idx) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(idx)} src={photo.src} alt="" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-nightstay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
