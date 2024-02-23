import { numberToBRL } from '@/utils/number-to-brl'
import { HiUsers } from 'react-icons/hi'
import { MdAttachMoney, MdSell } from 'react-icons/md'

export const dashboardCards = (percents: number[]) => {

  const cards = [
    {
      title: 'Receita',
      description: `+${percents[0]}% em relação ao mês passado`,
      value: numberToBRL(25000),
      icon: MdAttachMoney
    },
    {
      title: 'Clientes',
      description: `+${percents[1]}% em relação ao mês passado`,
      value: `+${120}`,
      icon: HiUsers
    },
    {
      title: 'Vendas',
      description: `+${percents[2]}% em relação ao mês passado`,
      value: `+${50}`,
      icon: MdSell
    },
  ]

  return cards
}

export const dashboardSelectOptions = [
  {
    title: 'Receitas',
    value: 'revenues'
  },
  {
    title: 'Clientes',
    value: 'clients'
  },
  {
    title: 'Vendas',
    value: 'sales'
  },
]
