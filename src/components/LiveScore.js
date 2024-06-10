import React from "react";
class LiveScore extends React.Component{
  constructor(){
    super()
    this.state = {
        totalScore: 0,
        wicket:0,
        over:0,
    }
    this.updateScore = this.updateScore.bind(this)

    this.out = this.out.bind(this)
    this.over = this.over.bind(this)
}

updateScore(score){
  this.setState({
    totalScore:this.state.totalScore+score,
  })
}

out(){
  this.setState({
    wicket:this.state.wicket+1,
  })
}
over(){
  this.setState({
    over:this.state.over+1,
  })
}
  render(){
    return(
      <>
      <div>
     <h1>current score:{this.state.totalScore}/{this.state.wicket} in {this.state.over}</h1> <br></br>
     <h2>run rate:{this.state.totalScore/this.state.over}</h2>
     <button className="score" onClick={()=> this.updateScore(6)}>6</button>
      
     <button className="score" onClick={()=> this.updateScore(4)}>4</button>
     <button className="score" onClick={()=> this.updateScore(2)}>2</button>
      
     <button className="score" onClick={()=> this.updateScore(1)}>1</button>
      <button onClick={this.out}>out</button>
      <button onClick={this.over}>over</button>
      </div>
     
      </>
    )
  }
}
export default LiveScore