
type HeadingProps = {
    section: string
}
export default function SectionHeading(props: HeadingProps) {
  return (
    <h1 className="text-center text-white mb-5 pb-3 section-heading">{props.section}</h1>
  )
}
