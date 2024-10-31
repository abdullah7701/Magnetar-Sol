import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import CourseCard from "components/common/CourseCard";
import Video from "components/common/Video";
import Text from "components/text/Text";
import { COURSES } from "constants/courses";
import EducationImage from "resources/images/education.png";
import educationVideoPoster from "resources/images/educationVideoPoster.png";
import ArrowRightIcon from "resources/icons/arrowRight.svg";
import { ANIMATIONS } from "constants/animations";
import Wave from "resources/backgrounds/wave.svg";
import { BLOGS } from "constants/blogs";
import FAQImage from "resources/images/FAQ.png";
import DownIcon from "resources/icons/cheveronDown.svg";
import { useEffect, useRef, useState } from "react";
import { FAQS } from "constants/FAQs";
import { useNavigate } from "react-router-dom";

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
  const [courses, setCourses] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_COURSE_TABLE}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.records.map((record) => record.fields));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (!courses) return <div>Loading...</div>;
  return (
    <div className="flex justify-end flex-row-reverse flex-wrap gap-20 distorted">
      {courses.slice(0, 5).map((course) => (
        <CourseCard course={course} />
      ))}
      <div className="w-[520px] flex justify-start">
        <div
          className="relative rounded-full flex justify-between items-center border-2 border-primary hover:border-secondary w-[300px] h-12 cursor-pointer group transition-colors duration-500"
          onClick={() => navigate("/courses")}
        >
          <div className="text-primary group-hover:text-secondary font-semibold text-2xl select-none w-full text-center transition-all duration-500">
            View All Courses
          </div>
          <img
            src={ArrowRightIcon}
            alt="->"
            className="absolute right-[252px] group-hover:right-0 w-12 h-12 rounded-full bg-primary group-hover:bg-mid p-3 transition-all duration-500"
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
    <IntroBubblesWrapper img={EducationImage} className="mb-20">
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
          className="w-full h-96 object-cover mb-5 rounded-lg"
        />
        <div className="text-primary text-[28px] font-semibold capitalize mb-5 leading-tight cursor-pointer">
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
        <img src={image} alt="" className="w-44 h-44 mr-5 rounded-md" />
        <div className="flex flex-col justify-center">
          <div className="text-zinc-400 text-sm font-semibold uppercase tracking-wide mb-3">
            Blog Topic
          </div>
          <div className="text-primary text-2xl font-semibold capitalize leading-tight cursor-pointer">
            {title}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <BlogHeader />
      <div className="flex justify-center flex-col md:flex-row w-fit">
        <div className="min-w-1/2 mr-10">
          <MainBlog blog={BLOGS[0]} />
        </div>
        <div className="flex flex-wrap justify-start gap-10">
          <SubBlog blog={BLOGS[1]} />
          <SubBlog blog={BLOGS[2]} />
          <SubBlog blog={BLOGS[3]} />
        </div>
      </div>
    </div>
  );
};

const FAQsHeader = () => {
  return (
    <div className="text-4xl font-semibold mb-10">
      <Animation>
        <Text className="leading-tight">Frequently</Text>
        <Text
          div
          className="text-secondary !decoration-primary decoration-4"
          underlined
        >
          Asked Questions
        </Text>
      </Animation>
    </div>
  );
};

const FAQs = () => {
  const FAQEntry = ({ faq }) => {
    const [visible, setVisible] = useState(false);
    const { question, answer } = faq;
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
      if (contentRef.current) {
        setContentHeight(visible ? contentRef.current.scrollHeight : 0);
      }
    }, [visible, answer]);

    return (
      <div>
        <div
          className="flex items-center mb-2 cursor-pointer"
          onClick={() => setVisible(!visible)}
        >
          <img
            src={DownIcon}
            alt="Toggle visibility"
            className={`w-5 h-5 ${
              visible ? "rotate-180" : "rotate-0"
            } transition-all duration-200 mr-4 cursor-pointer`}
          />
          <div className="text-primary text-2xl font-semibold">{question}</div>
        </div>
        <div
          ref={contentRef}
          style={{ height: contentHeight }}
          className={`pl-2 pr-10 text-gray-800 text-lg font-medium overflow-hidden transition-all duration-500 leading-snug mb-3`}
        >
          {answer}
        </div>
      </div>
    );
  };

  const Divider = () => (
    <div className="w-full h-0 border border-black mb-6"></div>
  );

  return (
    <div className="flex flex-wrap justify-between mt-40">
      <div className="w-[550px] pr-16">
        <FAQsHeader />
        {FAQS.map((faq, index) => (
          <div>
            <FAQEntry faq={faq} />
            {index !== FAQS.length - 1 && <Divider />}
          </div>
        ))}
      </div>
      <div className="w-[550px]">
        <img src={FAQImage} alt="" className="w-full h-[500px]" />
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
      <div className="w-5/6 mx-auto justify-center max-w-[1200px]">
        <Blogs />
        <FAQs />
      </div>
    </div>
  );
};

export default Education;
