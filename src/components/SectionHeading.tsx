/* eslint-disable @typescript-eslint/no-unused-vars */

type HeadingProps = {
    section: string
    on?: boolean
}
export default function SectionHeading(props: HeadingProps) {
  const { section, on = false } = props; // Set a default value of false for on

  return (
    on ? <h1 className="text-center text-white mb-5 pb-3 section-heading">{section}</h1> : ""
  )
}
