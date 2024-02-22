
import React, { useState } from 'react'

import { cn } from '@/lib/utils'


import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {

    const [isShowingPassword, setIsShowingPassword] = useState<boolean>(false)

    const handleShowPassword = (): void => {
      setIsShowingPassword(true)
    }

    const handleHidePassword = (): void => {
      setIsShowingPassword(false)
    }

    return (
      <div className='w-full flex relative items-center'>
        <input
          type={isShowingPassword ? 'text' : 'password'}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />

        {
          isShowingPassword
            ?
            <IoEyeOffOutline 
              className='absolute right-2 cursor-pointer text-gray-400' 
              size='1.4rem'
              onClick={handleHidePassword}
            />
            :
            <IoEyeOutline 
              className='absolute right-2 cursor-pointer text-gray-400' 
              size='1.4rem'
              onClick={handleShowPassword}
            />
        }

      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
