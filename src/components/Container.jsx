import { forwardRef } from 'react'
import clsx from 'clsx'

export const Container = forwardRef(function Container(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('mx-auto px-6 lg:px-8 max-w-7xl', className)} {...props}>
      {children}
    </div>
  )
})
