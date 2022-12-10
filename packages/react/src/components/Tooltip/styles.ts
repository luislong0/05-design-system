import { styled } from '../../styles'
import { Box } from '../Box'

export const TooltipContainer = styled(Box, {
  padding: '$3 $4',
  textAlign: 'center',
})

export const Square = styled('div', {
  width: '$4',
  height: '$4',
  backgroundColor: 'red',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, 20%) rotate(45deg)',
  background: '$gray800',
})
