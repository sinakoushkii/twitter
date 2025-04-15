import Image from "./Image";

const Search = () => {
  return (
    <div className="bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full">
      <Image path="icons/explore.svg" alt="search" w={16} h={16} tr={false} />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none placeholder:text-textGray focus:outline-none focus:border-blue-500 w-full mt-2"
      />
    </div>
  );
};

export default Search;
