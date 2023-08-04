import React, { Component } from 'react'

class Timer extends Component {
    constructor(){
        super()
        this.state={
            time :10,
            count : 0
        }
    }
    componentDidMount(){
      document.title = 'HIT ME YAAR';
        this.interval = setInterval(this.tick,1000);
    }
    tick = ()=>{
      if(this.state.time!=0){
        this.setState({
          time: this.state.time - 1
        })
      }
    }

    click = ()=>{if(this.state.time>0){
      this.setState({count : this.state.count+1})}

    }
  render() {
    return (
      <div><h1>Hit Thanos with mouse as many times as you can in this {this.state.time} Seconds </h1>
       <img className='thanos' src='https://i2.wp.com/www.artofvfx.com/wp-content/uploads/2018/05/Avengers3_WetaDigital_ITW_01A.jpg?fit=1400%2C737&ssl=1'  onClick={()=> {if(this.state.time>0){
            this.setState({count : this.state.count+1})}}} height={200}></img><br/>
       <center><h2>Score : {this.state.count} </h2></center>
       {this.state.time===0 &&
       <center> <h3>Yahh!!! Thanos was beaten {this.state.count} times by IRON MAN on Titan Planet..!!
        <br /><p>Click on RESTART to beat again..!!</p>
        </h3></center>
        
}

  <button onClick={()=>{
       this.setState({
         time:10,
         count:0
      })}}>Restart</button>

      
      </div>
    )
  }
}

export default Timer