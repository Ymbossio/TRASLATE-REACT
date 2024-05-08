
import './App.css'
import Result from './Result.jsx'

const synth = window.speechSynthesis;

function App() {
  console.log(synth)
  return (
    <>
      <div className='container'>
          <h1>English Dictionary</h1>
        <form>
          <div className='row'>
            <textarea name='' id='' cols={30} rows={4} placeholder='Enter Text'/>
          
            <div className="voices-icons">
              <div className="select-icons">
                <select name='' id=''>
                  <option>English</option>
                  <option>English</option>
                  <option>English</option>
                </select>
              </div>
              <i class="fa-solid fa-volume-high" />
            </div>
          </div>

        </form>

        <Result />
      </div>
    </>
  )
}

export default App
