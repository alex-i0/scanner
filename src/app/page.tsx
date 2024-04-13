import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
    <div className="flex flex-col lg:flex-row">
      <Link
        href={`/scan`}
        className=" bg-red-200 m-4 text-4xl rounded-md px-4 py-2 hover:bg-blue-400"
      >
        QR Scan
      </Link>
    </div>
  </main>
  );
}
