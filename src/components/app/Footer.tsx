import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full h-auto border-t-1 border-slate-300 mt-20 shadow-sm p-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="font-montserrat">
          © 2025 PrettyAIColors. All rights reserved.
        </span>
        <ul className="flex items-center space-x-8 mt-4 w-fit mx-auto text-blue-500 tracking-wide">
          <li>
            <Link
              href="https://github.com/radriann21/prettyai-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              href="/use"
            >
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
