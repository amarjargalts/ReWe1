import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            curLink: ''
        }
    }
    componentWillMount(){
        var aaa = '';
        switch(this.props.location.pathname){
            case '/rusers': 
                aaa = 'Хэрэглэгчид'
                break;
            case '/rroles': 
                aaa = 'Эрхүүд' 
                break;
            default: break    
        }
        this.setState({
            curLink: aaa
        })
    }
    render(){
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top menu-border container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerMenu" aria-controls="headerMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse cont-main" id="headerMenu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/a"><i className="fas fa-home"></i> Эхлэл | </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/rusers"><i className="fas fa-users"></i> Хэрэглэгчид | </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/rroles"><i className="fas fa-paper-plane"></i> Эрхүүд | </NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fas fa-lock"></i> Locker | </NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="https://example.com" id="dropdownBal" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-balance-scale"></i> Баланс | </NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownBal">
                            <NavLink className="dropdown-item" to="#">Action</NavLink>
                            <NavLink className="dropdown-item" to="#">Another action</NavLink>
                            <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                        </div>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="#"><i className="fas fa-user-shield"></i> Албан тушаал | </NavLink>
                        </li>
                    </ul>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <NavLink to="/" className="nav-link dropdown-toggle" id="dropdownLgn" data-toggle="dropdown" ria-haspopup="true" aria-expanded="false">
                                    User
                                </NavLink>
                                <div className="dropdown-menu" aria-labelledby="dropdownLgn">
                                    <NavLink to="/" className="dropdown-item">Хувийн мэдээлэл</NavLink>
                                    <NavLink to="/" className="dropdown-item">Админ</NavLink>
                                    <NavLink to="/" className="dropdown-item">Гарах</NavLink>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
               <nav aria-label="breadcrumb" className="easylink container">
                <h5></h5>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink to="#">Эхлэл</NavLink></li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {this.props.location.pathname == '/rusers'?'Хэрэглэгчид':'Эрхүүд'}
                        </li>
                    </ol>
                </nav>
           </div>
        )
    }
}
export default Home