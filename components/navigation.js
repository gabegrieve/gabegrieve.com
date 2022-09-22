import Image from "next/image";
import { siteTitle } from "../components/layout";

export default function Navigation({ children }) {
  return (
    <div className="container">
      <div className="flex justify-between items-center my-4">
        <div>
          <h2>{siteTitle}</h2>
        </div>
        <button>
          <Image src="/icons/dots.svg" alt="Menu Icon" width={2} height={10} />
        </button>
      </div>
    </div>
  );
}
