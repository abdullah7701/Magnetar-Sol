import Animation from "./Animation";

const ProjectCard = ({ data, index, isLeftAlligned }) => {
  let position;

  switch (index) {
    case 0:
      if (isLeftAlligned) position = { top: 50, left: 5 };
      else position = { top: 25, left: 5 };
      break;
    case 1:
      if (isLeftAlligned) position = { top: 35, left: 35 };
      else position = { top: 40, left: 35 };
      break;
    case 2:
      if (isLeftAlligned) position = { top: 15, left: 65 };
      else position = { top: 55, left: 65 };
      break;
    default:
      break;
  }
  return (
    <Animation delay={isLeftAlligned ? 1.8 - 0.6 * index : 0.6 * index}>
      <div
        className={`absolute bg-white backdrop-blur-md bg-opacity-80 w-80 h-[350px] shadow-xl rounded-xl p-3`}
        style={{
          top: position.top + "vh",
          left: position.left + "vw",
        }}
      >
        <img
          src={data.image}
          className="w-full h-[250px] rounded-lg mb-2"
          alt=""
        />
        <div className="text-sm text-primary leading-tight font-semibold">
          {data.desc}
        </div>
      </div>
    </Animation>
  );
};

export default ProjectCard;
