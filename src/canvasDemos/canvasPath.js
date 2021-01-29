import { useRef, useEffect } from 'react';

const CanvasPath = () => {
  const cEl = useRef('cRef');
  useEffect(() => {
    const draw = () => {
      const ctx = cEl.current.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(10, 15);
      ctx.lineTo(15, 20);
      ctx.lineTo(15, 10);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(50,50, 10, 0, Math.PI * 2, true);
      ctx.stroke();

    };
    draw();
  });
  return (
    <canvas width={100} height={100} ref={cEl} className="canvas01"/>
  )
}

export default CanvasPath;

/*
*
*
* 路径
*
* beginPath
* closePath
* moveTo(x, y)
* lineTo(x, y)
* arc(ox, oy, r, startAngle, endAngle, antiClockwise)
* stroke/fill
*
* 单位：弧度
* 弧度 = Math.PI * 角度 / 180
*
* 二次贝塞尔曲线
* quadraticCurveTo(cp1x, cp1y, x, y)
* cp1x/cp1y控制点
* x/y结束点
*
* 三次贝塞尔曲线
* bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
* cp1x/cp1y控制点1
* cp2x/cp2y控制点2
* x/y结束点
*
*
* */
