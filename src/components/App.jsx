import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const App = () => {

  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>(null)

  useEffect(() => {

    let ctx = gsap.context(() => {

      tl.current = gsap.timeline()
        .to(".square", { rotate: 360 })
        .to(".square2", { x: 200 });

    }, app);

    return () => ctx.revert()

  }, [])


  return (
    <div ref={app}>
      <div className="square">Hello World</div>
      <div className="square2">Hello World 2</div>
    </div>
  )
}
export default App