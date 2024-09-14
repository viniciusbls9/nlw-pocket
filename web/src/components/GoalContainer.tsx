import { DayOffWeek } from './DayOfWeek'
import { GoalList } from './GoalList'

export function GoalContainer() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">Sua semana</h2>

      <div className="flex flex-col gap-4">
        <DayOffWeek />

        <GoalList />
      </div>
    </div>
  )
}
