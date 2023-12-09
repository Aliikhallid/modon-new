import { motion, useTransform, useScroll } from "framer-motion";
import { Flower } from "lucide-react";
import { useRef } from "react";

const HorizontalScroll = () => {
  return (
    <div className="bg-slate-300 h-fit">
      <h1 className="text-3xl text-slate-500 text-center bold relative top-10 flex flex-col gap-2">Modon Real Estate · is Affiliated with<br /><span className="text-primary-color text-5xl">AL HANDAL INTERNATIONAL GROUP</span><span className="text-2xl">Handal's Companies</span> <Flower className="text-center m-auto"/></h1>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};
interface CardProps {
  card: { url: string; title: string; id: number };
}
const Card = ({ card }:CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200 shadow-2xl shadow-slate-500 rounded border border-primary-color"
    >
      <div
        style={{
          background: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-primary-color">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScroll;
const cards = [
  {
    url: "/src/assets/3f4dcb02000812b8e.jpg",
    title: "Ashur Bank",
    id: 1,
  },
  {
    url: "/src/assets/60042c070ba64c53d.jpg",
    title: "Abr Al Masafat",
    id: 2,
  },
  {
    url: "/src/assets/wolf.jpg",
    title: "Wolf Gym",
    id: 3,
  },
  {
    url: "/src/assets/kaizen.jpg",
    title: "Kaizen Hospitality",
    id: 4,
  },
  {
    url: "/src/assets/hadia.jpg",
    title: "HADIA ORGANIC FARM",
    id: 5,
  },
  {
    url: "/src/assets/diamond.jpg",
    title: "Diamond Loft",
    id: 6,
  },
];