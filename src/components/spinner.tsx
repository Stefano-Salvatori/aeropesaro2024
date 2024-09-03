import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const Spinner = ({ className }: { className?: string }) => {
  return <LoaderCircle className={cn("h-6 w-6 text-primary/90 animate-spin", className)} />;
};

export { Spinner };
