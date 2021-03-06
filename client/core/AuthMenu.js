import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {Link, withRouter} from 'react-router-dom'
import auth from './../auth/auth-helper'
import IconButton from '@material-ui/core/IconButton';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({});
const isActive = (history, path) => {
    if (history.location.pathname == path)
      return {color: '#5bb4dc'}
    else
      return {color: '#ffffff'}
  }
  
class AuthMenu extends React.Component{
    state = {
        class: 'topnav',
    };
    handleMenuClick = () => {
        this.setState({ class: this.state.class == 'topnav' ? 'topnav responsive' : 'topnav'});
    };

    update = (props) =>{
        auth.signout(() => this.props.history.push('/'));
        this.props.updateMenu();
        
    }
    

    render(){
        const css = require('./Menu.css');
        const { history, classes ,theme } = this.props;
        return(
            <div className={this.state.class} id="myTopnav" style={{backgroundColor:theme.palette.primary.main, }}>
                <Link to={{pathname: "/user/" + this.props.authenticated.user._id, updateMenu: this.props.updateMenu}}
                    style={isActive(history, "/user/" + this.props.authenticated.user._id)} 
                    className="active"
                    onClick={this.handleMenuClick}> My Profile </Link>

                <Link to="/workout" style={isActive(history, "/workout")}
                    onClick={this.handleMenuClick}> Workouts </Link>

                <a onClick={this.update}> Sign out </a>
                
                <a  className="icon" onClick={this.handleMenuClick}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
      )
    }

}
export default withStyles(styles, { withTheme: true })(withRouter(AuthMenu));