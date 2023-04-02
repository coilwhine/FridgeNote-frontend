import './App.scss';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import ProfileModal from './Components/ProfileModal/ProfileModal';

function App() {

  return (
    <div className="App">
      <Header />
      <Content />

      <div className='Modals'>

        <ProfileModal />

      </div>
    </div>
  )
}

export default App
