import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import { Square, TooltipContainer } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  date: Date
}

export function Tooltip({ children, date }: TooltipProps) {
  return (
    <TooltipContainer>
      <Text size={'sm'}>
        {`${String(
          format(date, "dd 'de' MMMM", {
            locale: ptBR,
          }),
        )} - ${children}`}
      </Text>
      <Square />
    </TooltipContainer>
  )
}
