import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import DesktopUtsavaCalendar from './components/Calendar/UtsavaCalendarDesktop';
import MobileUtsavaCalendarMobile from './components/Calendar/UtsavaCalendarMobile';
function App() {
  return (
    <div className="App">
     <h1>Utsava Calendar</h1>
    <BrowserView>
      <DesktopUtsavaCalendar title="Pilava Varusham"/>
    </BrowserView>
    <MobileView>
      <MobileUtsavaCalendarMobile title="Pilava Varusham"/>
    </MobileView>
    </div>
  );
}

export default App;
