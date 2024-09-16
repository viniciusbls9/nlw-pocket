import dayjs from 'dayjs'
import { DayOffWeek } from './day-of-week'
import { GoalList } from './goal-list'
import { SummaryResponse } from '../http/get-summary'

interface GoalContainerProps {
  goalsPerDay: SummaryResponse['goalsPerDay']
}

export function GoalContainer({
  goalsPerDay,
}: GoalContainerProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-medium">Sua semana</h2>

      {Object.entries(goalsPerDay).map(([date, goals]) => {
        const weekDay = dayjs(date).format('dddd')
        const formattedDate = dayjs(date).format('D[ de ]MMMM')

        return (
          <div key={date} className="flex flex-col gap-4">
            <DayOffWeek weekDay={weekDay} date={formattedDate} />

            <GoalList goals={goals} />
          </div>
        )
      })}
    </div>
  )
}
