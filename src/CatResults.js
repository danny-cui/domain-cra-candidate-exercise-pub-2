const CatResults = ({ facts }) => {
  let facts = facts
    .filter((fact) => fact.deleted != null)
    .map((fact) => {
      fact.contents = fact.contents.replace(/&quot;/g, '"');
      return fact;
    })
    .reduce((acc, curFact) => {
      if (curFact.extended) {
        return acc;
      }

      return acc.concat(curr);
    }, []);

  return (
    facts.length > 0 && (
      <ul>
        {facts.map((fact) => (
          <li>{fact.contents}</li>
        ))}
      </ul>
    )
  );
};

export default CatResults;
