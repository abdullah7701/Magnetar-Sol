import ClockIcon from "resources/icons/clock.svg";
import PeopleIcon from "resources/icons/people.svg";

const CourseCard = ({ course }) => {
  return (
    <div className="p-7 w-[520px] bg-slate-100 bg-opacity-80 rounded-2xl card-container backdrop-blur-sm shadow-2xl">
      <img
        src={course.cover}
        alt="course img"
        className="w-full h-72 rounded-2xl object-fill mb-5"
      />
      <div className="flex justify-between mb-5">
        <div className="overflow-clip mr-2 text-primary text-2xl font-semibold">
          {course.title}
        </div>
        <a
          href={course.link}
          target="_blank"
          rel="noreferrer"
          className="min-w-[120px] h-fit rounded-full font-semibold text-lg bg-primary text-white cursor-pointer hover:bg-mid px-6 py-2"
        >
          Click Me
        </a>
      </div>
      <div className="mb-5 text-customblack font-medium">
        {course.description}
      </div>
      <div className="flex text-primary font-semibold">
        <img src={ClockIcon} alt="" className="mr-[10px] w-6 h-6" />
        <div className="mr-[10px]">{course.duration} Hours</div>
        <img src={PeopleIcon} alt="" className="mr-[10px] w-6 h-6" />
        <div className="">{course.learners} Learners</div>
      </div>
    </div>
  );
};

export default CourseCard;
