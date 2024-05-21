import Underbar from "@/components/underbar";

export default async function CategoryLayout({
  children,
  params: { mainCategory },
}: {
  children: React.ReactNode;
  params: { mainCategory: string };
}) {
  return (
    <>
      <Underbar category={mainCategory} />
      {children}
    </>
  );
}
