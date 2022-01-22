import Link from 'next/link'
<link href=
"https://unpkg.com/tailwindcss@1.8.12/dist/tailwind.min.css"
        rel="stylesheet" />
const Footer = () =>{

	return(
    <footer className="bg-orange-500 ">
      <div className="flex flex-col items-center mt-24">
        <div className="flex flex-col w-[1136px]">
          <div class="flex flex-row justify-between">
            <div class="basis-1/2 mt-12" >
              <img src="/assets/GS_logo_Black.png" />
              <p className="text-primary_orange-0 text-4xl font-extrabold mb-10 mb-24 my-8 mt-24">
                <span className="text-black text-4xl font-extrabold mb-24 my-8 mt-24">
                @2022 Girlscript Foundation.
                  <br />
                  All Right Reserved. &nbsp;
                </span>
              </p>
            </div>
            <div class="basis-1/2 order-last mt-12">
              <div className=" px-4 py-4 rounded mr-3">
                <div class="grid grid-rows-4 grid-flow-col gap-4">
                  <div class="text-black text-3xl font-bold mb-2">
                    About GSSoC
                  </div>
                  <div class="text-black text-3xl ">
                    Contact Us
                  </div>
                  <div class="text-black text-3xl ">
                    Past Programs
                    
                  </div>
                  <div class="text-black text-3xl">
                    Code of Conduct
                  </div>
                
                  <div class="text-black text-3xl font-bold mb-2">
                    LEGALS
                  </div>
                  <div class="text-black text-3xl ">
                    Terms
                  </div>
                  <div class="text-black text-3xl ">
                    Privacy Policy
                    
                  </div>
                  <div class="text-black text-3xl">
                    Copyright Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </footer>
  /* 
		<footer className="bg-orange-500">
      <ul className="flex flex-grow items-center justify-center lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{" "}
          <a
            href="https://taylorbryant.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            GSSoC
          </a>
        </li>

      </ul>
    </footer>*/
	)
}
export default Footer;