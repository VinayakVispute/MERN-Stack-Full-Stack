function NameDate(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    console.log(props)
    return (
      <>
        <div>
          <h1 className="text-center text-sm py-4">{day}/{month}/{year} </h1>
          {props.children}
        </div>
      </>
    );
  }
  
  
  
  export default NameDate;