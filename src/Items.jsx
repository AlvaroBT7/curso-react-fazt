const Items = () => {
  const items = [
    {
      id: 0,
      name: "Paper"
    },
    {
      id: 1,
      name: "Bottle"
    },
    {
      id: 2,
      name: "Shoe"
    }
  ];
  return <p>{JSON.stringify(items)}</p>;
};

export default Items;
