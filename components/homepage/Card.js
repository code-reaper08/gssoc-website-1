function Cards(props) {
  return (
    <div className="bg-gray-800 w-[400px] px-4 py-4 rounded m-3">
      <p className="text-white font-medium font-serif text-3xl ">
        {props.title}
      </p>
      <p className="text-white font-normal text-justify font-serif ">
        {props.content}
      </p>
      <button className="bg-orange-500 font-bold font-serif w-full px-5 py-2 rounded text-gray-800">
        {props.buttontext}
      </button>
    </div>
  );
}

export default Cards;
