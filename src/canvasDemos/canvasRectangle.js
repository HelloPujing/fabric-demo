import { useRef, useEffect } from 'react';

const CanvasRectangle = () => {
  const cEl = useRef('cRef');
  useEffect(() => {
    const draw = () => {
      const ctx = cEl.current.getContext('2d'); // todo ts自动提示
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.strokeStyle = 'rgb(200,0,0)';
      ctx.fillRect (10, 10, 10, 10);
      ctx.clearRect (14, 14, 2, 2);
      ctx.strokeRect (25, 10, 10, 10);
    };
    draw();
  });
  return (
    <canvas width={100} height={100} ref={cEl} className="canvas01"/>
  )
}

export default CanvasRectangle;

/*
*
*
* 画布栅格 canvas grid
*
* 矩形
* fillRec 填充一个矩形
* clearRec 清除一个矩形
* strokeRec 边框一个矩形
*
*
*
*
*
* */
