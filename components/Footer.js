import Link from 'next/link'

const Footer = () =>{

	return(
    <footer className="bg-orange-500 ">
      <div className="flex flex-col items-center mt-24">
        <div className="flex flex-col w-[1136px]">
          <div className="flex flex-row justify-between">
            <div className="basis-1/2 mt-12" >
              <img src="/assets/GS_logo_Black.png" />
              <p className="text-primary_orange-0 text-4xl font-extrabold mb-10 mb-24 my-8 mt-24">
                <span className="text-black text-4xl font-extrabold mb-24 my-8 mt-24">
                © Girlscript Foundation.
                  <br />
                  All Right Reserved. &nbsp;
                </span>
              </p>
            </div>
            <div className="basis-1/2 order-last mt-12">
              <div className=" px-4 py-4 rounded mr-3">
                <div className="grid grid-rows-4 grid-flow-col gap-4">
                  <div className="text-black text-3xl font-bold mb-2">
                    ABOUT GSSoC
                  </div>
                  <div className="text-black text-3xl ">
                    Contact Us
                  </div>
                  <div className="text-black text-3xl ">
                    Past Programs
                    
                  </div>
                  <div className="text-black text-3xl">
                    Code of Conduct
                  </div>
                
                  <div className="text-black text-3xl font-bold mb-2">
                    LEGALS
                  </div>
                  <div className="text-black text-3xl ">
                    Terms
                  </div>
                  <div className="text-black text-3xl ">
                    Privacy Policy
                    
                  </div>
                  <div className="text-black text-3xl">
                    Copyright Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </footer>

	)
}
export default Footer;