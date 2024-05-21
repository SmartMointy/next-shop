import Loader2Svg from "@/assets/icons/loader-2.svg";

export default function Loader2(props: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <Loader2Svg className="animate-spin" />
    </div>
  );
}
