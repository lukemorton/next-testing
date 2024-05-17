import { headers } from "next/headers";

export default function Home() {
  const headersList = headers();
  console.log(headersList.get("host"));

  return <>Testing</>;
}
