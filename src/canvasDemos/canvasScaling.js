import { useRef, useEffect } from 'react';

const CanvasScaling = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');

      // 正方形，x轴放大5倍
      ctx.save();
      ctx.scale(5, 1);
      ctx.fillRect(1, 10 , 10 ,10);
      ctx.restore();

      // x轴镜像
      ctx.save();
      ctx.scale(-1, 1);
      ctx.font = '14px serif';
      ctx.fillText("Pupuu", -50, 50);
      ctx.restore();
    };
    draw();
  });

  return (
    <>
      <canvas width={100} height={100} ref={cEl1}/>
    </>
  )
}

export default CanvasScaling;

/*
*
* scale(x, y)
* x/y 放大倍数：
* 小于1为缩，大于1为扩
* 负数为镜像
*
*
* */
