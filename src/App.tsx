import { Calculator } from './components/Calculator';
import { SquaresDemo } from './components/SquaresDemo';
import { GradientHeading } from './components/GradientHeading';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center relative p-4">
      <SquaresDemo className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-md w-full">
        <GradientHeading text="Icode Guru Assignment 4: Calculator building via Prompt Engineering" />
        <Calculator />
      </div>
    </div>
  );
}

export default App;