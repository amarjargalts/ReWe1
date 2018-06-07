import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
class Home extends Component{
    render(){
        return (
           <div>
               <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
           </div>
        )
    }
}
export default Home