import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import CourseCard from "components/common/CourseCard";
import Video from "components/common/Video";
import Text from "components/text/Text";
import { COURSES } from "constants/courses";
import EducationIcon from "resources/images/education.png";
import educationVideoPoster from "resources/images/educationVideoPoster.png";
import ArrowRightIcon from "resources/icons/arrowRight.svg";
import { ANIMATIONS } from "constants/animations";
import Wave from "resources/backgrounds/wave.svg";

const VideoHeader = () => {
  return (
    <div className="text-4xl font-semibold mb-10">
      <Animation>
        <Text className="leading-tight">From Beginner to Pro: </Text>
        <Text
          div
          className="text-secondary !decoration-primary decoration-4"
          underlined
        >
          Your Path to Most Demanded Skills
        </Text>
      </Animation>
    </div>
  );
};

const CoursesHeader = () => {
  return (
    <div className="text-4xl font-semibold mb-10">
      <Animation>
        <Text className="leading-tight">Learn from the best:</Text>
        <Text
          div
          className="text-secondary !decoration-primary decoration-4"
          underlined
        >
          Our Comprehensive Courses
        </Text>
      </Animation>
    </div>
  );
};

const Courses = () => {
  return (
    <div className="flex justify-end flex-row-reverse flex-wrap gap-20 distorted">
      {[...COURSES, COURSES[0]].map((course) => (
        <CourseCard course={course} />
      ))}
      <div className="w-[520px] flex justify-start">
        <div className="rounded-full pl-6 flex justify-between items-center border-2 border-mid h-fit cursor-pointer">
          <div className="mr-4 text-primary font-semibold text-2xl select-none">
            View All Courses
          </div>
          <img
            src={ArrowRightIcon}
            alt="->"
            className="w-12 h-12 rounded-full bg-mid p-3"
          />
        </div>
      </div>
    </div>
  );
};

const FancyBox = ({
  className,
  headingClassName,
  heading,
  desc,
  delay = 0.15,
}) => {
  return (
    <Animation
      animation={ANIMATIONS.fadeIn}
      delay={delay}
      className={`w-44 h-fit rounded-lg bg-white bg-opacity-20 p-4 flex flex-col ${className}`}
    >
      <div
        className={`text-[44px] font-semibold self-center ${headingClassName}`}
      >
        {heading}
      </div>
      <div className="text-white font-medium font-white self-center leading-tight">
        {desc}
      </div>
    </Animation>
  );
};

const Introduction = () => {
  return (
    <IntroBubblesWrapper img={EducationIcon} className="mb-20">
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
        <Animation>
          <Text className="text-white text-5xl mb-8" div>
            Education
          </Text>
        </Animation>
        <Animation delay={0.5}>
          <Text div className="text-white text-center">
            Lorem ipsum dolor sit amet dolor sit amet
          </Text>
          <Text div className="text-white text-center">
            Lorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem ipsum
          </Text>
        </Animation>
      </div>
    </IntroBubblesWrapper>
  );
};

const Stats = () => {
  return (
    <div className="relative h-[200px]">
      <div
        className="-z-10 absolute -translate-y-52 w-full h-[420px] pt-24 pb-14 px-16 bg-cover flex justify-between"
        style={{
          backgroundImage: `url(${Wave})`,
        }}
      >
        <Animation className="text-[44px] font-semibold leading-tight">
          <Text div className="text-white" underlined>
            We have helped
          </Text>
          <Text div className="text-white">
            thousands of dreams
          </Text>
          <Text div className="text-white">
            come true
          </Text>
        </Animation>
        <div className="flex gap-10">
          <FancyBox
            heading={"$25M+"}
            desc={"Revenue that can be tracked across our portfolio"}
            className={"self-start"}
            headingClassName={"text-orange-300"}
            delay={0.15}
          />
          <FancyBox
            heading={"350%"}
            className={"self-end"}
            headingClassName={"text-lime-200"}
            desc={"Average annual growth rate among our clients"}
            delay={0.5}
          />
          <FancyBox
            heading={"90%"}
            className={"self-center"}
            headingClassName={"text-yellow-300"}
            desc={"Average annual growth rate among our clients"}
            delay={1}
          />
        </div>
      </div>
    </div>
  );
};

const BlogHeader = () => {
  return (
    <div className="text-4xl font-semibold mb-10 mt-20">
      <Animation>
        <Text className="leading-tight">Our Blogs</Text>
        <Text
          div
          className="text-secondary !decoration-primary decoration-4"
          underlined
        >
          Read Latest Trends
        </Text>
      </Animation>
    </div>
  );
};

const Blogs = () => {
  const MainBlog = ({ blog }) => {
    const { image, title, description, link } = blog;
    const strip = (text) => {
      return text.length > 150 ? text.slice(0, 150) + "..." : text;
    };
    return (
      <div className="w-[650px]">
        <img
          src={image}
          alt=""
          className="w-full h-[420px] object-cover mb-7"
        />
        <div className="text-primary text-[28px] font-semibold capitalize mb-5">
          {title}
        </div>
        <div className="text-zinc-400 text-sm font-semibold uppercase tracking-wide mb-3">
          Blog Topic
        </div>
        <div className="text-neutral-500 mr-1">
          <span>{strip(description)}</span>
          <span className="cursor-pointer text-primary hover:text-mid">
            Read More
          </span>
        </div>
      </div>
    );
  };

  const SubBlog = ({ blog }) => {
    const { image, title, link } = blog;
    return (
      <div className="w-[480px] flex justify-between">
        <img src={image} alt="" className="w-44 h-44" />
        <div className="flex flex-col justify-center">
          <div className="text-zinc-400 text-sm font-semibold uppercase tracking-wide mb-3">
            Blog Topic
          </div>
          <div className="text-primary text-[28px] font-semibold capitalize">
            {title}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <BlogHeader />
      <div className="flex justify-start flex-wrap">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <Introduction />
      <div className="w-5/6 mx-auto justify-center max-w-[1200px]">
        <VideoHeader />
        <Video
          src={"videos/education.mp4"}
          poster={educationVideoPoster}
          className="mb-10"
        />
        <CoursesHeader />
        <Courses />
      </div>
      <Stats />
    </div>
  );
};

export default Education;
