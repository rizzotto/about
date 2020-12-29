import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import ProgressBar from '../../components/ProgressBar/index'
import './styles.scss';
import Skills from '../../components/Skills/index'

import portuguese from '../../assets/portuguese.svg'
import english from '../../assets/english.svg'
import german from '../../assets/german.svg'
import italian from '../../assets/italian.svg'
import react from '../../assets/react.svg'
import teamwork from '../../assets/teamwork.svg'


export default function App() {


  return (
    <div className="main">
      <Particles>
        <Hero>
          <div className="container">
            <Info />
            <div className="row">
              {cards.map((card, i) => (
                <div className="column">
                  <Card>
                    <div className="card-title">{card.title}</div>
                    {card.description ? 
                      <div className="card-body">{card.description}</div> :
                      <div className="card-body-language">
                        <div className="language">
                          <img src={portuguese} height={50} width={50}/>
                          <ProgressBar percent={100} symbol="🇧🇷" color="#6DA544 " />
                        </div>
                        <div className="language">
                          <img src={english} height={50} width={50}/>
                          <ProgressBar percent={100} symbol="🇺🇸" color="#0052B4" />
                        </div>
                        <div className="language">
                          <img src={german} height={50} width={50}/>
                          <ProgressBar percent={50} symbol="🇩🇪" color="#000" />
                        </div>
                        <div className="language">
                          <img src={italian} height={50} width={50}/>
                          <ProgressBar percent={25} symbol="🇮🇹" color="#D80027" />
                        </div>
                      </div>
                    }
                    <Image ratio={card.imageRatio} src={card.image} />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </Hero>
      </Particles>
    </div>
  );
}

function Card({ children }) {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  const ref = useRef();

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xys: [0, 0, 1],
      // Setup physics
      config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
    };
  });

  return (
    <animated.div
      ref={ref}
      className="card"
      onMouseEnter={() => setHovered(true)}
      onMouseMove={({ clientX, clientY }) => {
        // Get mouse x position within card
        const x =
          clientX -
          (ref.current.offsetLeft -
            (window.scrollX || window.pageXOffset || document.body.scrollLeft));

        // Get mouse y position within card
        const y =
          clientY -
          (ref.current.offsetTop -
            (window.scrollY || window.pageYOffset || document.body.scrollTop));

        // Set animated values based on mouse position and card dimensions
        const dampen = 50; // Lower the number the less rotation
        const xys = [
          -(y - ref.current.clientHeight / 2) / dampen, // rotateX
          (x - ref.current.clientWidth / 2) / dampen, // rotateY
          1.07 // Scale
        ];

        // Update values to animate to
        setAnimatedProps({ xys: xys });
      }}
      onMouseLeave={() => {
        setHovered(false);
        // Set xys back to original
        setAnimatedProps({ xys: [0, 0, 1] });
      }}
      style={{
        // If hovered we want it to overlap other cards when it scales up
        zIndex: isHovered ? 2 : 1,
        // Interpolate function to handle css changes
        transform: animatedProps.xys.to(
          (x, y, s) =>
            `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
        )
      }}
    >
      {children}
    </animated.div>
  );
}

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

function Hero({ children }) {
  return (
    <div className="hero">
      <div className="hero-body">{children}</div>
    </div>
  );
}

function Image({ ratio, src }) {
  return (
    <div className="image-container">
      {/* <div className="image-inner-container"> */}
        <div
          className="ratio"
          style={{
            paddingTop: ratio * 100 + '%'
          }}
        >
          <div className="ratio-inner">
            <img src={src} />
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="info">
        Hi, I'm Guilherme, known as Rizzotto
    </div>
  );
}

const cards = [
  {
    title: 'Trajectory',
    description:
      'Create a React web app in the fraction of the time using our library of themes and building blocks. We have everything from navbars and content grids to authentication flows and commenting systems. New blocks are added every week.',
    image: 'https://6jlvz1j5q3.csb.app/undraw_collection.svg',
    imageRatio: 784 / 1016
  },
  {
    title: 'Skills ⚡️',
    description: <Skills />,
    image: teamwork,
    imageRatio: 839 / 1133
  },
  {
    title: 'Languages',
    languages: "true",
  },
  {
    title: 'Programming languages',
    description:
      "Since 2018 I've been working with software development, from infrastructure to frontend. After experiencing many areas, frontend is one of the most funny things to do into this world. Now, I work directly with React and I'm always trying to learn something new!",
    image: react,
    imageRatio: 0.20
  }
];

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
