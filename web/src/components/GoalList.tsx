import { CheckCircle2 } from 'lucide-react'

export function GoalList() {
  return (
    <ul className="flex flex-col gap-3">
      <li className="flex items-center gap-2">
        <CheckCircle2 className="size-4 text-pink-500" />
        <span className="text-sm text-zinc-400">
          Você completou "<span className="text-zinc-100">Acordar cedo</span>"
          às <span className="text-zinc-100">08:13h</span>
        </span>
      </li>
    </ul>
  )
}
