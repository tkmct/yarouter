interface Props {
  path: string
  component: () => JSX.Element
}

export default function Route({ component }: Props) {
  return component()
}
