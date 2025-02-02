import AddEditForm from "@/components/company/AddEditForm";
import { db } from "@/drizzle";

const AddEditPropertiesPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const property = await db.query.properties.findFirst({
    where: (property, { eq }) => eq(property.id, params.id),
  });

  return <AddEditForm initialData={property} />;
};

export default AddEditPropertiesPage;
