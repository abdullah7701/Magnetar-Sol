import { ANIMATIONS } from "constants/animations";
import Animation from "../Animation";

const Bubble = ({ coords, duration, fill, r }) => {
  const xVals = coords.filter((_, index) => index % 2 === 0).join(";");
  const yVals = coords.filter((_, index) => index % 2 !== 0).join(";");

  return (
    <circle r={r} fill={fill}>
      <animate
        attributeName="cx"
        values={xVals}
        dur={`${duration}s`}
        repeatCount="indefinite"
      />
      <animate
        attributeName="cy"
        values={yVals}
        dur={`${duration}s`}
        repeatCount="indefinite"
      />
    </circle>
  );
};

export const IntroBubblesWrapper = ({ img, className = "", children }) => {
  return (
    <div className={`relative w-full h-[90vh] bg-mid ${className}`}>
      <div className="absolute w-full h-full opacity-80">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <Bubble
            coords={[177, 23, 185, 80, 150, 78, 152, 44, 177, 23]}
            duration={50}
            fill="#38BDF8"
            r="22"
          />
          <Bubble
            coords={[200, 19, 205, 62, 185, 88, 182, 47, 190, 19, 200, 19]}
            duration={25}
            fill="#F9FAFB"
            r="15"
          />
          <Bubble
            coords={[10, 8, 30, 70, 120, 80, 30, 40, 10, 8]}
            duration={35}
            fill="#38BDF8"
            r="13"
          />
          <Bubble
            coords={[59, 33, 160, 40, 147, 89, 60, 55, 59, 33]}
            duration={35}
            fill="#0284C7"
            r="5.5"
          />{" "}
          <Bubble
            coords={[25, 50, 55, 87, 132, 90, 165, 50, 135, 10, 57, 13, 25, 50]}
            duration={35}
            fill="#F9FAFB"
            r="3"
          />
          <Bubble
            coords={[160, 33, 140, 72, 85, 70, 91, 34, 135, 21, 160, 33]}
            duration={30}
            fill="#F9FAFB"
            r="2.5"
          />
        </svg>
      </div>
      {img && (
        <div className="absolute z-20 w-full h-full flex justify-end items-end">
          <Animation animation={ANIMATIONS.fadeIn}>
            <img
              src={img}
              alt=""
              className="w-[30vw] translate-y-[8vh] max-w-[500px]"
            />
          </Animation>
        </div>
      )}
      {children}
    </div>
  );
};

export const ServiceBubbles = () => {
  return (
    <div className="absolute -z-10 w-full opacity-80 pointer-events-none">
      <svg viewBox="0 0 100 200" className="w-full">
        <Bubble
          coords={[4, 15, 16, 44, 8, 67, -3, 38, 4, 15]}
          duration={50}
          fill="#24DBEF"
          r="5"
        />
        <Bubble
          coords={[65, 71, 83, 98, 65, 103, 62, 86, 65, 71]}
          duration={40}
          fill="#0284C7"
          r="2"
        />
        <Bubble
          coords={[55, 120, 81, 124, 60, 133, 36, 123, 55, 120]}
          duration={40}
          fill="#24DBEF"
          r="2.5"
        />
        <Bubble
          coords={[13, 169, 49, 154, 82, 167, 73, 184, 34, 185]}
          duration={35}
          fill="#24DBEF"
          r="1.5"
        />
      </svg>
    </div>
  );
};
