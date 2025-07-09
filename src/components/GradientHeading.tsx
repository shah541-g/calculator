import { twMerge } from 'tailwind-merge';

interface GradientHeadingProps {
  text: string;
  className?: string;
}

export function GradientHeading({ text, className }: GradientHeadingProps) {
  return (
    <h1
      className={twMerge(
        'text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#1E90FF] via-[#32CD32] to-[#8A2BE2] bg-clip-text text-transparent text-center mb-4 drop-shadow-md',
        className
      )}
      aria-label={text}
    >
      {text}
    </h1>
  );
}