import Animation from "components/animated/Animation";
import { IntroBubblesWrapper } from "components/animated/CustomSvgAnimations/Bubbles";
import CourseCard from "components/common/CourseCard";
import Video from "components/common/Video";
import Text from "components/text/Text";
import { COURSES } from "constants/courses";
import EducationIcon from "resources/images/education.png";
import educationVideoPoster from "resources/images/educationVideoPoster.png";

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

const Education = () => {
  return (
    <div>
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
              Lorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem
              ipsum
            </Text>
          </Animation>
        </div>
      </IntroBubblesWrapper>
      <div className="w-5/6 mx-auto justify-center">
        <VideoHeader />
        <Video src={"videos/education.mp4"} poster={educationVideoPoster} />
      </div>
      <div className="flex justify-center flex-wrap gap-20 distorted mt-52">
        {COURSES.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};

export default Education;
