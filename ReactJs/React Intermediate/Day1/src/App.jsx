import { useState } from 'react'
import './App.css'
import { fromJSON } from 'postcss';

function App() {
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isVisible: false,
      mode: "",
      favCar: "",
    }
  )

  console.log(formData);

  function changeHander(event) {
    const { name, value, checked, type } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type == "checkbox" ? checked : value
      }
    });
  }

  // const [firstName, setFirstName] = useState("");
  // const [secondName, setSecondName] = useState("");
  // function changeFirstNameHandler(event) {
  //   setFirstName(event.target.value)
  // }
  // function changeLastNameHandler(event) {
  //   setSecondName(event.target.value)
  // }


  function submitHandler(event) {
    event.preventDefault();
    console.clear();
    console.log("Printing Data:");
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='First Name'
          name='firstName'
          onChange={changeHander}
          value={formData.firstName} />
        <br /><br />
        <input type='text' placeholder='Last Name'
          name='lastName'
          onChange={changeHander}
          value={formData.lastName} />
        <br /><br />
        <input type='email' placeholder='Email'
          name='email'
          onChange={changeHander}
          value={formData.email} />
        <br /><br />
        <textarea
          placeholder='Enter Your Comments...'
          onChange={changeHander}
          name='comments'
          value={formData.comments} />

        <br /><br />
        <label htmlFor='isVisible'>Am I Visible ?</label>
        <input
          type='checkbox'
          onChange={changeHander}
          name='isVisible'
          id='isVisible'
        // checked={formData.isVisible}
        />
        <br /><br />

        <fieldset>
          <legend>Mode : </legend>

          <input
            type='radio'
            onChange={changeHander}
            name='mode'
            value='Online Mode'
            id='Online-Mode'
            checked={formData.mode === 'Online Mode'}
          />
          <label htmlFor="Online-Mode">Is Online Mode?</label>

          <input
            type='radio'
            onChange={changeHander}
            name='mode'
            value='Offline Mode'
            id='Mode'
            checked={formData.mode === 'Offline Mode'}
          />
          <label htmlFor="Offline-Mode">Is Offline Mode?</label>
        </fieldset>
        <label htmlFor="favCar">Your Fav Car ?</label>
        <select name="favCar" id="favCar"
          value={formData.favCar}
          onChange={changeHander}>
          <option value="Supraa">Toyota Supraa</option>
          <option value="GTR">Nissan GTR</option>
          <option value="Skyline">Nissan GTR Skyline</option>
          <option value="Dodge">Dodge</option>
          <option value="HellCat">HellCat</option>
          <option value="Civic">Honda Civic</option>
        </select>
        <br /><br />
        <button>Submut</button>
      </form>
    </>
  )
}

export default App
