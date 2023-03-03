import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { Button, Container } from '@/components'
import * as S from '@/styles/checkout-success.styles'

const CheckoutSuccess = () => {
  const router = useRouter()
  const { t } = useTranslation()

  const handleOnGoBack = () => router.replace('/')

  return (
    <Container>
      <S.Content>
        <S.Text>{ t('pages.checkout-success.title') }</S.Text>
        <Button
          colorScheme="gray"
          variant="outline"
          onClick={handleOnGoBack}
          fullWidth
        >
          { t('pages.checkout-success.go-back') }
        </Button>
      </S.Content>
    </Container>
  )
}

export default CheckoutSuccess
