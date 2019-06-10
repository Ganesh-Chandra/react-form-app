import React, { Component } from 'react';
class Progressbar extends Component{
    isTwoactive = ()=> {
        
        if(this.props.step >= 2){

            return "active"
            
        }
        else{
           
            return "not"
        }

    }
    isThreeactive = () =>{
        if(this.props.step === 3){
            return "active"
        }
        else{
            return "not"
        }
    }
    render(){
        return(
            <div class="pgbar">
                            <ui>
                                <li className="active">
                                    UserDetails
                                </li>

                                <li className={this.isTwoactive()}>
                                    PersonalDetails
                                </li>

                                <li className={this.isThreeactive()}>
                                   Confirmation
                                </li>

                            </ui>
                        </div>
        )
    }
}

export default Progressbar;