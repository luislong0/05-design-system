import { styled } from '../../styles'
import { Box } from '../Box'
import { Text } from '../Text'

export const ToastContainer = styled(Box, {
  maxWidth: '22.5rem',
  width: '100%',
  padding: '0.75rem 1.25rem',

  borderRadius: '$sm',
  fontFamily: '$default',

  variants: {
    variant: {
      default: {
        border: '1px solid $gray600',
      },
      error: {
        border: '2px solid $red500',
      },
    },
  },

  defaultVariants: {
    variant: 'alert',
  },
})

export const HeaderContainer = styled('header', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',

  h2: {
    margin: 0,
    padding: 0,
    fontSize: '$xl',
    color: '$gray100',
  },

  button: {
    background: 'transparent',
    border: 'none',
    color: '$gray200',
    cursor: 'pointer',
  },

  svg: {
    margin: 0,
    padding: 0,

    '&:hover': {
      color: '$gray100',
    },
  },
})

export const DateDetail = styled(Text, {
  color: '$gray200',
  display: 'block',
  marginTop: '$2',

  defaultVariants: {
    size: 'sm',
  },
})

export const AlertDetail = styled(Text, {
  color: '$gray200',
  display: 'block',
  marginTop: '$2',

  defaultVariants: {
    size: 'sm',
  },
})
