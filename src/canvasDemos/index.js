import CanvasRectangle from "./canvasRectangle";
import CanvasPath from "./canvasPath";
import CanvasImage from "./canvasImage";
import CanvasRotating from "./canvasRotating";
import CanvasSaveRestore from "./canvasSaveRestore";
import CanvasScaling from "./canvasScaling";
import CanvasTransforming from "./canvasTransforming";
import CanvasTranslating from "./canvasTranslating";

const CanvasDemos = () => {
  return (
    <div>
      <CanvasRectangle />
      <CanvasPath />
      <CanvasImage />
      <CanvasSaveRestore />
      <CanvasTranslating />
      <CanvasRotating />
      <CanvasScaling />
      <CanvasTransforming />
    </div>
  )
}

export default CanvasDemos;
