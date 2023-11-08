import React from 'react'
import Image from 'next/image'
import { ImageTextProps } from '@/global/benefitsData'

export default function ImageTextHeader(props: ImageTextProps){
  return (
    <><div className="d-flex justify-content-center pt-5">
    <Image src={props.src} alt={`${props.header} image`} width={props.size} height={props.size} quality={100} />
    <div className="col-7 ms-4">
      <h5>{props.header}</h5>
      <p className="fw-light">{props.paragraph}</p>
    </div>
  </div></>
  )
}
