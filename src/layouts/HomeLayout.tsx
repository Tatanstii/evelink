import CreateModal from '@/components/CreateModal'

type Props = React.PropsWithChildren

export default function HomeLayout(props: Props) {
  return (
    <div className="px-20 py-10 md:px-40 md:py-20">
      {props.children}
      <CreateModal />
    </div>
  )
}
