export default function H2comp({ children }: { children: string | string[] }) {
  return (
    <h2 className="text-gray-800 text-3xl font-semibold mb-3">{children}</h2>
  );
}
