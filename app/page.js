import Image from "next/image";
import { SideBar, Body } from "./components";

export default function Home() {
  return (
    <main className="flex gap-8 bg-skyblue justify-between ">
      <SideBar />
      <Body />
    </main>
  );
}
