import './App.css';
import img from './assets/image.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='nav'>
          <div className='Left'>
            Logo
          </div>
          <div className='Right'>
            <ul style={{display:'flex'}}>
              <li><button>Home</button></li>
              <li><button>About</button> </li>
              <li><button>Menu</button> </li>
              <li><button>Order</button> </li>
              <li><button>Contact</button> </li>
            </ul>
          </div>
        </div>
      </header >
      <div>
        <img src={img}></img>
        <h1 style={{position:'absolute',left:'50%',color:'white'}}>Home</h1>
        <h3 style={{position:'absolute',left:'45%',top:'90%',color:'white'}}>Made with ❤️ by Juhil</h3>
      </div>
    </div >
  );
}

export default App;
