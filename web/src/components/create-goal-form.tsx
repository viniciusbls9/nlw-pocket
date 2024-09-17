import { Controller, useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { DialogClose } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../http/create-goal'
import { useQueryClient } from '@tanstack/react-query'
import { invalidateQuery } from '../utils/invalidate-query'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

const groupItemValue = [
  { value: '1', title: '1x na semana', icon: '🥱' },
  { value: '2', title: '2x na semana', icon: '🙂' },
  { value: '3', title: '3x na semana', icon: '😎' },
  { value: '4', title: '4x na semana', icon: '😜' },
  { value: '5', title: '5x na semana', icon: '🤨' },
  { value: '6', title: '6x na semana', icon: '🤯' },
  { value: '7', title: 'todos os dias da semana', icon: '🔥' },
]

export function CreateGoalForm() {
  const queryClient = useQueryClient()

  const { register, control, handleSubmit, formState, reset } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })

  async function handleCreateGoal(data: CreateGoalForm) {
    await createGoal({title: data.title, desiredWeeklyFrequency: data.desiredWeeklyFrequency})

    invalidateQuery({queryClient, queryId: 'summary'})
    invalidateQuery({queryClient, queryId: 'pending-goals'})

    reset()
  }

  return (
    <form
      className="flex-1 flex flex-col justify-between"
      onSubmit={handleSubmit(handleCreateGoal)}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Qual a atividade?</Label>
          <Input
            id="title"
            autoFocus
            placeholder="Praticar exercícios, meditar, etc..."
            {...register('title')}
          />

          {formState.errors.title && (
            <p className="text-red-400 text-sm">
              {formState.errors.title.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Quantas vezes na semana?</Label>
          <Controller
            control={control}
            name="desiredWeeklyFrequency"
            defaultValue={3}
            render={({ field }) => {
              return (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={String(field.value)}
                >
                  {groupItemValue.map(item => {
                    return (
                      <RadioGroupItem value={item.value} key={item.value}>
                        <RadioGroupIndicator />
                        <span className="text-zinc-300 text-sm font-medium leading-none">
                          {item.title}
                        </span>
                        <span className="text-lg leading-none">
                          {item.icon}
                        </span>
                      </RadioGroupItem>
                    )
                  })}
                </RadioGroup>
              )
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DialogClose asChild>
          <Button type="button" className="flex-1" variant="secondary">
            Fechar
          </Button>
        </DialogClose>
        <Button className="flex-1">Salvar</Button>
      </div>
    </form>
  )
}
