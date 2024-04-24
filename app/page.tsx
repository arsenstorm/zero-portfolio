import Image from "next/image";
import Link from "next/link";

export default function SinglePageZeroPortfolio() {
  return (
    <main className="max-w-2xl mx-auto border-x-2 border-zinc-100 dark:border-zinc-900 min-h-screen">
      <div
        className="p-8 border-b-2 border-zinc-100 dark:border-zinc-900 flex flex-row items-center gap-4"
      >
        <div className="size-12 rounded-xl ring-2 ring-zinc-100 dark:ring-zinc-900">
          <Image
            src={"/arsen.png"}
            alt=""
            width={100}
            height={100}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col">
          <h1
            className="text-2xl font-bold text-zinc-950 dark:text-zinc-50 tracking-tighter"
          >
            hey, i’m arsen
          </h1>
          <p className="text-zinc-900 dark:text-zinc-50 tracking-tight">
            i like to build things.
          </p>
        </div>
      </div>
      <div className="border-b-2 border-zinc-100 dark:border-zinc-900">
        <div className="ring-2 ring-zinc-100 dark:ring-zinc-900 rounded-xl px-4 py-2 m-8 flex flex-col gap-y-2 ">
          <h2 className="text-zinc-900 dark:text-zinc-50 text-md tracking-tight font-semibold">
            i build a lot of things, but i don’t like building portfolios
          </h2>
          <p className="text-zinc-900 dark:text-zinc-50 text-sm tracking-tight">
            check out my <Link href="https://github.com/arsenstorm" className="underline underline-offset-4">github</Link> instead.
          </p>
          <p className="text-zinc-900 dark:text-zinc-50 text-sm tracking-tight">
            or book a call with me <Link href="https://cal.com/arsen" className="underline underline-offset-4">here</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
