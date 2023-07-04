/* eslint-disable react/prop-types */

const Filter = (props) => {
  let category = props.category;
  let setCategory = props.setCategory;
  let filterData = props.filterData;

  function handleClick(data) {
    if (category !== data.title) {
      setCategory(data.title);
    }
  }

  const filterButtons = filterData.map((data) => (
    <button key={data.id}
      className={`text-lg px-2 py-1 rounded-md font-medium text-white ${category === data.title ? 'border-2 bg-zinc-600 ' : 'bg-black '
        }  hover:bg-opacity-50 transition-all duration-300`}
      onClick={() => handleClick(data)}>{data.title}</button>
  ));



  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gay-y-4 mx-auto py-4 justify-center">
      {filterButtons}
    </div>
  )
}

export default Filter
