  import { useEffect } from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { useDispatch } from 'react-redux';
import { getContacts } from './redux/features/contactSlice';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    async function fetchdata(){
      try{
          const res= await axios.get("http://localhost:5000/api/get-contacts");            
          console.log(res);
          dispatch(getContacts(res.data));
          console.log(dispatch(getContacts(res.data)));
      }catch(error){
          console.log(error);
      }
  }
      fetchdata();
},[])
 
  return (
    <div >

      <Navigation/>
      
    </div>
  );
}

export default App;
