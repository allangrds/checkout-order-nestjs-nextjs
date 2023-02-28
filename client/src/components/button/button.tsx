import * as S from './styles'

type Props = {
  colorScheme?: 'green' | 'gray'
  children: React.ReactNode
  css?: any
  fullWidth?: boolean
  onClick: () => void
  variant?: 'solid' | 'outline'
}

export const Button = ({
  colorScheme,
  children,
  css,
  fullWidth,
  onClick,
  variant,
}: Props) => (
  <S.Button
    colorScheme={colorScheme}
    fullWidth={fullWidth}
    onClick={onClick}
    variant={variant}
    css={css}
  >
    { children }
  </S.Button>
)
