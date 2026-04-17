import { signIn } from "@/lib/admin-actions";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-foreground/10 p-6">
      <h1 className="mb-6 text-2xl font-semibold">Admin Login</h1>
      <form action={signIn} className="space-y-4">
        <input name="email" type="email" placeholder="Email" required className="w-full rounded-lg border border-foreground/20 px-3 py-2" />
        <input name="password" type="password" placeholder="Password" required className="w-full rounded-lg border border-foreground/20 px-3 py-2" />
        <button className="w-full rounded-lg bg-primary px-4 py-2 text-white">Sign In</button>
      </form>
    </div>
  );
}

