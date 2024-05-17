import Link from "next/link";

export default function Page() {
  return (
    <p>
      The form has been submitted.{" "}
      <Link href="/a" className="font-medium underline">
        Go back
      </Link>
    </p>
  );
}
