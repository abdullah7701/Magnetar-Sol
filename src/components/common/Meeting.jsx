import Text from "components/text/Text";
import Animation from "components/animated/Animation";

const Meeting = () => {
  return (
    <div className="w-full flex flex-col items-center py-20">
      <Animation
        className="text-[44px] font-semibold text-center leading-tight mb-4"
        delay={0.4}
      >
        <Text div underlined className="text-primary">
          Schedule a meeting
        </Text>
        <Text div className="text-secondary">
          with our experts
        </Text>
      </Animation>
      <Animation
        className="text-center max-w-[500px] font-semibold text-lg mb-10 leading-tight"
        delay={0.8}
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </Text>
      </Animation>
      <Animation className="flex justify-center" delay={0.8}>
        <div className="px-4 py-2 rounded-full bg-primary text-lg text-white font-medium cursor-pointer">
          Schedule a free call
        </div>
      </Animation>
    </div>
  );
};

export default Meeting;
