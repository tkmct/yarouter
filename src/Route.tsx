interface Props {
  path: string
  component: () => JSX.Element
  onEnter?: () => any
}

export default function Route({ component, onEnter }: Props) {
  if (onEnter) {
    onEnter()
  }

  return component()
}
