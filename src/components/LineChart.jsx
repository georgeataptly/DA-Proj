import { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist-min";

function LineChart() {
  const plotRef = useRef(null);

  useEffect(() => {
    if (plotRef.current) {
      Plotly.newPlot(plotRef.current, [{ y: [1, 2, 3] }], {
        width: 600,
        height: 400,
      });
    }
  }, []); // Empty dependency array ensures this runs once after initial render

  return <div ref={plotRef}></div>;
}

export default LineChart;
