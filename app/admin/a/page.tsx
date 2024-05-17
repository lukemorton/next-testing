import Link from "next/link";
import { testAction } from "./_action";

export default function Page() {
  return (
    <>
      <form action={testAction}>
        <p>Submitting this form will redirect to /b</p>
        <button type="submit" className="bg-blue-700 text-white rounded-lg p-3">
          Submit
        </button>
      </form>

      <p>
        Navigating by link{" "}
        <Link href="/b" className="font-medium underline">
          works fine
        </Link>
        .
      </p>
    </>
  );
}
