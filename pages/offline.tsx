import Link from "next/link";
import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <WifiOff className="w-16 h-16 mx-auto mb-4 text-gray-400" />
        <h1 className="text-2xl font-bold mb-2">You're Offline</h1>
        <p className="text-gray-600 mb-4">Please check your internet connection and try again.</p>
        <Link
          href="/"
          className="inline-block bg-primary text-white px-6 py-2 rounded-lg hover:bg-dark transition-colors"
        >
          Retry Connection
        </Link>
      </div>
    </div>
  );
}
