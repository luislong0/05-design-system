import { AlertToastProps, Toast, ToastProps } from '@longo-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Alert/Toast',
  component: Toast,
  args: {
    children: 'Toast title',
    date: new Date(),
    variant: 'default',
  },

  argTypes: {
    date: {
      control: 'date',
    },
    variant: {
      options: ['default', 'error'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {},
}

export const DateToast: StoryObj<ToastProps> = {
  args: {
    children: 'Date title',
    date: new Date(),
  },
}

export const AlertToast: StoryObj<AlertToastProps> = {
  args: {
    children: 'Alert title',
    date: undefined,
    alert: 'Lorem, ipsum dolor sit',
  },
  argTypes: {
    date: {
      control: {
        type: null,
      },
    },
  },
}

export const ErrorToast: StoryObj<AlertToastProps> = {
  args: {
    children: 'Error title',
    date: undefined,
    alert: 'Lorem, ipsum dolor sit',
    variant: 'error',
  },
  argTypes: {
    date: {
      control: {
        type: null,
      },
    },
  },
}
