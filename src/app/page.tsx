
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <Link href="/navbar">
        <h1 className="bg-blue-100 inline-block p-2">Home Page</h1>
      </Link>
    </div>
  );
}
