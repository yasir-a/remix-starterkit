export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center px-5 py-24">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      <div className="flex max-w-2xl flex-col items-center space-y-6">
        <div className="flex">
          <span className="relative overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
            <div className="select-none rounded-full bg-black px-3 py-1 text-xs font-medium leading-5 text-slate-200 backdrop-blur-xl">
              It&apos;s done. The Remix Starter kit is ready now
            </div>
          </span>
        </div>

        <h2 className="text-center text-3xl font-medium text-gray-50 sm:text-6xl">
          New project&apos;s live!
        </h2>

        <p className="text-center text-lg leading-6 text-gray-200">
          Setting up and customizing my new web project, integrating tools, and
          applying best practices for a smooth development process. Stay tuned
          for more updates!
        </p>
      </div>
    </div>
  );
}
