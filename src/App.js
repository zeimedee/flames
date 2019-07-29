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
             SetResult('FRIENDS');
             break;

             case 1:
              SetResult('LOVERS');
             break;

             case 2:
              SetResult('ACQUAINTANCE');
             break;

             case 3:
              SetResult('MARRIED');
             break;

             case 4:
              SetResult('ENEMIES');
             break;

             case 5:
              SetResult('SIBLINGS');
             break;

             default: 
             SetResult('NO MATCH!');
           }
          
      }else{
        console.log('empty fields');
        
      }        

  }



  const butState = () => {
    if( him === '' || her === ''){
        return true;
    }else{ console.log('post');
    }
}


  return (
    <div>
    <Navi/>
      <div style={{paddingTop: '100px' }}>
              <div className='container mx-auto px-48'>
                <form onSubmit={handleSubmit}>
                  <input
                  className='bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                    type='text'
                    placeholder='HIM'
                    value={him}
                    onChange={e => SetHim(e.target.value)}
                  />
                  <input
                  className='bg-white focus:outline-0 focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                    type='text'
                    placeholder='HER'
                    value={her}
                    onChange={e => SetHer(e.target.value)}
                  />


                  <button
                  type='submit'
                  className='bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full'
                  disabled={butState()}
                  >show me
                  </button>

                </form>
          </div>
        </div>


          <h1 className='text-center'>{result}</h1>
    </div>
  );
}

export default App;
