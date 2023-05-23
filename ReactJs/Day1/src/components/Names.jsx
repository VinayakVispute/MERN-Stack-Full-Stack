function Names({ FirstName, LastName }) {
    console.clear();
    console.log(FirstName);
    console.log(LastName);
  const name = FirstName + LastName;
  return (
    <>
      <div>
        <h1 className="text-center text-xl py-4">{name}</h1>
      </div>
    </>
  );
}



export default Names;