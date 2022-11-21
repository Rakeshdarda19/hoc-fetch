import React from "react";
import './style.css'
class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ""
        }
    }
    textSearch = (e) => {
        this.setSearchItem(e.target.value)
    }
    render(){
        return(
            <>
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Contact</li>
                    <li>About</li>
                    <input
                     placeholder="search here..."
                     value={this.state.search}
                     onChange={(e) => this.textSearch({search: e.target.value})}
                     />
                </ul>
            </>
        )
    }
}
export default Header