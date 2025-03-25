'use client'

import { User, Mail, ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { InputField, InputIcon, InputRoot } from "../components/input";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { subscribeToEvent} from '@/http/api'

import { date, z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail válido'),
})

type SubscriptionSchema = z.infer<typeof subscriptionSchema>

export function SubscriptionForm() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionSchema>({
    resolver: zodResolver(subscriptionSchema),
  })

  async function onSubscribe({ name, email }: SubscriptionSchema) {  
    const { subscriberId } = await subscribeToEvent({ name, email })
    router.push(`/invite/${subscriberId}`)
  }

  return(
    <form 
      className="w-full bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 md:max-w-[440px]"
      onSubmit={handleSubmit(onSubscribe)}
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField 
              type="text" 
              placeholder="Nome completo"
              {...register('name')}
            />
          </InputRoot>

          {errors?.name && (
            <p className="text-danger font-semibold text-xs">
              {errors.name.message}
            </p>
          )}

        </div>

        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField 
              type="text" 
              placeholder="E-mail" 
              {...register('email')}
            />
          </InputRoot>

          {errors?.email && (
            <p className="text-danger font-semibold text-xs">
              {errors.email.message}
            </p>
          )}

        </div>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight className="size-6" />
      </Button>
    </form>
  )
}