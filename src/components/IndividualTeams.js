
import React from 'react'
import './style.css'

class IndividualTeam extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div className='teams-item'>
            {
                this.props.type==="batsman"?
                (<div className='batsman'>{this.props.player}</div>):
                (<div className='rest'>{this.props.player}</div>)

            }
            
            <div>{this.props.type}</div>
            </div>
            </>
        )
    }

}
export default IndividualTeam;