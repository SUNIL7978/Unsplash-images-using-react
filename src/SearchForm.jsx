import { useGlobalContext } from './Context';

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h2 className="title">UnSplash Images</h2>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="serach-input"
          type="text"
          placeholder="Laptop"
          name="search"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
