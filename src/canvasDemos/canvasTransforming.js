import { useRef, useEffect } from 'react';

const CanvasTransforming = () => {
  const cEl1 = useRef('cRef1');

  useEffect(() => {
    const draw = () => {
      const ctx = cEl1.current.getContext('2d');

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
*
* setTransform(a, b, c, d, e, f)
* 将当前的变形矩阵，重置为单位矩阵，然后用相同的参数调用transform方法
* 从根本上来说，该方法是取消了当前变形，然后设置为指定的变形，一步完成
*
* resetTransform()
*
* */
