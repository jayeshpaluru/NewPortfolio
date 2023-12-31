import { GithubIcon, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="min-h-[100px] bg-beige mt-10 w-full px-5 md:px-20 flex items-center justify-between rounded-t-2xl rounded-r-2xl">
      <div className="flex justify-between gap-4 ">
        <div className="bg-primary text-white p-2 rounded-full sca">
          <Link href={'https://twitter.com/jayeshpaluru'} target="_blank">
            <Twitter />
          </Link>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <Link href={'https://github.com/jayeshpaluru'} target="_blank">
            <GithubIcon />
          </Link>
        </div>
        <div className="bg-primary text-white p-2 rounded-full">
          <Link href={'https://instagram.com/jayeshpaluru'} target="_blank">
            <Instagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};