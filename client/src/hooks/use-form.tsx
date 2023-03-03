import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm as useFormReact } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useForm = <T extends FieldValues>(schema: any) => {
  const form = useFormReact<T>({
    resolver: zodResolver(schema),
  })

  return form
}
