 import PropTypes from 'prop-types'
 import Button from './Button'

 import {useLocation} from 'react-router-dom'
 
 
 
 const Header = (props) => {
//const onBtnClick=()=>{console.log('Click')};
const location=useLocation()

    return (
        <header className="header">
        <h1>
            {props.title}
        </h1>

        {/* <h1 style={{color:'red',backgroundColor:'black'}}>{props.title}</h1> */}
        {/* <h1 style={headingStyle}>{props.title}</h1>  */}
        
        {/* <button className='btn'>Add</button> */}
        {
        location.pathname==='/' && (<Button color={(props.showAdd) ? 'red':'green'}  text={(props.showAdd) ?"Close":"Add"} onBtnClick={props.onShowAdd}/>)
        }
        </header>
    )
}

Header.defaultProps={
    title:'Task Tracker'
}

Header.propTypes={
    title: PropTypes.string.isRequired,
}


//CSS in JS
// const headingStyle={
//     color:'red',
//     backgroundColor:'black'
// }

export default Header;