import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">AboutPage</h1>
      <Link href="/" className="text-2xl">
        Home Page
      </Link>
      <Link href="/about/info" className="text-2xl">
        AboutInfoPage
      </Link>
    </div>
  );
};
export default AboutPage;
