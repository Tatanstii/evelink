import type { Link } from '@/type'
import WorldIcon from '@/components/WorldIcon'
import { HiExternalLink } from 'react-icons/hi'
import { GOOGLE_FAVICON_API } from '@/lib/const'

type Props = {
  link: Link
}
export default function Link(props: Props) {
  const { link } = props

  const imageFromUrl = `${GOOGLE_FAVICON_API}?domain=${link.url}`

  const onClick = () => {
    window.open(link.url, '_blank', 'noopener noreferrer')
  }

  return (
    <div
      className="group flex flex-col gap-1 hover:cursor-pointer"
      onClick={onClick}
      title={link.title}
    >
      <div className="relative block rounded-md bg-deluger-300 p-5">
        <span className="invisible absolute right-2 top-2 transition group-hover:visible">
          <HiExternalLink className="default__icon" />
        </span>
        <div className="flex h-[100px] w-full flex-row items-center justify-center">
          {link.showImage ? (
            <img src={imageFromUrl} alt={link.title} className="h-10 w-10" />
          ) : (
            <WorldIcon />
          )}
        </div>
      </div>
      <h1 className="text-sm text-foreground">{link.title}</h1>
    </div>
  )
}
