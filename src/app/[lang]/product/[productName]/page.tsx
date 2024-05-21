import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams.id ?? null;

  if (!id) {
    return notFound();
  }

  return (
    <div>
      <p>Self healing URL!</p>
    </div>
  );
}
