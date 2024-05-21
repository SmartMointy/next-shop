import WorkInProgress from "@/components/work-in-progress";

export default function UserProfile({ params }: { params: { id: string } }) {
  console.log();
  return (
    <div>
      <p>You are trying to access user profile with id: {params.id}</p>
      <WorkInProgress />
    </div>
  );
}
