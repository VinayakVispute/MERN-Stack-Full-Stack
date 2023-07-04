import './App.css'
import Testimonial from './components/Testimonial'
import reviews from './data';

function App() {


  return (
    <>
      <div>
        <h1>Our Testimonials</h1>
        <div></div>
      </div>
      <Testimonial reviews={reviews} />
    </>
  )
}

export default App
