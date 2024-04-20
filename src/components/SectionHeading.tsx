/* eslint-disable @typescript-eslint/no-unused-vars */

type HeadingProps = {
    section: string
    on?: boolean;
    headingStyles?:string;
}
export default function SectionHeading(props: HeadingProps) {
  const { section, on = false } = props; // Set a default value of false for on

  return (
    on ? <h5 className={`pb-2 fw-light section-heading ${props.headingStyles}`}>{section}</h5> : ""
  )
}
