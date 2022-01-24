import Link from "next/link";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="footer bg-orange-500 relative pt-1 border-b-2"
    >
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between mb-8">
            <div className="flex flex-col">
              <Link href="/">
                <img
                  className="cursor-pointer"
                  src="/assets/GS_logo_Black.png"
                />
              </Link>
              <span className="my-2">
                <p
                  href="#"
                  className="text-gray-800 font-bold text-2xl 2.25rem 3rem"
                >
                  © 2022 GirlScript Foundation.
                  <br />
                  All rights reserved.
                </p>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                About GSSoC
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Contact Us
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Past Programs
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Code of Conduct
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Legal
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Terms
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Privacy Policy
                </a>
              </span>
              <span className="my-2">
                <a href="#" className="font-normal text-gray-700">
                  Copyright Policy
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
