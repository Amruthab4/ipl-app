import React from 'react'

class Footer extends React.Component{
    constructor(){
        super();
        this.name={
            companyName:'BCCI',
            sponsor:'TATA'
        }
    }

    render(){
        return(
            <div>
            <div >Copyright-2022 -{this.name.companyName} | Title Sponsor -{this.name.sponsor}</div>
            </div>
        )
    }
}
export default Footer;