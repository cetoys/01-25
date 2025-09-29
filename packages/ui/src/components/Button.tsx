import * as React from 'react';
import { colors, radii, spacing } from '../theme/tokens';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    backgroundColor: colors.primary,
    color: '#FFFFFF',
    border: 'none',
  },
  secondary: {
    backgroundColor: colors.secondary,
    color: '#FFFFFF',
    border: 'none',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.secondary,
    border: `1px solid ${colors.secondary}`,
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', style, ...props }, ref) => {
    const mergedStyles: React.CSSProperties = {
      padding: `${spacing.sm}px ${spacing.lg}px`,
      borderRadius: radii.md,
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'transform 150ms ease, opacity 150ms ease',
      ...variantStyles[variant],
      ...style,
    };

    return (
      <button
        ref={ref}
        style={mergedStyles}
        onFocus={(event) => {
          event.currentTarget.style.outline = `2px solid ${colors.accent}`;
          props.onFocus?.(event);
        }}
        onBlur={(event) => {
          event.currentTarget.style.outline = 'none';
          props.onBlur?.(event);
        }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
