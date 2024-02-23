import { IconType } from 'react-icons'
import { MdAttachMoney } from 'react-icons/md'

type CardProps = {
  title: string;
  description: string;
  value: string;
  icon: IconType
}

export const Card = ({
  title,
  description,
  value,
  icon: Icon
}: CardProps) => {

  return (
    <div className='bg-white rounded-[0.5rem] drop-shadow w-[calc(20.625rem-0.75rem*2)] p-3 py- flex flex-col gap-6'>
      <div className='w-full flex items-center justify-between'>
        <span className='text-lg font-medium'>
          {title}
        </span>
        <Icon size='1.4rem' />
      </div>
      <b className='text-lg font-bold'>
        {value}
      </b>
      <p className='text-[0.9375rem] text-gray-500 font-medium'>{description}</p>
    </div>
  )
}
