import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ModuleNavigationProps {
  prevModule?: {
    slug: string;
    title: string;
  };
  nextModule?: {
    slug: string;
    title: string;
  };
}

export default function ModuleNavigation({ prevModule, nextModule }: ModuleNavigationProps) {
  return (
    <nav
      className="flex justify-between items-center mt-12 py-6 border-t"
      aria-label="Module navigation"
    >
      <div>
        {prevModule && (
          <Link
            href={`/modules/${prevModule.slug}`}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <div className="text-sm">
              <div className="font-medium">Previous Module</div>
              <div>{prevModule.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div>
        {nextModule && (
          <Link
            href={`/modules/${nextModule.slug}`}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <div className="text-sm text-right">
              <div className="font-medium">Next Module</div>
              <div>{nextModule.title}</div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </nav>
  );
}
