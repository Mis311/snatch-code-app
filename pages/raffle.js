import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTransition, animated } from "react-spring";
import shuffle from "lodash/shuffle";
import Confetti from "react-confetti";

import data from "./data";
// import "././App.css";
import HeadingImage from "../public/heading.svg";
import Play from "../public/play.svg";
import Reshuffle from "../public/reshuffle.svg";
import Replay from "../public/replay.svg";

function App() {
  const [names, setNames] = useState(data);
  const [initialLoad, setInitialLoad] = useState(false);
  const [windowHeight, setWindowHeight] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wraffling, setWraffling] = useState(false);
  const confettiWrapper = useRef(null);
  const height = 60;
  const transitions = useTransition(
    // dont really understand why we have to work on the data and still transition yet
    names.map((data, i) => ({ ...data, y: 0.5 * i })),
    (d) => d.name,
    {
      from: { position: "initial", opacity: 0 },
      leave: {
        height: height - height * 0.2,
        opacity: 0,
      },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );
  function startRaffle() {
    if (names.length <= 1) {
      setWraffling(true);
      setShowConfetti(true);
      return;
    }
    const randomIndex = Math.floor(Math.random() * names.length);
    // if the current name is not the same as the name that we currently on then it will be added to the array
    const filterOutNames = names.filter((name) => name !== names[randomIndex]);
    setNames(filterOutNames);
    setInitialLoad(true);
  }

  function restartRaffle() {
    setInitialLoad(false);
    setNames(data);
    setWraffling(false);
    setShowConfetti(false);
  }

  useEffect(() => {
    if (initialLoad) {
      const filteringTimer = setTimeout(() => {
        startRaffle();
      }, 700);
      //clean up function
      return () => {
        clearTimeout(filteringTimer);
      };
    }
  }, [initialLoad, names, startRaffle]);

  useEffect(() => {
    setWindowHeight(confettiWrapper.current.clientHeight);
    setWindowWidth(confettiWrapper.current.clientWidth);
  }, []);

  return (
    <div className="container" ref={confettiWrapper}>
      <div className="raffle-header">
        <Image className="banner-image" src={HeadingImage} alt="heading logo" />
        {!initialLoad && (
          <div className="raffle-header__buttons">
            <button className="button-primary" onClick={startRaffle}>
              <Image src={Play} alt="heading logo" />
              Start Raffle
            </button>
            <button
              className="button-outline"
              onClick={() => setNames(shuffle(names))}
            >
              <Image src={Reshuffle} alt="heading logo" />
              Shuffle
            </button>
          </div>
        )}
      </div>
      {wraffling && (
        <Confetti
          recycle={showConfetti}
          numberOfPieces={80}
          width={windowWidth}
          height={windowHeight}
        />
      )}
      <div className="raffle-names">
        {transitions.map(({ item, props: { y, ...rest }, index }) => (
          <animated.div
            className="raffle-listnames"
            key={index}
            style={{
              transform: y.interpolate((y) => `translate3d(0,${y}px,0)`),
              ...rest,
            }}
          >
            <div className="raffle-namelist">
              <span>{item.name}</span>
            </div>
          </animated.div>
        ))}
      </div>
      <div>
        {showConfetti && (
          <div className="raffle-ends">
            <h3>Go get it, you've got what it takes!!!</h3>
            <button className="button-outline" onClick={restartRaffle}>
              <Image src={Replay} alt="heading logo" />
              Replay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
