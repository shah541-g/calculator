import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={twMerge(
        'bg-white dark:bg-gray-400 rounded-lg shadow-lg p-4 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90',
        className
      )}
    >
      {children}
    </div>
  );
}