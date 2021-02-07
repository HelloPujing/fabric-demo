import { useRef, useEffect } from 'react';

const CanvasTransforming = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');
      ctx.transform(1, 0.5, 0, 1, 10, 10);
      ctx.fillRect(0, 0, 50, 50);
    };
    draw();
  });

  return (
    <>
      <canvas width={100} height={100} ref={cEl1}/>
    </>
  )
}

export default CanvasTransforming;

/*
*
* transform(a, b, c, d, e, f)
* a m11 x轴方向缩放 求乘矩阵中的11值 - 譬如0.5为x轴缩一半
* b m12 y轴倾斜偏移 求乘矩阵中的12值 - 譬如0.5往x轴偏移原x长度的一半
* c m21 x轴倾斜偏移 求乘矩阵中的21值 - 譬如0.5往y轴偏移原y长度的一半
* d m22 y轴方向缩放 求乘矩阵中的22值 - 譬如0.5为y轴缩一半
* e 水平位移
* f 垂直位移
*
* setTransform(a, b, c, d, e, f)
* 将当前的变形矩阵，重置为单位矩阵，然后用相同的参数调用transform方法
* 从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成
*
* resetTransform()
*
* */
