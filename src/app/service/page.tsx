import Link from "next/link";

export default function Services() {
  return (
    <div className="p-4">
      <Link href="/navbar">
        <h1 className="bg-green-100 inline-block p-2">Services</h1>
      </Link>
    </div>
  );
}
