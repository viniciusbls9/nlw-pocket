import { Progress, ProgressIndicator } from './ui/progress-bar'

export function ProgressBar() {
  return (
    <div className="flex flex-col gap-3">
      <Progress value={8} max={15}>
        <ProgressIndicator style={{ width: '50%' }} />
      </Progress>

      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>
          Você completou <span className="text-zinc-100">8</span> de{' '}
          <span className="text-zinc-100">15</span> metas nessa semana.
        </span>
        <span>50%</span>
      </div>
    </div>
  )
}
