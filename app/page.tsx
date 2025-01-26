import PropartyCard from "@/components/card/PropartyCard";
import Hero from "@/components/hero";
import Areas from "@/components/hero/Areas";
import Header from "@/components/navigation/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-10">
        <Hero />
        <Areas />
        <div>
          <h1 className="text-xl font-bold">Featured Properties</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3">
            <PropartyCard />
          </div>
        </div>
      </div>
    </div>
  );
}
