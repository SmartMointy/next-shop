export default function Container({
  children,
  ...props
}: {
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={`mx-auto max-w-7xl px-10 ${props.className ?? ""}`}
    >
      {children}
    </div>
  );
}
