import BlurFade from "@/components/ui/blur-fade";
import { ChevronsDown } from "lucide-react";

const ArrowDown = () => {
  return (
    <BlurFade delay={0.25 * 3.2} inView>
      <div className="flex justify-center items-center mb-1">
        <ChevronsDown className="size-6 xl:size-6 2xl:size-7 text-yellow-300 animate-bounce" />
      </div>
    </BlurFade>
  );
};

export default ArrowDown;
