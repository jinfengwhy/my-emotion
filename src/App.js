import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2>情绪曲线</h2>
      <Outlet />
    </div>
  );
}

export default App;
