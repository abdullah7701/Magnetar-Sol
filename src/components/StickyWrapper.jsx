const StickyWrapper = ({ height, id, children, wrapperRef }) => {
  const stickyStyle = {
    position: "sticky",
    top: 0,
  };

  return (
    <div ref={wrapperRef}>
      <div style={stickyStyle}>{children}</div>
      <div style={{ height: `${height}px`, width: "100%" }}></div>
    </div>
  );
};

export default StickyWrapper;
