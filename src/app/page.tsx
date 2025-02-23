import Characters from "@/components/sections/Home/Characters";
import Hero from "@/components/sections/Home/Hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 gap-5 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Characters />
      </main>
    </div>
  );
}
