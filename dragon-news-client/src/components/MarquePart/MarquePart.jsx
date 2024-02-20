import Marquee from "react-fast-marquee";

const MarquePart = () => {
  return (
    <div className="flex bg-pink-50 py-2 px-4">
      <button className="bg-pink-700 text-white px-3 py-1">Latest</button>
      <Marquee>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, consequuntur. Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default MarquePart;
