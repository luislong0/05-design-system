import { Tooltip, TooltipProps } from '@longo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Alert/Tooltip',
  component: Tooltip,
  args: {
    children: 'Disponível',
    date: new Date(),
  },

  argTypes: {
    date: {
      control: 'date',
    },
    children: {
      options: ['Disponível', 'Indisponível'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {},
}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    children: 'Indisponível',
  },
  argTypes: {},
}
