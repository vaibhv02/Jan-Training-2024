function DynamicComp() {
  let name = "Vaibhav";
  const obj = {
    name: "Sharma",
    age: 24,
  };
  return (
    <h1>
      My name is {name} {obj.name} and i am {obj.age} years old.
    </h1>
  );
}

export default DynamicComp;
