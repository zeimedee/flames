import React, { useState } from 'react';
import './App.css';
import Navi from './nav';

function App() {

  const [him, SetHim] = useState('');
  const [her, SetHer] = useState('');
  const [result,SetResult] = useState('');

  
  

  const handleSubmit = (e) => {
    e.preventDefault();

      if(him !== '' && her !=='' ){
         
        var a1 = him.split('');
        var a2 = her.split('');
      //  console.log(a1 +' ' + a2);
        
        var a1v = a1.filter(val => !a2.includes(val));
        var a2v = a2.filter(val => !a1.includes(val));
           var res = a1v.concat(a2v);
           var len = res.length;
         //  console.log('new string: ' + res);
           
         //  console.log(len);
            
           switch(len%6){
             case 0:
             SetResult('NO MATCH!');//;
             break;

             case 1:
              SetResult('FRIENDS');
             break;

             case 2:
              SetResult('LOVERS');
             break;

             case 3:
              SetResult('ACQUAINTANCE');
             break;

             case 4:
              SetResult('MARRIED');
             break;

             case 5:
              SetResult('ENEMIES');
             break;
            
             case 6:
               SetResult('SIBLINGS')
             break;

             default: 
             SetResult('error');
           }
           console.log(result);
           
          
      }else{
        console.log('empty fields');
        
      }        

  }



  const butState = () => {
    if( him === '' || her === ''){
        return true;
    }else{ 
    }
}


  return (
    <div>
    <Navi/>
      <div style={{paddingTop: '100px'}}>
            
          <div className="w-full max-w-xs" id='free'>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4"> 
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  
                  type='text' 
                  placeholder="His name"
                  value={him}
                  onChange={e => SetHim(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
                  type='text'
                  placeholder="Her name"
                  value={her} 
                  onChange={e => SetHer(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit"
                  disabled={butState()}>
                    Show me
                  </button>
                </div>  
            </form>
          </div>

        </div>
        <h1 className='text-center'>{result}</h1>
    </div>
  );
}

export default App;
