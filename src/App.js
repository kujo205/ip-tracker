
import MyMap from './components/Map/MyMap';
import Header from './components/Header/Header';
import Error from './components/Error/Error'

import { useGlobalContext } from './components/Context';
function App() {
  const{requestState,dispatchRequest}=useGlobalContext();
  
  return (
    <div className="App">
      
        {requestState.error&&<Error requestState={requestState} dispatchRequest={dispatchRequest}/>}
        <Header/>
        {requestState.data&&<MyMap/>}
    </div>
  );
}

export default App;
