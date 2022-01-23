export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map((curElem) => {
        return {
            params: {
                faqs: curElem.id.toString(),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps = async (context) => {
    const id = context.params.faqs;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
};

const myData = ({ data }) => {
    return (
        <>
            <div key={data.id} className="ssr-styles ssr-styles-inside">
                <h3>{data.id}</h3>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
            </div>
        </>
    );
};

export default myData;
