import { Button } from "@/components/catalyst/button";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
    <div className="flex flex-col lg:flex-row">
      <Link
        href={`/scan`}
      >
        <Button color="indigo">
          QR Scan
        </Button>

      </Link>
    </div>
  </main>
  );
}
