import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import NavLink from '../Nav-Link';
import Button from '../Button';
import Logo from '../Logo';


//scroll function
function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }
  }, [scrollDirection]);

  return scrollDirection;
};

const solutions = [
  {
    name: 'About',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Experience',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Work',
    description: "Your customers' data will be safe and secure.", 
    href: '#', 
    icon: ShieldCheckIcon 
  },
  {
    name: 'Contact',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Resume',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]

export default function Navbar() {

  const scrollDirection = useScrollDirection();

  return (
    <header className={`sticky ${ scrollDirection === "down" ? "-top-full" : "top-0"} top-0 z-50 h-24 transition-all duration-1000`}>
    <Popover id="nav-bar" className="relative bg-purple-heart opacity-95">
      <div className="flex items-center justify-between p-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">James Dobbe Portfolio</span>
            <Logo />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-heart p-2 text-viking hover:bg-indigo-500 outline:none">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-end">
         <Popover.Group as="nav" className="flex space-x-10">
                <>
                <NavLink href="#" label="About" />
                </>
            <NavLink href="#" label="Experience" />
            <NavLink href="#" label="Work" />
            <Popover className="relative">
              {({ open }) => (
                <>
                  <NavLink href="#" label="Contact" />
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="flex items-center md:ml-12">
            <Button label="Resume" className="text-base" />
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden bg-purple-heart">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-purple-heart shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-purple-heart p-2 text-viking hover:bg-indigo-500 outline:none ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group -m-3 flex items-center rounded-lg p-3"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md  text-viking">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-viking transition duration-300">{item.name}
                      <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-viking"></span></div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
    </header>
  )
}
