import { forwardRef } from 'react'
import clsx from 'clsx'

export const Container = forwardRef(function Container(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  )
})
