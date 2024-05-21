export default function Input({
  ...props
}: {} & React.ComponentPropsWithRef<"input">) {
  return (
    <input
      type="text"
      {...props}
      className={`h-12 w-full rounded-md border border-zinc-200 px-4 text-sm outline-none ring-gold-500 focus:ring-2 ${props.className}`}
    />
  );
}
