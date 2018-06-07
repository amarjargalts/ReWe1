import React, {Component} from 'react'
import axios from 'axios'
class Users extends Component{ 
    constructor(){
        super();
        this.state = {
            users: []
        }
            
    }   
    componentWillMount() {
        axios({
              method: 'get',
              url: 'http://localhost:8000/api/users'
            })
            .then(response => {
                //Fetched product is stored in the state
                this.setState({ users: response.data.users })
                console.log(this.state.users)
            })
            .catch(err => {
                console.log(err)
            });
      }

    clickSort(){
        alert("Sorted")
    }  

    render(){
        return (
            <div className="">
                <div className="form-group"> 
                    <h3>Нийт хэрэглэгчид</h3>
                </div>
                <table className="table table-borderless table-hover">
                <thead className="table-success">
                    <th>#</th><th>Овог <a href=""><i className="fas fa-sort"></i></a></th>
                    <th>Нэр <a href=""><i className="fas fa-sort"></i></a></th>
                    <th>Нэвтрэх нэр <a href=""><i className="fas fa-sort"></i></a></th><th>Үйлдэл</th>
                </thead>
                <tbody>
                {this.state.users.map((user, id) =>{
                    return (
                        <tr key={id}>
                            <td>{id+1}</td><td>{user.fname}</td><td>{user.lname}</td><td>{user.uname}</td>
                            <td className="">
                                <div className="btn-group btn-group-sm" role="group">
                                    <button className="btn btn-sm btn-outline-default"><i className="fas fa-pen-square"></i></button>
                                    <button className="btn btn-sm btn-outline-success"><i className="fas fa-eye"></i></button>
                                    <button className="btn btn-sm btn-outline-danger"><i className="fas fa-trash-alt"></i></button>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
                </table>
            </div>
        )
    }
}
export default Users