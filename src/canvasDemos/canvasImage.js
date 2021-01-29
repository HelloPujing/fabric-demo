import { useRef, useEffect } from 'react';

const CanvasImage = () => {
  const cEl1 = useRef('cRef1');
  const cEl2 = useRef('cRef2');
  const cEl3 = useRef('cRef3');
  const sourceEl = useRef('sourceEl');
  const frameEl = useRef('frameEl');

  useEffect(() => {
    const draw = () => {
      const ctx1 = cEl1.current.getContext('2d');
      const ctx2 = cEl2.current.getContext('2d');
      const img = new Image();
      img.onload = () => {
        ctx1.drawImage(img, 0, 0, 100, 100);
        console.log(img);
        for (let i = 0; i < 2; i++) {
          for (let j = 0; j < 2; j++) {
            ctx2.drawImage(img, i*50, j*50, 50, 50);
          }
        }
      }
      img.src = 'https://mdn.mozillademos.org/files/5395/backdrop.png';
    };
    draw();
  });
  useEffect(() => {
    const drawArtwork = () => {
      const ctx3 = cEl3.current.getContext('2d');
      ctx3.drawImage(sourceEl.current, 33, 71, 100, 100, 20, 20, 66, 80);
      ctx3.drawImage(frameEl.current, 0, 0, 100, 100);
      console.log(cEl3, sourceEl.current);
    };
    drawArtwork();
  }, [sourceEl, cEl3]);

  return (
    <>
      <canvas width={100} height={100} ref={cEl1}/>
      <canvas width={100} height={100} ref={cEl2}/>
      <canvas width={100} height={100} ref={cEl3}/>

      <div style={{ display: "none" }}>
        <img ref={sourceEl} src="https://mdn.mozillademos.org/files/5397/rhino.jpg" />
        <img ref={frameEl} src="https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png" />
      </div>
    </>
  )
}

export default CanvasImage;

/*
*
* 绘制
* ctx.drawImage(img, x, y, w, h);
*
* 绘制并切片
* ctx.drawImage(img, x, y, w, h, dx, dy, dw, dh);
*
*
*
*
* */
