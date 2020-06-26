import React from "react";
import Spinner from "./Spinner";
import "./styles.css";

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const cycle = () => {
    const duration = 3000;
    for (let i = 0; i <= 100; i += 1) {
      setTimeout(() => {
        setProgress(i / 100);
        if (i === 100) {
          setTimeout(() => {
            setProgress(0);
            cycle();
          }, 1000);
        }
      }, duration * (i / 100));
    }
  };
  React.useEffect(cycle, []);
  return (
    <div className="App">
      <Spinner progress={progress} />
    </div>
  );
}
