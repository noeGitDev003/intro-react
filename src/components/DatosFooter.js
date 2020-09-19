import React, {Component} from 'react';

class DatosFooter extends Component{

    render(){
        var celular = "312 209 0846";
        var email = "noemuoz@hotmail.com";
        return (
            <React.Fragment>
                <small className="Text-Cel">Celular: {celular}</small>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <small className="Text-Em">E-mail: {email}</small>
                <br />
                <small className="Text-Copy">&copy; ReactJs</small>
            </React.Fragment>
        );
    }
}

export default DatosFooter;