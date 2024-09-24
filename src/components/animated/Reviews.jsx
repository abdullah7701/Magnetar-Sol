import { ANIMATIONS } from "constants/animations";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Star from "resources/icons/star.svg";
import Reviewer from "resources/images/reviewer.png";
import Reviewer2 from "resources/images/reviewer2.png";
import Animation from "./Animation";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  // Convert angles to polar coordinates
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  // Determine if the arc should be large or small (greater than 180 degrees)
  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  // Create the 'd' attribute that only draws the arc (no lines to center)
  var d = [
    "M",
    start.x,
    start.y, // Move to the start point of the arc
    "A",
    radius,
    radius,
    0,
    arcSweep,
    0,
    end.x,
    end.y, // Draw the arc from start to end
  ].join(" ");

  return d;
}

export const Review1 = ({ className, start = 220, length = 110 }) => {
  const rangeRef = useRef(start);
  const intervalRef = useRef(null);

  const reviewRef = useRef(null);

  const curveRef = useRef(null);

  const isInView = useInView(reviewRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (!isInView || intervalRef.current) return;
    curveRef.current &&
      curveRef.current.setAttribute(
        "d",
        describeArc(
          120,
          120,
          100,
          start + length / 2 - (rangeRef.current - start) / 2,
          start + length / 2 + (rangeRef.current - start) / 2
        )
      );
    setTimeout(
      () =>
        (intervalRef.current = setInterval(() => {
          if (rangeRef.current < start + length) {
            rangeRef.current += 1;
            curveRef.current &&
              curveRef.current.setAttribute(
                "d",
                describeArc(
                  120,
                  120,
                  100,
                  start + length / 2 - (rangeRef.current - start) / 2,
                  start + length / 2 + (rangeRef.current - start) / 2
                )
              );
          } else intervalRef.current && clearInterval(intervalRef.current);
        }, 1)),
      1000
    );
  }, [isInView]);

  return (
    <div
      className={`w-[600px] h-[200px] relative ${className}`}
      ref={reviewRef}
    >
      <div className="absolute z-30 w-40 h-40 left-10 top-10 bg-[#A6E0EE] rounded-full flex justify-center items-center">
        <img src={Reviewer} alt="" className="w-36 h-36 pb-1" />
      </div>
      <svg className="absolute z-20 w-[240px] h-[240px]">
        <path
          ref={curveRef}
          fill="none"
          stroke="#A6E0EE"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute z-10 w-96 h-40 left-44 top-10 flex items-center">
        <Animation delay={1} animation={ANIMATIONS.leftGrow}>
          <div className="h-24 bg-[#A6E0EE] rounded-xl overflow-hidden">
            <Animation
              delay={2}
              animation={ANIMATIONS.fadeIn}
              className="text-primary py-2"
            >
              <div className="flex ml-6 items-center">
                <div className="px-3 py-2 rounded bg-white flex gap-2 h-fit mr-2">
                  {[1, 2, 3, 4, 5].map(() => (
                    <img src={Star} className="w-5 h-5" alt="" />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">
                    Roman Jay
                  </div>
                  <div className="text-xs font-medium leading-tight">
                    CEO, Xeven solutions
                  </div>
                </div>
              </div>
              <div className="ml-6 mt-2 font-semibold leading-tight">
                Lorem ipsum dolor sit amet, consur adipiscing elit, sed do
                eiusmod tempor 
              </div>
            </Animation>
          </div>
        </Animation>
      </div>
      <Animation className="absolute top-10 left-60" delay={2}>
        <div className="w-5 h-5 rounded-full bg-white bg-opacity-40"></div>
      </Animation>
      <Animation
        className="absolute top-44 left-96"
        delay={2}
        animation={ANIMATIONS.fadeInDown}
      >
        <div className="w-3 h-3 rounded-full bg-white bg-opacity-40"></div>
      </Animation>
    </div>
  );
};

export const Review2 = () => {
  const length = 90;
  const start = 0;

  const rangeRef = useRef(start);
  const intervalRef = useRef(null);

  const reviewRef = useRef(null);

  const curveRef = useRef(null);

  const isInView = useInView(reviewRef, {
    once: true,
    margin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    if (!isInView || intervalRef.current) return;
    curveRef.current &&
      curveRef.current.setAttribute(
        "d",
        describeArc(
          120,
          120,
          100,
          start + length / 2 - (rangeRef.current - start) / 2,
          start + length / 2 + (rangeRef.current - start) / 2
        )
      );
    setTimeout(
      () =>
        (intervalRef.current = setInterval(() => {
          if (rangeRef.current < start + length) {
            rangeRef.current += 1;
            curveRef.current &&
              curveRef.current.setAttribute(
                "d",
                describeArc(
                  120,
                  120,
                  100,
                  start + length / 2 - (rangeRef.current - start) / 2,
                  start + length / 2 + (rangeRef.current - start) / 2
                )
              );
          } else intervalRef.current && clearInterval(intervalRef.current);
        }, 1)),
      1000
    );
  }, [isInView]);

  return (
    <div className="w-[600px] h-[200px] relative" ref={reviewRef}>
      <div className="absolute z-30 w-40 h-40 left-[344px] top-10 bg-[#A6E0EE] rounded-full flex justify-center items-center">
        <img src={Reviewer2} alt="" className="w-36 h-36 pb-1" />
      </div>
      <svg className="absolute left-[304px] z-20 w-[240px] h-[240px]">
        <path
          ref={curveRef}
          fill="none"
          stroke="#A6E0EE"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute z-10 w-96 h-40 left-0 top-10 flex items-center">
        <Animation delay={1} animation={ANIMATIONS.rightGrow}>
          <div className="h-24 bg-[#A6E0EE] rounded-xl overflow-hidden">
            <Animation
              delay={2}
              animation={ANIMATIONS.fadeIn}
              className="text-primary py-2"
            >
              <div className="flex ml-4 items-center">
                <div className="px-3 py-2 rounded bg-white flex gap-2 h-fit mr-2">
                  {[1, 2, 3, 4, 5].map(() => (
                    <img src={Star} className="w-5 h-5" alt="" />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold leading-tight">
                    Roman Jay
                  </div>
                  <div className="text-xs font-medium leading-tight">
                    CEO, Xeven solutions
                  </div>
                </div>
              </div>
              <div className="mr-10 ml-4 mt-2 font-semibold leading-tight">
                Lorem ipsum dolor sit amet, consur adipiscing elit, sed do
                eiusmod tempor 
              </div>
            </Animation>
          </div>
        </Animation>
      </div>
      <Animation
        className="absolute top-44 left-60"
        animation={ANIMATIONS.fadeInDown}
        bottomMargin={0}
        delay={2}
      >
        <div className="w-3 h-3 rounded-full bg-white bg-opacity-40"></div>
      </Animation>
    </div>
  );
};
