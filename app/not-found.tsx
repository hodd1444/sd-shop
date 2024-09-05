import Link from 'next/link'
import { Home, AlertTriangle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#272727] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <AlertTriangle className="h-24 w-24 text-[#EC3C7C] mb-4" />
          <h1 className="text-4xl font-extrabold text-[#FFCB00]">404</h1>
          <h2 className="mt-2 text-3xl font-bold text-white">Page Not Found</h2>
          <p className="mt-2 text-md text-gray-400">
            Oops! The page you&apos;re looking for doesn&apos;t seem to exist.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#272727] bg-[#FFCB00] hover:bg-[#EC3C7C] transition-colors duration-300">
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
        </div>
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            You think this is an error?
          </p>
          <Link href="https://github.com/hodd1444/sd-shop/issues" className="text-sm text-[#FFCB00] hover:text-[#EC3C7C] transition-colors duration-300">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}