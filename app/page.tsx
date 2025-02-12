import PropartyCard from "@/components/card/PropartyCard";
import Hero from "@/components/hero";
import Areas from "@/components/hero/Areas";
import { db } from "@/drizzle";

export default async function Home() {
  const properties = await db.query.properties.findMany();
  // console.log(properties);
  return (
    <div className="mb-10">
      <Hero />
      <Areas />
      <div>
        <h1 className="text-xl font-bold text-primary">Featured Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3">
          {properties.length === 0 ? (
            <div className="mt-3 text-2xl ml-2 font-bold italic">
              No properties found
            </div>
          ) : (
            <>
              {properties.map(async (property) => {
                const company = await db.query.users.findFirst();
                return (
                  <PropartyCard
                    property={property}
                    company={company}
                    key={property.id}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
