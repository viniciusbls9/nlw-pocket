interface DayOffWeekProps {
  date: string
  weekDay: string
}

export function DayOffWeek({ weekDay, date }: DayOffWeekProps) {
  return (
    <h3 className="font-medium">
      <span className="capitalize">{weekDay}</span>
      <span className="text-zinc-400 text-xs">({date})</span>
    </h3>
  )
}
