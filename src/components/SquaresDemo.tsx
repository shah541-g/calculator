import { Squares } from "./Squares";

export function SquaresDemo({ className }: { className?: string }) {
  return (
    <Squares
      direction="diagonal"
      speed={0.5}
      squareSize={40}
      borderColor="#333"
      hoverFillColor="#222"
      className={className}
    />
  );
}