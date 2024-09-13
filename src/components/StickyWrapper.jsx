import Sticky from "react-stickynode";

const StickyWrapper = ({ height, id, children }) => {
  return (
    <div>
      <div id={`sticky_start_${id}`}></div>
      <Sticky top={`#sticky_start_${id}`} bottomBoundary={`#sticky_end_${id}`}>
        {children}
      </Sticky>
      <div style={{ height: `${height}px`, width: "100%" }}></div>
      <div id={`sticky_end_${id}`}></div>
    </div>
  );
};

export default StickyWrapper;
