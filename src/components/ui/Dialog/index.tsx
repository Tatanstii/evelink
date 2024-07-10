import { LuX } from 'react-icons/lu'
import { Button } from '../Button'

type Props = {
  title?: string
  isOpen: boolean
  onClose?: () => void
} & React.PropsWithChildren

export default function Modal({ isOpen, ...props }: Props) {
  if (!isOpen) return null

  return (
    <div className="fixed left-0 top-0 grid h-full w-full place-items-center bg-black/50">
      <div className="hadow-md min-w-[35%] max-w-[80%] rounded-md border border-primary bg-background shadow-primary-light">
        <div className="flex flex-row items-center justify-between gap-5 border-b-[1px] border-b-primary px-5 py-3">
          {props.title && (
            <h2 className="line-clamp-2 text-ellipsis text-lg font-semibold text-primary">
              {props.title}
            </h2>
          )}
          <Button variant="ghost" className="ml-auto" onClick={props.onClose}>
            <span className="sr-only">Close</span>
            <LuX className="default__icon" />
          </Button>
        </div>
        <div className="px-10 py-5">{props.children}</div>
      </div>
    </div>
  )
}
