import { cn } from '@/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const buttonVariants = cva('rounded-md px-4 py-2 transition', {
  variants: {
    variant: {
      default: 'bg-primary text-accent-foreground hover:bg-primary-dark',
      outline:
        'border-primary border-2 text-primary hover:bg-primary hover:text-accent-foreground',
      ghost: 'text-primary hover:bg-primary hover:text-accent-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const Button: React.FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {props.children}
    </button>
  )
}

export { Button, buttonVariants }
