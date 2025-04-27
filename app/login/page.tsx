// app/login/page.tsx
import LoginForm from '../LoginForm';
import Navbar from '../Navbar'

export default function LoginPage() {
  return (
    <>
    <Navbar />
    <main className="pt-24"> {/* espacio para el navbar */}
      <LoginForm />
    </main>
  </>
  )
}
