import Link from 'next/link'
<link href=
"https://unpkg.com/tailwindcss@1.8.12/dist/tailwind.min.css"
        rel="stylesheet" />
const Footer = () =>{

	return(
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
    </footer>
	)
}
export default Footer;