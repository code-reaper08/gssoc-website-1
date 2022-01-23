import Link from "next/link";

export const getStaticProps = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    
    return{
        props:{
            data,
        },
    };
};

const Faq = ({data}) => {
    
    return(
      <>
        <h1 className="text-primary_orange-0 text-4xl font-extrabold mb-10 ml-80">Freequently asked questions(FAQs)</h1>
        {data.slice(0,6).map((curElem) => {
            return <div key={curElem.id} className="ssr-styles">
                <h3>{curElem.id}</h3>
                <Link href={`${curElem.id}`}>
                  <h2>{curElem.title}</h2>
                </Link>
            </div>
        })}
      </> 
    );
};

export default Faq;