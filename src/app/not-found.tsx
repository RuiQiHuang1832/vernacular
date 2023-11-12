import errorImage from "@/assets/images/home/illustration-data-5.png";
import Image from "next/image";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="text-white container mt-5">
      <div className="col col-lg-8 col-xl-6 mx-auto text-center">
        <p className="fs-1">We lost this page</p>
        <p className="fs-5">We searched high and low but could not find what you&apos;re looking for. Let&apos;s find a better place for you to go.</p>
          <Button color="btn-success" href="/" text="Return Home" width="16em"></Button>
      </div>
      <div className="text-center" >
        <Image src={errorImage.src} alt="not found logo" width={700} height={400} className="globalObjectFit" quality={100} />
      </div>
    </div>
  );
}
