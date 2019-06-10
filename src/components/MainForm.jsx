import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import Progressbar from './progressbar'

class MainForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        city: '',
        country: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }
   

    render() {
     

        const { step } = this.state;
        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };
        switch (step) {
            case 1:
                return (
                    <div>
                        <Progressbar
                        step={this.state.step}
                        />
                        
                        <UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        /></div>)
            case 2:
                return (
                    <div>
                         <Progressbar
                        step={this.state.step}
                        />
                        <PersonalDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                        /></div>)
            case 3:
                return (
                    <div>
                        <Progressbar
                        step={this.state.step}
                        />
                       <Confirmation
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                        /></div>)
            case 4:
                return <Success />
        }
    }
}

export default MainForm;