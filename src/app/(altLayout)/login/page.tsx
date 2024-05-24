import { loginMetadata } from "@/global/metadata";
import { Metadata } from "next";
import StepManager from "./components/StepManager";
import "@/styles/login-styles/login.css"

export const metadata: Metadata = loginMetadata;

export default function Login() {
  return (
    <div className="container  text-white">
     <StepManager></StepManager>
    </div>
  );
}
