export const onIntersect = ({
  el,
  downEnter = () => {},
  downLeave = () => {},
  upEnter = () => {},
  upLeave = () => {},
  options = { threshold: 1.0 },
}) => {
  let previousY = 0;
  let previousRatio = 0;
  // Execute callbacks depending on scroll direction
  const handleIntersect = ([entry]) => {
    const currentY = entry.boundingClientRect.y;
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;

    // scrolling down
    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        // console.log(`scrolling down enter ${entry.target.id}`);
        downEnter(entry.target);
      } else {
        // console.log(`scrolling down leave ${entry.target.id}`);
        downLeave(entry.target);
      }
      // scrolling up
    } else {
      if (currentRatio < previousRatio && !isIntersecting) {
        // console.log(`scrolling up leave ${entry.target.id}`);
        upLeave(entry.target);
      } else {
        // console.log(`scrolling up enter ${entry.target.id}`);
        upEnter(entry.target);
      }
    }
    previousY = currentY;
    previousRatio = currentRatio;
  };

  // Initiate Observer
  const observer = new IntersectionObserver(handleIntersect, options);

  // Observe the element
  observer.observe(el);
  // Returns the observer so it can be further used in the component
  return observer;
};
