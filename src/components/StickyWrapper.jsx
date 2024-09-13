const StickyWrapper = ({ height, id, children }) => {
  const stickyStyle = {
    position: "sticky",
    top: 0,
  };

  return (
    <div>
      <div style={stickyStyle}>{children}</div>
      <div style={{ height: `${height}px`, width: "100%" }}></div>
    </div>
  );
};

export default StickyWrapper;
