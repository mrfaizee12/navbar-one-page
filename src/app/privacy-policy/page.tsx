import Link from "next/link";

export default function Privacy_Policy() {
  return (
    <div className="p-4">
      <Link href="/navbar">
        <h1 className="bg-blue-100 inline-block p-2">Privacy Policy</h1>
      </Link>
    </div>
  );
}
