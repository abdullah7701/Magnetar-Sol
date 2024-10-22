import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import CourseCard from "components/common/CourseCard";
import Text from "components/text/Text";
import {
  COURSE_CATEGORIES,
  COURSE_CATEGORIES_LOGOS,
  COURSES,
} from "constants/courses";
import { useMemo, useState } from "react";
import CourseImage from "resources/images/course.png";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

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

const AllCoursesSelector = () => {
  const [selectedCourse, selectCourse] = useState(null);
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
          {categorizedCourses.map((category, index) => {
            const isSelected = index === selectedCourse;
            return (
              <div
                className={`w-[190px] h-[220px] p-5 flex flex-col items-center ${
                  isSelected
                    ? "bg-primary text-gray-50"
                    : "bg-[#ECF4FAC9] bg-opacity-80 text-primary"
                } rounded-2xl transition-colors duration-500 cursor-pointer select-none`}
                onClick={() => selectCourse(index)}
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

const AllCourses = () => {};

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
      <div className="w-5/6 mx-auto justify-center max-w-[1200px]">
        <FeaturedCourses />
      </div>
      <AllCoursesSelector />
    </div>
  );
};

export default Courses;
