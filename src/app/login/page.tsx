import { loginMetadata } from "@/global/metadata";
import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import LoginForm from "./LoginForm";

export const metadata: Metadata = loginMetadata;

export default function Login() {
  return (
    <div className="container-lg mt-5 px-5 px-lg-0">
     <SectionHeading section={"Login"}></SectionHeading>
     <LoginForm></LoginForm>
    </div>
  );
}
