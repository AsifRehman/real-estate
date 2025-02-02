import PropartyCard from "@/components/card/PropartyCard";
import { db } from "@/drizzle";

const CompanyPage = async () => {
  const properties = await db.query.properties.findMany();

  return (
    <div className="mb-10">
      <h1 className="text-xl font-bold text-primary">Your Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 mb-10">
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
      </div>
    </div>
  );
};

export default CompanyPage;
