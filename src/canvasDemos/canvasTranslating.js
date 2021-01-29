import { useRef, useEffect } from 'react';

const CanvasTranslating = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');


    };
    draw();
  });

  return (
    <>
      <canvas width={150} height={150} ref={cEl1}/>
    </>
  )
}

export default CanvasTranslating;

/*
*
*
*
* */
