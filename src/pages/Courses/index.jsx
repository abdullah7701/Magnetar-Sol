import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import CourseCard from "components/common/CourseCard";
import Text from "components/text/Text";
import {
  COURSE_CATEGORIES,
  COURSE_CATEGORIES_LOGOS,
  COURSES,
  MAX_COURSES_PER_PAGE,
} from "constants/courses";
import { useEffect, useMemo, useRef, useState } from "react";
import CourseImage from "resources/images/course.png";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { ANIMATIONS } from "constants/animations";
import Wave from "resources/backgrounds/wave.svg";

const FeaturedCoursesHeader = () => {
  return (
    <Animation>
      <Text
        underlined
        className="text-secondary !decoration-primary text-[40px]"
      >
        Our Featured Courses
      </Text>
    </Animation>
  );
};

const FeaturedCourses = () => {
  const featuredCourses = useMemo(
    () => COURSES.filter((course) => course.featured),
    []
  );

  return (
    <div className="w-full">
      <FeaturedCoursesHeader />
      <div className="mt-5 w-full flex flex-wrap justify-center gap-20">
        {featuredCourses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};

const AllCoursesSelector = ({ selectedCourse, selectCourse }) => {
  const categorizedCourses = useMemo(
    () =>
      Object.keys(COURSE_CATEGORIES).map((category) => {
        return {
          type: category,
          name: COURSE_CATEGORIES[category],
          total:
            category === "ALL"
              ? COURSES.length
              : COURSES.filter(
                  (course) => course.category === COURSE_CATEGORIES[category]
                ).length,
        };
      }),
    []
  );
  return (
    <div className="w-full flex justify-center bg-secondary py-20 my-20">
      <div className="w-5/6 mx-auto max-w-[1200px]">
        <Animation className="text-[44px] font-semibold capitalize mb-12">
          <Text className="text-white leading-tight" div>
            Browse Courses
          </Text>
          <Text className="text-white !decoration-primary" div underlined>
            by Category
          </Text>
        </Animation>
        <div className="flex flex-wrap justify-center gap-12">
          {categorizedCourses.map((category) => {
            const isSelected = category.name === selectedCourse;
            return (
              <div
                className={`w-[190px] h-[220px] p-5 flex flex-col items-center ${
                  isSelected
                    ? "bg-primary text-gray-50 scale-105"
                    : "bg-[#ECF4FAC9] hover:scale-105 text-primary"
                } rounded-2xl transition-all duration-500 cursor-pointer select-none`}
                onClick={() => selectCourse(category.name)}
              >
                <div className="relative mt-3 w-16 h-16 mb-4">
                  <img
                    src={COURSE_CATEGORIES_LOGOS[category.type].normal}
                    alt=""
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                      isSelected ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <img
                    src={COURSE_CATEGORIES_LOGOS[category.type].selected}
                    alt=""
                    className={`absolute w-full h-full transition-opacity duration-500 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <div className="mb-2 text-2xl font-bold text-center leading-tight">
                  {category.name}
                </div>
                <div className={`text-lg font-semibold`}>
                  {category.total} Course{category.total === 1 ? "" : "s"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const CategoryCourses = ({ courses, visible, setHeight, page }) => {
  const [currentPage, selectPage] = useState(page);
  const [totalPages, setTotalPages] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setTotalPages(Math.ceil(courses.length / MAX_COURSES_PER_PAGE));
  }, [courses]);

  const coursesToDisplay = useMemo(
    () =>
      courses.filter(
        (_, index) =>
          index >= (currentPage - 1) * MAX_COURSES_PER_PAGE &&
          index < currentPage * MAX_COURSES_PER_PAGE
      ),
    [courses, currentPage]
  );

  useEffect(() => {
    if (visible && ref.current) {
      setHeight(ref.current.offsetHeight); // Set the height of the parent
    }
  }, [visible, ref, setHeight, currentPage]);

  const handlePageChange = (newPage) => {
    selectPage(newPage);
    setHeight(ref.current.offsetHeight); // Update height on page change
  };

  return (
    <div
      className={`absolute ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500 w-full`}
      ref={ref}
    >
      <div className="flex flex-wrap justify-center gap-10 w-5/6 mx-auto max-w-[1200px]">
        {coursesToDisplay.map((course) => (
          <CourseCard key={course.id} course={course} /> // Add a key prop
        ))}
      </div>
      <div className="my-10 w-full flex justify-center">
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange} // Pass the handlePageChange function
          maxWidth={400}
        />
      </div>
    </div>
  );
};

const AllCourses = () => {
  const [selectedCourse, selectCourse] = useState("All");
  const [parentHeight, setParentHeight] = useState(0);

  const selectedCourseList = (selectedCourse) => {
    return COURSES.filter(
      (course) => selectedCourse === "All" || course.category === selectedCourse
    );
  };

  const courseByCategories = useMemo(() => {
    return Object.values(COURSE_CATEGORIES).map((category) => {
      return { category, courses: selectedCourseList(category) };
    });
  }, []);

  return (
    <div>
      <AllCoursesSelector
        selectedCourse={selectedCourse}
        selectCourse={selectCourse}
      />
      <div className="relative" style={{ height: parentHeight }}>
        {courseByCategories.map((obj) => (
          <CategoryCourses
            key={obj.category} // Add a key prop
            courses={obj.courses}
            visible={obj.category === selectedCourse}
            setHeight={setParentHeight} // Pass setHeight function
            page={1} // Set the initial page to 1, or manage it accordingly
          />
        ))}
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

const Stats = () => {
  return (
    <div
      className="-z-10 w-full h-[420px] pt-24 pb-14 px-16 bg-cover flex justify-between"
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
  );
};

const Introduction = () => {
  return (
    <IntroBubblesWrapper img={CourseImage} className="mb-20">
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center text-white text-lg leading-tight font-semibold">
        <Animation>
          <Text className="text-white text-2xl mb-4 text-center" div>
            Education
          </Text>
          <Text className="text-white text-5xl mb-8 text-center" div>
            Our Courses
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

const Courses = () => {
  return (
    <div>
      <Introduction />
      <div className="w-5/6 mx-auto max-w-[1200px]">
        <FeaturedCourses />
      </div>
      <AllCourses />
      <Stats />
    </div>
  );
};

export default Courses;
