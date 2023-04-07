import React from 'react';
import { CompanyInfo } from './view/CompanyInfo';

function App() {
  const data = [
    {id: "11111", name: "hello", value: "hello-test", "status": "ok"},
    {id: "22222", name: "world", value: "hello-world", "status": "bad"},
  ]
  return (
    <div className="App">
      <CompanyInfo companyName="Hello" data={data} />
    </div>
  );
}

export default App;
