import ClockIcon from "resources/icons/clock.svg";
import PeopleIcon from "resources/icons/people.svg";

const CourseCard = ({ course }) => {
  debugger;
  return (
    <div className="p-6 w-[470px] bg-slate-100 bg-opacity-80 rounded-2xl card-container backdrop-blur-sm shadow-2xl">
      <img
        src={course.cover[0].url}
        alt="course img"
        className="w-full h-64 rounded-2xl object-fill mb-4"
      />
      <div className="flex justify-between mb-4">
        <div className="overflow-clip mr-2 text-primary text-2xl font-semibold">
          {course.title}
        </div>
        <a
          href={course.link}
          target="_blank"
          rel="noreferrer"
          className="min-w-[110px] h-fit rounded-full font-semibold text-lg bg-primary text-white cursor-pointer hover:bg-mid px-5 py-2"
        >
          Click Me
        </a>
      </div>
      <div className="mb-4 text-customblack font-medium">
        {course.description}
      </div>
      <div className="flex text-primary font-semibold">
        <img src={ClockIcon} alt="" className="mr-1 w-5 h-5" />
        <div className="mr-3">{course.duration} Hours</div>
        <img src={PeopleIcon} alt="" className="mr-1 w-5 h-5" />
        <div className="">{course.learners} Learners</div>
      </div>
    </div>
  );
};

export default CourseCard;
