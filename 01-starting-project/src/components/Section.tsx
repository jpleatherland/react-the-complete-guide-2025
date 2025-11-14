export default function Section(props: { title: string, children: React.ReactNode, [key: string]: any }) {
  const { title, children, ...rest } = props
  return (
    <section {...rest}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}