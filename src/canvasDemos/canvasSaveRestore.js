import { useRef, useEffect } from 'react';

const CanvasSaveRestore = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');

      // 黑矩形
      ctx.fillRect(0,0,150,150);
      ctx.save();

      // 蓝矩形
      ctx.fillStyle = '#09f';
      ctx.fillRect(15,15,120,120);
      ctx.save();

      // 白透明矩形
      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.5;
      ctx.fillRect(30, 30, 90, 90);

      // 用上一次的配置(蓝色)，绘一个小矩形
      ctx.restore();
      ctx.fillRect(45, 45, 60, 60);

      // 用再上一次的配置(默认的黑色)，绘一个小矩形
      ctx.restore();
      ctx.fillRect(60, 60, 30, 30);
    };
    draw();
  });

  return (
    <>
      <canvas width={150} height={150} ref={cEl1}/>
    </>
  )
}

export default CanvasSaveRestore;

/*
*
* save() 保存画布状态
* restore() 恢复上一次画布状态
*
* 所谓画布状态，更像是配置：
* 所有样式和变形的一个快照
*
* 包含：
* 属性 - strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, lineDashOffset, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation, font, textAlign, textBaseline, direction, imageSmoothingEnabled
* 变形 - 移动，旋转，缩放
* 裁切路径 - clippingPath
*
* */
