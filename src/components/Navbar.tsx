'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [hidden, setHidden] = useState(false);
  const [userNavigated, setUserNavigated] = useState(false); // new state variable

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (!userNavigated) { // check if userNavigated is false
      if (latest > previous && latest > 150) {
        setHidden(true);
        setShowNav(false);
      } else {
        setHidden(false);
      }
    }
  });

  // reset userNavigated to false after a delay
  useEffect(() => {
    if (userNavigated) {
      setTimeout(() => {
        setUserNavigated(false);
      }, 1000);
    }
  }, [userNavigated]);

  return (
    <motion.nav
      className={`fixed inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-primary font-medium text-slate-50 flex  max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-full font-mono h-14 p-5 overflow-hidden `}
      variants={{
        long: { maxWidth: 950 },
        short: { maxWidth: 280 },
        hideNav: {
          height: 56,
          borderRadius: 50,

          alignItems: 'center',
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 200,
          borderRadius: 22,
          alignItems: 'start',
          transition: { delay: 0 },
        },
      }}
      initial={'short'}
      animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
      transition={{
        duration: 0.6,
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }}
    >
      <div className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
        <Image src={'/favicon.svg'} alt="logo" width={44} height={44} />
      </div>
      <motion.ul
        className={`w-full ${
          showNav
            ? '[--display-from:none] [--display-to:flex]'
            : 'max-sm:[--display-from:none] sm:[--display-to:flex]'
        }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10`}
        variants={{
          hidden: {
            display: 'var(--display-from, none)',
            opacity: 'var(--opacity-from, 1)',
            transition: { duration: 0.6, delay: 0 },
          },
          visible: {
            display: 'var(--display-to, none)',
            opacity: 'var(--opacity-to, 1)',
            transition: { duration: 0.6, delay: 0 },
          },
        }}
        initial={'hidden'}
        animate={[
          hidden && !showNav ? 'hidden' : 'visible',
          showNav ? 'visible' : '',
        ]}
      >
        <li>
          <Link href={'#about'} onClick={() => setUserNavigated(true)}>{'//About'}</Link>
        </li>
        <li>
          <Link href={'#skills'} onClick={() => setUserNavigated(true)}>{'//Skills'}</Link>
        </li>
        <li>
          <Link href={'#projects'} onClick={() => setUserNavigated(true)}>{'//Projects'}</Link>
        </li>
      </motion.ul>

      <motion.div
        className="w-full [--display-from:none][--display-to:inline-block] "
        variants={{
          hidden: {
            display: 'var(--display-from, none)',
            transition: { delay: 0, duration: 0.3 },
          },
          visible: {
            display: 'var(--display-to)',
            transition: { delay: 0.2, duration: 0.3 },
          },
        }}
        initial="hidden"
        animate={hidden ? 'visible' : 'hidden'}
      >
        <a href="mailto:jayeshpaluru@gmail.com">
          <Button variant={'accent'} className="w-full">
            Contact
          </Button>
        </a>
      </motion.div>

      <Button
        size={'icon'}
        variant={'ghost'}
        className="rounded-full min-w-[40px] sm:hidden"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
      >
        {showNav ? <ChevronUp /> : <ChevronDown />}
      </Button>
    </motion.nav>
  );
}
