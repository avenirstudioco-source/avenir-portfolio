import type { SVGProps } from 'react'
import { cn } from '@/lib/utils'

export function Sparkle({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
      {...props}
    >
      <path d="M12 0c.6 5.7 5.3 10.4 12 12-6.7 1.6-11.4 6.3-12 12-.6-5.7-5.3-10.4-12-12C6.7 10.4 11.4 5.7 12 0Z" />
    </svg>
  )
}
