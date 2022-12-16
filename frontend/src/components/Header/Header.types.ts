export type HeaderProps = {
  siteTitle: string
} & React.HTMLAttributes<HTMLDivElement>

export type HeaderComponent = (props: HeaderProps) => JSX.Element
