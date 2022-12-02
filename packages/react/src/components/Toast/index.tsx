import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Heading } from '../Heading'
import {
  AlertDetail,
  DateDetail,
  HeaderContainer,
  ToastContainer,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  date?: Date
  alert?: string
}

export interface AlertToastProps extends ComponentProps<typeof ToastContainer> {
  date?: Date
  alert?: string
}

export function Toast({ date, children, alert, variant }: ToastProps) {
  const week = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ]

  return (
    <ToastContainer variant={variant}>
      <HeaderContainer>
        <Heading as={'h2'}>{children}</Heading>

        <button>
          <X size={20} weight="bold" />
        </button>
      </HeaderContainer>
      {!!date && (
        <DateDetail>{`${week[new Date(date).getDay()]}, ${String(
          format(date, "dd MMMM yyyy 'ás'	HH'h':mm'min'", {
            locale: ptBR,
          }),
        )}`}</DateDetail>
      )}

      {!!alert && <AlertDetail>{alert}</AlertDetail>}
    </ToastContainer>
  )
}
