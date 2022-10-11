import React, {useState, useEffect} from 'react'
import AnimatedNumber from "animated-number-react";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(true);
  const formatValue = (value) => value.toFixed(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const listenToScroll = () => {
    let hideTill = 400;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > hideTill) {
      isVisible && setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div className="flex flex-col h-full md:h-screen m-14 md:m-30 lg:mx-80">
      <div className="flex flex-col text-center mb-24">
        <p className="text-base md:text-2xl">
          Es zahlt sich aus, einen genaueren Blick auf die derzeitige Situation
          in der Mobilität zu werfen. Nur so können Angebote diverser und
          nachhaltiger gestaltet werden!
        </p>
        <p className="underline decoration-pink text-4xl md:text-5xl m-5">Faktencheck</p>
      </div>

      <div className="flex justify-between justify-items-start flex-col md:flex-row flex-wrap text-base text-left">
        <div className="md:w-1/2 lg:w-1/4">
          {isVisible && <h1 className="text-base md:text-3xl mb-2 text-pink pt-4"><AnimatedNumber value="30" formatValue={formatValue} duration="2500"/>%</h1> }
          <h2 className="font-bold	text-sm">DER CO2-EMISSIONEN</h2>
          <p className="text-gray-500">
            sind global betrachtet auf den Verkehr zurückzuführen
          </p>
        </div>

        <div className="md:w-1/2 lg:w-1/4 px-1">
        {isVisible && <h1 className="text-base md:text-3xl mb-2 text-pink pt-4"><AnimatedNumber value="62" formatValue={formatValue} duration="2500"/>%</h1> }
          <h2 className="font-bold	text-sm">DER ZUGELASSENEN AUTOS</h2>
          <p className="text-gray-500">
            sind in Deutschland auf Männer zugelassen. Frauen setzen auf den
            öffentlichen Verkehr
          </p>

        </div>

        <div className="md:w-1/2 lg:w-1/4 px-1">
        {isVisible && <h1 className="text-base md:text-3xl mb-2 text-pink pt-4"><AnimatedNumber value="18" formatValue={formatValue} duration="2500"/>%</h1>}
          <h2 className="font-bold	text-sm">DER CAR-SHARING USER</h2>
          <p className="text-gray-500">
            sind Frauen, ein Potential das durch mehr Praktikabilität gestärkt
            werden kann
          </p>
        </div>

        <div className="md:w-1/2 lg:w-1/4">
        {isVisible && <h1 className="text-base md:text-3xl mb-2 text-pink pt-4"><AnimatedNumber value="71" formatValue={formatValue} duration="2500"/>%</h1> }
          <h2 className="font-bold	text-sm">HÖHERES RISIKO</h2>
          <p className="text-gray-500">
            für Frauen bei Verkehrsunfällen verletzt zu werden, denn Angebote
            sind nicht auf sie zugeschnitten
          </p>
        </div>

      </div>
    </div>
  );
};

export default Statistics;
