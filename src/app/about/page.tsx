import Link from "next/link";

export default function About() {
  return (
    <div className="p-4">
      <Link href="/navbar">
        <h1 className="bg-blue-100 inline-block p-2">About Us</h1>
      </Link>
    </div>
  );
}
