const Body = () => {
  
  const files = [
    {id: 1, name: "1.1", path: "1.1 System Architecture.pdf"}
  ]
  
  return (
    <div>
      <h2>Computer Science</h2>
      
      {files.map(({id, name, path}) => (
        <ul key={id}>
          {console.log(import.meta.env.BASE_URL + path)}
          <li>
            <a href={import.meta.env.BASE_URL + path} target="_blank" rel="noopener noreferencer">{name}</a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Body;