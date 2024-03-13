import { ReactNode } from 'react'
import { tv } from 'tailwind-variants'

const buttonStyle = tv({
  base: 'flex items-center justify-center gap-2 rounded-md border px-3 py-2 shadow-sm group disabled:cursor-not-allowed outline-none focus-within:ring-2 focus-within:ring-yellow-500/40 transition-all',
  variants: {
    color: {
      primary:
        'text-primary-500 hover:text-primary-700 hover:border-primary-400',
      secondary: 'bg-highlight-500/80 text-white hover:bg-highlight-300',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'primary' | 'secondary'
}

function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      className={buttonStyle({ color: variant })}
      {...props}
      data-testid="variantButtonTest"
    >
      {children}
    </button>
  )
}

interface ButtonTextProps {
  children: ReactNode
}

function ButtonText({ children }: ButtonTextProps) {
  return <span>{children}</span>
}

interface ButtonIconProps {
  children: ReactNode
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }
