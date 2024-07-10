type Props = React.InputHTMLAttributes<HTMLInputElement>

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="rounded-md p-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary"
    />
  )
}
