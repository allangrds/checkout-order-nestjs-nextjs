import * as s from './styles'

type Props = {
  colorScheme?: 'green' | 'gray'
  children: React.ReactNode
  onClick: () => void
  variant?: 'solid' | 'outline'
}

export const Button = ({
  colorScheme,
  children,
  onClick,
  variant,
}: Props) => (
  <s.Button
    colorScheme={colorScheme}
    onClick={onClick}
    variant={variant}
  >
    { children }
  </s.Button>
)
