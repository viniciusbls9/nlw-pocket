import dayjs from 'dayjs'
import { CheckCircle2 } from 'lucide-react'

interface GoalListProps {
  goals: {
    id: string
    title: string
    completedAt: string
  }[]
}

export function GoalList({ goals }: GoalListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {goals.map(goal => {
        const time = dayjs(goal.completedAt).format('HH:mm')

        return (
          <li key={goal.id} className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-pink-500" />
            <span className="text-sm text-zinc-400">
              Você completou "
              <span className="text-zinc-100">{goal.title}</span>" às{' '}
              <span className="text-zinc-100">{time}h</span>
            </span>
          </li>
        )
      })}
    </ul>
  )
}
