import Navbar from "../components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-full">
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    );
  }
  