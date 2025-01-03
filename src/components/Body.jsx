const Body = () => {
  
  const unit_1_files = [
    {id: 1, name: "1.1", path: "cs/1.1 System Architecture.pdf"},
    {id: 2, name: "1.2", path: "cs/1.2 Memory and storage.pdf"},
    {id: 3, name: "1.3", path: "cs/1.3 Networking.pdf"},
    {id: 4, name: "1.4", path: "cs/1.4 Networking Security (2).pdf"},
    {id: 5, name: "1.5", path: "cs/1.5 Systems software (2).pdf"},
  ]

  const unit_2_files = [
    {id: 1, name: "2.1", path: "cs/2.1 Algorithms.pdf"},
    {id: 2, name: "2.2", path: "cs/2.2 Programming.pdf"},
    {id: 3, name: "2.3", path: "cs/2.3 Defensive designs.pdf"},
    {id: 4, name: "2.4", path: "cs/2.4 Logic gates (1).pdf"},
    {id: 5, name: "2.5", path: "cs/2.5 Programming languages (1).pdf"},
  ]
  
  return (
    <div>
      <h2>Computer Science</h2>
      <h3>Unit 1</h3>
      {unit_1_files.map(({id, name, path}) => (
        <ul key={id}>
          <li>
            <a href={import.meta.env.BASE_URL + path} target="_blank" rel="noopener noreferencer">{name}</a>
          </li>
        </ul>
      ))}
      <h3>Unit 2</h3>
      {unit_2_files.map(({id, name, path}) => (
        <ul key={id}>
          <li>
            <a href={import.meta.env.BASE_URL + path} target="_blank" rel="noopener noreferencer">{name}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Body;