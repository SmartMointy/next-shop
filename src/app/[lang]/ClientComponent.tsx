"use client";

export default function ClientComponent({ children }: any) {
  return (
    <div>
      <p>This is an example Client Components</p>
      <p>Here are the children:</p>
      {children}
    </div>
  );
}
