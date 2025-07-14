import { useState } from "react";
import "./App.css";

function App() {
  const [showCard, setShowCard] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    `Hi Ms.Gayyali`,
    `ee website tho ne irriate chesna kada...so alane apologise kuda chestunna. was supposed to send this yesterday night..but asal baale🤒 ani podukunna`,
    `Last week koncham ekkuve I annoyed u...I'm soo sooryyyy`,
    `asalu last week I seriously thought ee week asalu gelakudadhu ani...still it happened😅...`,
    `Ala koppadi matladakunte elaa cheppu...`,
    `I dont want to annoy u soo much and make u angry....I just want to annoy u a little to disturb u and get ur attention anthe...`,
    `em chesthe nee kopam taggutundhi cheppu?? Polar bear sundae and guava sorbet konistha🙏🙏🙏`,
    `ninnu disturb chesthe it is fun... but kopam osthe kaadhu(ngl..it's kinda cute when u talk while angry...but asal mataladatledhu gaa...just saying...I dont want u to be angry)`,
    `I'm really sorry`,
    `naatho matladuuuuuu pichiiii`,
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container">
      <img
        src="https://i0.wp.com/www.georgiaartwork.com/wp-content/uploads/2023/09/light-envelopes_0004_Candy-Pink.png?fit=2200%2C2800&ssl=1"
        alt="Envelope"
        className="envelope-img"
        onClick={() => setShowCard(true)}
      />

      <p className="hint-text">Tap on the envelope to open</p>

      {showCard && (
        <div className="letter-stack">
          {pages.map((text, index) => (
            <div
              key={index}
              className={`letter-card page-${index + 1} ${
                index < currentPage ? "hidden" : ""
              }`}
            >
              <div className="letter-card-text">
  {pages[currentPage]}
</div>
              {index === currentPage && index < pages.length - 1 && (
                <button className="next-btn" onClick={handleNext}>
                  Next →
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
