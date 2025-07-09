import type { MouseEvent, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'operator' | 'special';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className,
}: ButtonProps) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors text-sm sm:text-base';
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600',
    operator: 'bg-orange-500 hover:bg-orange-600 text-white',
    special: 'bg-blue-500 hover:bg-blue-600 text-white',
  };

  return (
    <button
      className={twMerge(
        clsx(baseStyles, variantStyles[variant]),
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}