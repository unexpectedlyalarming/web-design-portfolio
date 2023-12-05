import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <p>
        The page you are looking for does not exist. Please check the URL or go
        back to the <Link href="/">home page.</Link>
      </p>
    </div>
  );
}
