import BlurFade from "@/components/ui/blur-fade";
import { ChevronsDown } from "lucide-react";

const ArrowDown = () => {
  return (
    <BlurFade delay={0.25 * 3.2} inView>
      <div className="flex justify-center items-center">
        <ChevronsDown className="size-8 text-indigo-600 animate-bounce" />
      </div>
    </BlurFade>
  );
};

export default ArrowDown;
