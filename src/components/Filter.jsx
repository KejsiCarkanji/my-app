function Filter({ selectedCategory, setSelectedCategory }) {
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="filter">
      <label for="category">Filter by category:</label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        <option value="all">All</option>
        <option value="web-development">Web Development</option>
        <option value="database">Database</option>
        <option value="deep-learning">Deep Learning</option>
      </select>
    </div>
  );
}

export default Filter;
