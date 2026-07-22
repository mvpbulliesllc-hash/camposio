import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge conditional class names and de-dupe conflicting Tailwind utilities.
 * Used across the docs components (callout, figure, glossary, custom-schema-ui).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
