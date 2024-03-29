/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Header.sass";
import { useNavigate } from "react-router-dom";
const userMock = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/dashboard", current: true },
  { name: "Team", href: "/team", current: false },
  { name: "Drive With Us", href: "#", current: false },
  { name: "Contact", href: "/contact", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "/profile" },

  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const Header = ({ user }) => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem("userInfo");
        navigate('/login')
    }
  return (
    <>
      {
        <div className="min-h-full">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Link to="/dashboard">
                          <img
                            className="h-50 w-50"
                            src={Logo}
                            alt="Workflow"
                          />
                        </Link>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          <motion.a
                            whileTap={{ scale: 0.6 }}
                            href="/dashboard"
                            className="text-textColorWhite"
                          >
                            Home
                          </motion.a>
                          <motion.a
                            whileTap={{ scale: 0.6 }}
                            className="text-textColorWhite"
                            href="/team"
                          >
                            Our Team
                          </motion.a>
                          {user?.role === "Owner" ? (
                            <motion.a
                              className="text-textColorWhite"
                              whileTap={{ scale: 0.6 }}
                              href="/add-car"
                            >
                              Drive with Us
                            </motion.a>
                          ) : null}

                          <motion.a
                            className="text-textColorWhite"
                            whileTap={{ scale: 0.6 }}
                            href="/contact"
                          >
                            Contact
                          </motion.a>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* <motion.button
                          whileTap={{ scale: 0.6 }}
                          type="button"
                          className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </motion.button> */}

                        {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <motion.img
                                whileTap={{ scale: 0.6 }}
                                className="h-8 w-8 rounded-full"
                                src={userMock?.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                            {user ? <Menu.Item className='block px-4 py-2 text-sm text-gray-700'>
                                <a href="/profile">Profile</a> 
                              </Menu.Item> : null }
                              <Menu.Item className='block px-4 py-2 text-sm text-gray-700'>
                                {user ? <a  onClick={logOut}>Logout</a> : <a href="/login">Login</a> }
                              </Menu.Item>
                           
                              
                            </Menu.Items>
                          </Transition>
                        </Menu>
                       
                      </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <motion.img
                          whileTap={{ scale: 0.6 }}
                          className="h-10 w-10 rounded-full"
                          src={userMock?.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {userMock.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {userMock.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 px-2 space-y-1">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      }
    </>
  );
};
export default Header;
