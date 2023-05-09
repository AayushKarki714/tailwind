import {
  useScroll,
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { useEffect } from "react";

let clamp = (number, min, max) => Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds) {
  let { scrollY } = useScroll();
  let scrollYBounded = useMotionValue(0);
  let scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  );
  useEffect(() => {
    return scrollY.on("change", (current) => {
      const previous = scrollY.getPrevious();
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;
      scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollYBounded]);
  return { scrollYBounded, scrollYBoundedProgress };
}

export default function Blog() {
  let { scrollYBoundedProgress } = useBoundedScroll(50);
  let scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.5, 1],
    [0, 0, 1]
  );

  return (
    <div className="mx-auto flex   w-full  overflow-hidden text-slate-400">
      <div className="flex-1 ">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [80, 50]
            ),
            backgroundColor: useMotionTemplate(
              `rgb(255 255 255 /${useTransform(
                scrollYBoundedProgressThrottled,
                [0, 1],
                [1, 0.1]
              )})`
            ),
          }}
          className="flex fixed bg-white/10 backdrop-blur-md inset-x-0  px-8 h-20 shadow "
        >
          <div className="mx-auto flex w-full  items-center justify-between">
            <p className="flex origin-left items-center text-xl font-semibold  uppercase">
              <span className="inline-block -rotate-90 text-[10px]">The</span>
              <span className="text-2xl tracking-[-.075em] text-slate-900">
                Daily Bugle
              </span>
            </p>
            <motion.nav
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0]
                ),
              }}
              className="flex space-x-4 text-xs font-medium text-slate-400"
            >
              <a href="#">News</a>
              <a href="#">Sports</a>
              <a href="#">Culture</a>
            </motion.nav>
          </div>
        </motion.header>
        <main className="px-8 pt-28">
          <div
            className="h-10 w-4/5 rounded bg-slate-200 text-2xl
             font-bold"
          />
          <div className="mt-8 space-y-6">
            {[...Array(20).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4  rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
