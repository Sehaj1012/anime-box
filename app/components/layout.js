import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4">
        <Link href="/">
          <span className="mr-4">Home</span>
        </Link>
        <Link href="/about">
          <span>About</span>
        </Link>
      </nav>
      <main className="flex-grow p-4">
        {children}
      </main>
    </div>
  );
}
