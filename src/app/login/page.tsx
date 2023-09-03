import { loginMetadata } from "@/global/metadata";
import { Metadata } from "next";


export const metadata: Metadata = loginMetadata;

export default function Login() {
    return (
      <div className="text-white">
        <h1>Hello, World!</h1>
        <p>This is a functional component.</p>
      </div>
    );
  }
  