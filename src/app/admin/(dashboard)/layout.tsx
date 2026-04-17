import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) redirect("/admin/login");
  if (process.env.ADMIN_EMAIL && data.user.email !== process.env.ADMIN_EMAIL) redirect("/");

  return <AdminShell>{children}</AdminShell>;
}

