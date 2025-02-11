"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  SquareArrowOutUpRight,
  X,
} from "lucide-react";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  id: number;
  thumb: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  techStack: string;
  liveLink: string;
  repoLink: string;
  content: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    const screenWidth = window.innerWidth;
    const scrollAmount = screenWidth > 768 ? -700 : -150;

    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const screenWidth = window.innerWidth;
    const scrollAmount = screenWidth > 768 ? 700 : 150;

    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full py-2 md:py-10">
        <div className="flex justify-end gap-2">
          <div className="flex justify-end gap-3 md:gap-2">
            {/* <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="disabled:opacity-40 relative inline-flex h-10 w-10 md:h-14 md:w-14 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#292929,45%,#473e8a,55%,#292929)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none"
            >
              <ArrowLeftCircle className="h-6 w-6 text-gray-400" />
            </button> */}
            <button
              className="relative z-40 h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-95 duration-300 shadow-[inset_0_0_0_2px_#616467] tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition "
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="size-6 text-gray-400" />
            </button>
          </div>
          <div className="flex justify-end mr-[10px] xl:mr-[50px] 2xl:mr-[50px] gap-2">
            <button
              className="relative z-40 h-10 w-10 md:h-11 md:w-11 rounded-full flex items-center justify-center disabled:opacity-50 hover:scale-95 duration-300 shadow-[inset_0_0_0_2px_#616467] tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition "
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <ChevronRight className="size-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-5 md:py-5 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-full w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>
          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "max-w-7xl mx-auto"
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Modal overlay */}
      <div>
        <AnimatePresence>
          {open && (
            <div className="m-6 md:m-14 fixed inset-0 h-screen z-50 overflow-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-screen h-screen fixed inset-0"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                ref={containerRef}
                layoutId={layout ? `card-${card.title}` : undefined}
                className="max-w-6xl mx-auto bg-zinc-950 h-fit z-[60] my-6 md:my-10 p-4 md:p-10 rounded-3xl font-sans relative"
              >
                <button
                  className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
                </button>

                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className="text-xl md:text-4xl font-bold text-white"
                >
                  {card.title}
                </motion.p>

                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-sm mt-2 font-medium text-white"
                >
                  📈{card.content}
                </motion.p>

                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="text-sm md:text-base mt-4 font-medium text-white"
                >
                  👨‍💻{card.techStack}
                </motion.p>

                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="items-center text-sm md:text-base font-medium text-white flex gap-2 mt-3"
                >
                  <Github className="size-5" /> Frontend:
                  <a className="text-blue-500" href={card.repoLink}>
                    Acesse o Repositório
                  </a>
                </motion.p>

                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="items-center text-sm md:text-base font-medium text-white flex gap-2"
                >
                  <Github className="size-5" /> Backend:
                  <a className="text-blue-500" href={card.repoLink}>
                    Acesse o Repositório
                  </a>
                </motion.p>

                <motion.p
                  layoutId={layout ? `category-${card.title}` : undefined}
                  className="items-center text-sm md:text-base font-medium text-white flex gap-2"
                >
                  <SquareArrowOutUpRight className="size-5" /> Deploy:
                  <a
                    className="text-blue-500"
                    href={card.liveLink}
                    target="_blank"
                  >
                    Acesse o Deploy
                  </a>
                </motion.p>

                <div className="pt-5 flex justify-center">
                  <Image
                    className="border border-zinc-700 rounded-3xl w-full max-w-xs md:max-w-[700px] md:h-[400px]"
                    src={card.image}
                    alt={card.title}
                    width={1000}
                    height={1000}
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Card content */}
      <motion.button
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className="rounded-3xl h-80 w-64 xl:h-[350px] xl:w-[500px] 2xl:h-[550px] 2xl:w-[700px] overflow-hidden flex flex-col items-start relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30 z-30 pointer-events-none" />

        <div className="relative z-40 p-2 px-5">
          <motion.p className="items-center text-base md:text-lg font-medium text-white flex gap-2 justify-center underline underline-offset-2">
            Acesse o Projeto!
          </motion.p>
          <motion.p className="mb-2 text-white text-xl md:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2">
            {card.title}
          </motion.p>
          <motion.p className="text-white text-xs md:text-sm font-medium font-sans text-left">
            {card.description}
          </motion.p>
        </div>

        <BlurImage
          src={card.thumb}
          alt={card.title}
          width={1000}
          height={1000}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 ease-out scale-105 hover:scale-100"
        />
      </motion.button>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-500",
        isLoading ? "blur-md" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
