import { useRef, useEffect } from 'react';

const CanvasRotating = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');
      ctx.translate(50, 50);

      for (let i = 0; i < 6; i++) { // 从内到外6圈
        ctx.save();
        ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+',255)';

        for (let j = 0; j < i * 6; j++) { // 每圈6*i个
          ctx.rotate(Math.PI*2/(i*6)); // 弧度 = Math.PI * 角度 / 180 = 2 * PI / 个数
          ctx.beginPath();
          ctx.arc(0, 7.5 * i, 3, 0, Math.PI * 2, true); // r = 3, gap = 1.5
          ctx.fill();
        }
        ctx.restore();
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

export default CanvasRotating;

/*
*
* rotate(angle)
* angel 弧度
* 弧度 = Math.PI * 角度 / 180
*
*
* */
