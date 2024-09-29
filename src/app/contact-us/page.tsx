import Link from "next/link";

export default function Contact_us() {
  return (
    <div className="p-4">
      <Link href="/navbar">
        <h1 className="bg-red-100 inline-block p-2">Contact Us</h1>
      </Link>
    </div>
  );
}
