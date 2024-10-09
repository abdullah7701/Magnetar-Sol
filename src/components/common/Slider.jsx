import Marquee from "react-marquee-slider";

const InfiniteSlider = ({ className, children }) => {
  return (
    <div className={className}>
      <Marquee velocity={12} minScale={0.7} resetAfterTries={200}>
        {[children]}
      </Marquee>
    </div>
  );
};

export default InfiniteSlider;
