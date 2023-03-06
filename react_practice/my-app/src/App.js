import {UseEffectExample, UseEffectExample1, Example} from "./components";
import {Route, Routes} from 'react-router-dom'
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path = '/' element={<Layout/>}>
        <Route index element = {<UseEffectExample/>}/>
        <Route path="/1" element = {<UseEffectExample1/>}/>
        <Route path="/2" element = {<Example/>}/>
      </Route>
    </Routes>
  );
}

export default App;
