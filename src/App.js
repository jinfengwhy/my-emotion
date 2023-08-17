import { Outlet } from 'react-router-dom'

import { IS_MOBILE } from '@/common/const'
import { isMobileDevice } from '@/utils'

import './App.less';

function App() {
  window[IS_MOBILE] = isMobileDevice()

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
