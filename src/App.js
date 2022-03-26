import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import QuestionAndAnswers from './components/QuestionAndAnswers/QuestionAndAnswers';

function App() {
  return (
    <div className='body'>
      <Header />
      <Shop />
      <QuestionAndAnswers />
    </div>
  );
}

export default App;
