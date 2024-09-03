import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-neutral-800 border-b border-neutral-100 sticky top-0 z-10">
      <div className="px-4 py-2.5">
        <Link href={"/"}>
          <h1 className="text-white font-bold text-base">BetaSorte</h1>
        </Link>
      </div>
    </div>
  );
}
