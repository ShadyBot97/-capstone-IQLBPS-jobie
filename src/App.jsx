import Hero from './components/Hero/Hero';
import WyChooseUs from './components/whyChooseUs/WhyChooseUs';
import './App.css';
import LatestJobs from './components/LatestJob/LatestJobs';

const data = [
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
  { position: 'Web Developer', salary: '2000$-3000$', date: '10/10/2022' },
];
const header = ['Position', 'Salary', 'Date', ''];
function App() {
  return (
    <div>
      <Hero />
      <LatestJobs data={data} headers={header} />
      <WyChooseUs />
    </div>
  );
}

export default App;
