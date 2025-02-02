import { user } from "@/actions/User";
import { auth } from "@/auth";
import Navbar from "@/components/navigation/Navbar";
import { redirect } from "next/navigation";

const ComapanyLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { companyId: string };
}) => {
  const session = await auth();
  if (!session || session?.user?.id !== params.companyId) {
    redirect("/");
  }

  return (
    <div className="space-y-4">
      <Navbar />
      {children}
    </div>
  );
};

export default ComapanyLayout;
