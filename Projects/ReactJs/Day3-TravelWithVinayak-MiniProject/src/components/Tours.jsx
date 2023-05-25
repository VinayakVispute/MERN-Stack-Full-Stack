import Cards from './Cards'


function Tours({tours, removeTour}){
console.log(tours);
return (
    <div className="tours">
      {tours.map((singleData) => {
        console.log(singleData.id);
        return <Cards key={singleData.id} data={singleData} removeTour={removeTour} />;
      })}
    </div>
  );
  
}


export default  Tours;