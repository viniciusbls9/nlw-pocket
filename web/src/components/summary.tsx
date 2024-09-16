import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { InOrbitIcon } from './in-orbit-icon'
import { Separator } from './ui/separator'
import { ProgressBar } from './progress-bar'
import { GoalButton } from './goal-button'
import { GoalContainer } from './GoalContainer'
import type { SummaryResponse } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'

dayjs.locale(ptBR)

interface SummaryProps {
  summary: SummaryResponse
}

export function Summary({ summary }: SummaryProps) {
  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const LastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPercentage = Math.round(
    (summary?.completed * 100) / summary?.total
  )


  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg font-semibold capitalize">
            {firstDayOfWeek} - {LastDayOfWeek}
          </span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <ProgressBar
        completed={summary?.completed}
        total={summary?.total}
        completedPercentage={completedPercentage}
      />
      <Separator />
      <GoalButton />

      <GoalContainer goalsPerDay={summary?.goalsPerDay} />
    </div>
  )
}
