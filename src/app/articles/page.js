import Link from "next/link";

export default function page() {
  return (
    <div>
      Welcome articles <Link href={"/"}> Home</Link>
    </div>
  )
}
