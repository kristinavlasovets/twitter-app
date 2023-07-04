import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number;
  height?: number;
  backgroundColor?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  opacity?: number;
  margin?: number;
  children?: ReactNode;
  disabled?: boolean;

  onClick?: () => void;
}

export type WrapperProps = Omit<ButtonProps, 'children'>;
