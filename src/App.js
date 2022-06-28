import './App.css';
import AnsweredQst from './Components/AnsweredQst/AnsweredQst';
import ExamInfo from './Components/ExamInfo/ExamInfo';
import Navbar from './Components/Navbar';
/* import Sidebar from "./Components/Sidebar"; */
import QstList from './Components/QstList/QstList';
import VideoFeed from './Components/VideoFeed/VideoFeed';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="App__body">
        {/* <Sidebar /> */}
        <div className="App__left" >
          <VideoFeed />
          <AnsweredQst />
        </div>
        <div className="App__right">
          <ExamInfo />
          <QstList />
        </div>
      </div>
    </div>
  );
}

export default App;
