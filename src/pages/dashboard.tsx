import { useUser } from '@/hooks/use-user'

import { Card } from '@/components/custom/card'
import { Chart } from '@/components/custom/chart'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'

import { dashboardCards, dashboardSelectOptions as selectOptions } from '@/constants/dashboard-items'


export const Dashboard = () => {
  const { currentUser } = useUser()

  const cards = dashboardCards([22, 11, 10])

  return (
    <main className='w-full flex flex-col px-12 pt-14'>
      <div className='w-full'>
        <p className='text-2xl font-medium'>Olá. Seja bem-vindo,</p>
        <b className='text-primary font-bold text-[1.75rem]'>{currentUser?.displayName ?? 'usuário'}</b>
      </div>

      <div className='w-full flex items-center gap-10 flex-wrap mt-12'>
        {
          cards.map(card => (
            <Card
              key={card.title}
              {...card}
            />
          ))
        }
      </div>

      <div className='w-52 mt-[3rem] mb-[0.875rem]'>
        <Select value='revenues'>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {
                selectOptions.map(option => (
                  <SelectItem 
                    key={option.value} 
                    value={option.value}
                  >
                    {option.title}
                  </SelectItem>
                ))
              }
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>


      <div className='w-full h-2/3 bg-white flex flex-col rounded-[0.5rem] drop-shadow pt-6 pb-16'>
        <h4 className='font-semibold text-lg ml-7'>Receitas</h4>
        <Separator className='mt-3 mb-9' />

        <div className='w-full h-80'>
          <Chart />
        </div>

      </div>

      
    </main>
  )
}
