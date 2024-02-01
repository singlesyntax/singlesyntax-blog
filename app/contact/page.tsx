import { FiMail, FiTwitter } from "react-icons/fi";
export async function generateMetadata() {
  return {
    title: `Contact us`,
    description:
      "We're more than happy to answer any questions or fix any bugs you&apos;re running into. Feel free to reach out to us directly or use the contact form on this page.",
    alternates: {
      canonical: `/contact`,
      languages: {
        "en-us": `/contact`,
      },
    },
  };
}

const Page = () => {
  return (
    <main className="pages px-5 !my-6 mx-3 md:mx-auto rounded-3xl p-5 md:max-w-lg lg:max-w-4xl">
      <h2 className="text-2xl font-bold tracking-tight my-2 sm:text-3xl">
        Get in touch 👋
      </h2>
      <p className="mt-3">
        We&apos;re more than happy to answer any questions or fix any bugs
        you&apos;re running into. Feel free to reach out to us directly or use
        the contact details on this page.
      </p>
      <div className="mt-8 flex flex-col gap-1">
        <a
          className="flex items-center gap-3 text-[#3d3d3d]"
          href="mailto:singlesyntax@gmail.com"
        >
          <FiMail />
          <span>singlesyntax@gmail.com</span>
        </a>
        <a
          className="flex items-center gap-3 text-[#3d3d3d]"
          href="https://twitter.com/singlesyntax"
          target="_blank"
        >
          <FiTwitter />
          <span>@singlesyntax</span>
        </a>
      </div>

      <div className="mt-8">
        <p className="not-p">Looking forward to hearing from you!</p>
        <p className="not-p">-Singlesyntax Team</p>
      </div>
    </main>
  );
};
export default Page;
