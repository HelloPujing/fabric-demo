import { useRef, useEffect } from 'react';

const CanvasTranslating = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');
      for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
          ctx.save();
          ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
          ctx.translate(20 * j, 20 * i);
          ctx.fillRect(0, 0, 10, 10);
          ctx.restore();
        }
      }
    };
    draw();
  });

  return (
    <>
      <canvas width={100} height={100} ref={cEl1}/>
    </>
  )
}

export default CanvasTranslating;

/*
*
* translate(x, y)
*
*
* */
