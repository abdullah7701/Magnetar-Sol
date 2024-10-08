import ServiceSection from "components/ServiceSection";

const WebDev = () => {
  const data = [
    {
      isFirst: true,
      category: "Web Development",
      title: "Project 1",
      desc: "We designed an published webiste for CodeIt. Lorem ipsum dolor sit amet dolor sit ametLorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem",
    },
    {
      isFirst: false,
      title: "Project 2",
      desc: "We designed an published webiste for CodeIt. Lorem ipsum dolor sit amet dolor sit ametLorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem",
    },
    {
      isFirst: false,
      title: "Project 3",
      desc: "We designed an published webiste for CodeIt. Lorem ipsum dolor sit amet dolor sit ametLorem ipsum dolor sit amet dolor sit amet dolor sit ametLorem",
    },
  ];

  return (
    <div>
      {data.map((project, i) => (
        <ServiceSection key={i} {...project} leftAlligned={i % 2 === 0} />
      ))}
    </div>
  );
};

export default WebDev;
