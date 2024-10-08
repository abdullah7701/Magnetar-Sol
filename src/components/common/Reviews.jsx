import Text from "components/text/Text";
import Animation from "components/animated/Animation";
import { Review1, Review2 } from "components/animated/Reviews";

const Reviews = () => {
  return (
    <div className="w-full h-[530px] bg-secondary grid grid-cols-2 relative pl-20 py-24 overflow-hidden">
      <div className="mt-14">
        <Animation className="font-semibold text-[44px]">
          <Text className="text-white !decoration-primary" underlined>
            What our clients
          </Text>
          <Text className="text-white"> have to say</Text>
        </Animation>
        <Animation delay={0.6}>
          <Text className="text-white mt-5" div>
            Lorem ipsum dolor sit amet, consur adipiscing elit, sed
          </Text>
          <Text className="text-white">do eiusmod tempor</Text>
        </Animation>
      </div>
      <Animation>
        <Review1 />
      </Animation>
      <Animation>
        <Review2 />
      </Animation>
      <Animation>
        <Review1
          className="scale-90 opacity-50 ml-40"
          start={275}
          length={100}
        />
      </Animation>
    </div>
  );
};

export default Reviews;
