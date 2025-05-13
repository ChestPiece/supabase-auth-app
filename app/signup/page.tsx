import SignupForm from "@/components/signup-form"

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="w-full max-w-md">
        <SignupForm />
      </div>
    </main>
  )
}
