import { Button } from './ui/button'
import { DialogClose } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'

export function CreateGoalForm() {
  return (
    <form className="flex-1 flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Qual a atividade?</Label>
          <Input
            id="title"
            autoFocus
            placeholder="Praticar exercícios, meditar, etc..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Quantas vezes na semana?</Label>
          <RadioGroup>
            <RadioGroupItem value="1">
              <RadioGroupIndicator />
              <span className="text-zinc-300 text-sm font-medium leading-none">
                1x na semana
              </span>
              <span className="text-lg leading-none">🥱</span>
            </RadioGroupItem>

            <RadioGroupItem value="2">
              <RadioGroupIndicator />
              <span className="text-zinc-300 text-sm font-medium leading-none">
                2x na semana
              </span>
              <span className="text-lg leading-none">🙂</span>
            </RadioGroupItem>
          </RadioGroup>
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
