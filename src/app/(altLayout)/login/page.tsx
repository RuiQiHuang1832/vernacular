import { loginMetadata } from "@/global/metadata";
import { Metadata } from "next";
import StepManager from "./components/StepManager";

export const metadata: Metadata = loginMetadata;

export default function Login() {
  return (
    <div className="container mt-5 text-white">
     <StepManager></StepManager>
    </div>
  );
}
