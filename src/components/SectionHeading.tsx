/* eslint-disable @typescript-eslint/no-unused-vars */

type HeadingProps = {
    section: string
}
export default function SectionHeading(props: HeadingProps) {
  return (
    <h1 className="pt-5">{""}</h1>

    // <h1 className="text-center text-white mb-5 pb-3 section-heading">{props.section}</h1>
  )
}
