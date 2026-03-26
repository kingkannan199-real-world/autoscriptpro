export default function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-text-gradient bg-gradient-to-r from-[#2563eb] via-[#06b6d4] to-[#2563eb] bg-[length:200%_auto] bg-clip-text text-transparent">
      {children}
    </span>
  );
}