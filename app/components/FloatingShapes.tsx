interface FloatingShapesProps {
  mousePosition: { x: number; y: number };
}

function FloatingShapes({ mousePosition }: FloatingShapesProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="shape-3d shape-sphere"
        style={{
          transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
        }}
      >
        <div className="sphere"></div>
      </div>

      <div
        className="shape-3d shape-cube"
        style={{
          transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
        }}
      >
        <div className="cube">
          <div className="cube-face cube-front"></div>
          <div className="cube-face cube-back"></div>
          <div className="cube-face cube-right"></div>
          <div className="cube-face cube-left"></div>
          <div className="cube-face cube-top"></div>
          <div className="cube-face cube-bottom"></div>
        </div>
      </div>

      <div
        className="shape-3d shape-ring"
        style={{
          transform: `translate(${mousePosition.x * 1.2}px, ${mousePosition.y * 1.2}px)`,
        }}
      >
        <div className="ring"></div>
      </div>

      <div
        className="shape-3d shape-pyramid"
        style={{
          transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
        }}
      >
        <div className="pyramid">
          <div className="pyramid-face pyramid-front"></div>
          <div className="pyramid-face pyramid-back"></div>
          <div className="pyramid-face pyramid-right"></div>
          <div className="pyramid-face pyramid-left"></div>
          <div className="pyramid-face pyramid-base"></div>
        </div>
      </div>
    </div>
  );
}

export default FloatingShapes;
