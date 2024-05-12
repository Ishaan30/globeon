import React from 'react';
import {faTwitter,faYoutube,faLinkedin,faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
return(
    <div className="font-monts bg-dark-purple">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid row-gap-10 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="">
            <div className='flex flex-col lg:block justify-center items-center'>
            <p className="lg:mt-10 tracking-wide text-white font-bold text-xl">
               globOn
              </p>
              <div className="flex items-center pt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
            <span className="mr-2">
              <FontAwesomeIcon className="text-2xl" icon={faYoutube} />
             </span>
            </a>
            <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
            <span className="mr-2">
              <FontAwesomeIcon className="text-2xl" icon={faTwitter} />
             </span>
            </a>
            <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
            <span className="mr-2">
              <FontAwesomeIcon className="text-2xl" icon={faLinkedin} />
             </span>
            </a>
            <a href="/" className="text-white transition-colors duration-300 hover:text-teal-accent-400">
            <span className="mr-2">
              <FontAwesomeIcon className="text-2xl" icon={faFacebook} />
             </span>
            </a>
          </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 lg:mt-10 lg:border-r border-white">
            <div className='flex justify-center items-center'>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Learn how globOn works
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Legal information
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:col-span-2 lg:col-span-1 lg:ml-10 flex flex-col justify-center items-center mt-10">
            <span className="text-base font-medium tracking-wide text-white">
              Subscribe to our newsletter!
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email address"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-purple-600 hover:bg-deep-purple-800 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center pt-5 pb-10">
          <div className='text-white'>
           <h1 className='text-4xl text-center font-bold'>globOn</h1>
           <p className="mt-2 text-sm"> © Copyright 2022 globOn | All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
)
}

export default Footer;