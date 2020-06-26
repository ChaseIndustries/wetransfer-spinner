import React from "react";
import styled from "styled-components";

const fillColor = "#409fff";
const bgColor = "#9e9e9e";
const percentSize = "0.5em";

const SpinnerText = styled.text`
  font-size: 4em;
  font-weight: 600;
`;

const SpinnerTextPercent = styled.tspan`
  font-size: ${percentSize};
  fill: ${bgColor};
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.5em 1em;
  display: inline-block;
  margin-top: 1em;
  width: ${({ width }) => `${width}px;`};
`;
const Spinner = ({ id = "spinner", progress = 0, d = 200 }) => {
  const strokeWidth = 10;
  const element = React.useRef();
  const [spinning, setSpinning] = React.useState(true);
  const r = d / 2 - strokeWidth;
  const c = Math.PI * 2 * r;
  const stopTheSpinning = () => {
    if (spinning) {
      element.current.pauseAnimations();
    } else {
      element.current.unpauseAnimations();
    }
    setSpinning(!spinning);
  };
  const circleSvg = (
    <svg
      id={id}
      ref={element}
      width={d}
      height={d}
      viewBox={`0 0 ${d} ${d}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <SpinnerText
        dominantBaseline="middle"
        textAnchor="middle"
        x={d / 2}
        y={d / 1.9}
      >
        {parseInt(progress * 100, 10)}
        <SpinnerTextPercent dy={`-${percentSize}`}>%</SpinnerTextPercent>
      </SpinnerText>
      <circle
        strokeOpacity="0.5"
        fill="none"
        strokeWidth={strokeWidth}
        stroke={bgColor}
        cx={d / 2}
        cy={d / 2}
        r={r}
      />
      <circle
        cx={d / 2}
        cy={d / 2}
        r={d / 2 - strokeWidth}
        fill={fillColor}
        fillOpacity="0"
        strokeWidth={strokeWidth}
        stroke={fillColor}
        strokeDasharray={c}
        strokeLinecap="round"
        strokeDashoffset={c - progress * c}
        id="spinner"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
  return (
    <SpinnerWrapper>
      {circleSvg}
      <Button width={d} onClick={stopTheSpinning}>
        {spinning ? "Stop" : "Start"} spinning
      </Button>
    </SpinnerWrapper>
  );
};

export default Spinner;
