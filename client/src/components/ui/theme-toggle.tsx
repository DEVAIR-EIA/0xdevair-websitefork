import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`w-9 h-9 rounded-full text-text-secondary ${className || ""}`}
        aria-label="Toggle theme"
        disabled
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`w-9 h-9 rounded-full text-text-secondary hover:text-cherry-pink hover:bg-dark-secondary/60 transition-all duration-300 ${className || ""}`}
      title={isDark ? "Switch to Light mode" : "Switch to Dark mode"}
      aria-label="Toggle color theme"
      id="theme-toggle-btn"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-yellow-300" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </Button>
  );
}
