import { Progress, ProgressIndicator } from './ui/progress-bar'

interface ProgressProps {
  completed?: number
  total?: number
  completedPercentage: number
}

export function ProgressBar({
  completed,
  total,
  completedPercentage,
}: ProgressProps) {
  return (
    <div className="flex flex-col gap-3">
      <Progress value={8} max={15}>
        <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
      </Progress>

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Você completou <span className="text-zinc-100">{completed}</span> de{' '}
          <span className="text-zinc-100">{total}</span> metas nessa semana.
        </span>
        <span>{completedPercentage}%</span>
      </div>
    </div>
  )
}
