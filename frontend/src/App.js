
import VideoList from './VideoList';
import { data, shows} from './database';
import { Routes,Route } from 'react-router-dom';
import SlideShow from './SlideShow';
import Topbar from './Topbar';
import SerchBar from './SerchBar';
import React from 'react';
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";


const App = function() 
{    
        return (
          <div className="App">     
          
          <Routes>
            <Route path='/' element = {<Home />} />
            <Route path='/movies' element = {<Movies />} />
            <Route path='/shows' element = {<Shows  />} />
            <Route path="add" element={<AddUser />} />
            <Route path="/database/edit/:id" element={<EditUser />} />
            <Route path="/database" element={<UserList />} />
            {/* <Route path='/login' element = {<Login  />} /> */}
          </Routes>
        </div>
        );    
}

export default App;

const Home = function() 
{  

  return (
      <div>
      <Topbar />
      <SlideShow   />
        </div>
  );
  
}

class Movies extends React.Component
{
  constructor ()
  {
    super()
      this.state = 
      {
        activelist : [],
        searchfield: ''
      }
  }

  componentDidMount()
  {
      this.setState({activelist: data});
  }
  onSearchChange = (event) =>
  {
    this.setState(
      {
        searchfield: event.target.value
      }
    );
    console.log(event.target.value);
  }
    render()
    {

      const fillteredList = this.state.activelist.filter (sh =>
        {      
          console.log("this is from fillter list " + this.state.searchfield.toLowerCase());
          return sh.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

      return (
        <div>
          <Topbar />
          <SerchBar searchChange ={this.onSearchChange} />
          <VideoList list = {fillteredList} /> 
        </div>
      );
    }
}

class Shows extends React.Component
{
  constructor ()
  {
    super()
      this.state = 
      {
        activelist : [],
        searchfield: ''
      }
  }

  componentDidMount()
  {
      this.setState({activelist: shows});
  }
  onSearchChange = (event) =>
  {
    this.setState(
      {
        searchfield: event.target.value
      }
    );
    console.log(event.target.value);
  }
    render()
    {

      const fillteredList = this.state.activelist.filter (sh =>
        {      
          console.log("this is from fillter list " + this.state.searchfield.toLowerCase());
          return sh.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

      return (
        <div>
              <Topbar />
              <SerchBar searchChange ={this.onSearchChange}  />
              <VideoList list = {fillteredList} />  
      </div>
      );
    }
}

// const Login = function()
// {
//     return (
//         <div>
//                 <p>Admin Panel</p>
//                 <input type={'text'} placeholder ='enter id' />
//                 <input type={'password'} placeholder ='enter password' />
//                 <button onClick={''}>Login</button>
//         </div>
//     );
// }


