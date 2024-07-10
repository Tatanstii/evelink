type PropTypes = {
  onChange?: (value: string) => void
}

export default function SearchField(props: PropTypes) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e.target.value)
    }
  }

  return (
    <input
      type="search"
      placeholder="www.mipagina.com"
      className="w-full rounded-md p-2"
      onChange={onChange}
    />
  )
}
