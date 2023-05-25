import {useState} from "react";

function Cards ({data,removeTour}) {
    const [readMore, setReadMore] = useState(false);


    const locationName = data.name;
    const price = data.price;
    const imageUrl = data.image;
    const locationDescription = readMore?(data.info):(`${data.info.substring(0,200)}....`);




    function readMoreHandler(){
        readMore?setReadMore(false):setReadMore(true);
    }


    return (
        <div className="card">
          <img src={imageUrl} className="card-image" />
          <div className="tour-details">
            <h4 className="tour-price">{price}</h4>
            <h4 className="tour-name">{locationName}</h4>
            <div className="description">
              {locationDescription}
              <span className="read-more" onClick={readMoreHandler}>
                {readMore ? `show less` : `read more`}
              </span>
            </div>
          </div>
          <button className="btn-red" onClick={() => removeTour(data.id)}>
            Not Interested
          </button>
        </div>
      );
      
}

export default Cards;