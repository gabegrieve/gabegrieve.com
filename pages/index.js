import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <header className="flex justify-between items-center my-4">
        <div>
          <h2>Gabe Grieve</h2>
        </div>
        <button>
          <Image src="/icons/dots.svg" alt="Menu Icon" width={2} height={10} />
        </button>
      </header>
    </div>
  );
}
