// app/signup/page.tsx
'use client'

import Navbar from '../Navbar'
import SignupForm from '../SignupForm'

export default function SignupPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <SignupForm />
      </main>
    </>
  )
}
