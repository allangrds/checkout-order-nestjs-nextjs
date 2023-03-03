import * as S from './button.styles'

type Props = {
  colorScheme?: 'green' | 'gray'
  children: React.ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  css?: any
  fullWidth?: boolean
  onClick: () => void
  variant?: 'solid' | 'outline'
}

export const Button = ({
  children,
  colorScheme,
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
    {children}
  </S.Button>
)
