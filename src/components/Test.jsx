import React, {Component} from 'react';
import Result from './Result';

export default class Home extends Component {
    constructor(){
        super()
        this.state ={
            tinetti:{},
            shownResults:false
        }

       this.handleInputChange=this.handleInputChange.bind(this);
       this.submit=this.submit.bind(this);
    }

    reset (){
        window.location.href ='/#test'
    }

    handleInputChange(event) {
        const target = event.target;
        console.log(target)
        let value = target.value;
        console.log(value)
        let name = target.name;
        console.log(name)
        
        // if(target.checked){
            this.state.tinetti[name] = parseInt(value);  
            // console.log("if") 
        // }else{
        //     this.state.tinetti.splice(value, 1);
        //     console.log("else")
        // }
        
    };

    // <div className="radio-buttons">
    //     <input
    //         id=""
    //         value=
    //         name=""
    //         type="radio"
    //         onChange={this.handleChange}>
    //     </input>
    // </div>
    

    submit(event){


        event.preventDefault()
        this.setState({shownResults: true})
        //console.log(this.state)
        let sitting= this.state.tinetti.score + this.state.tinetti.score1 + this.state.tinetti.score2 + this.state.tinetti.score3 + this.state.tinetti.score4 +
         this.state.tinetti.score5 + this.state.tinetti.score6 + this.state.tinetti.score7+this.state.tinetti.score8 + this.state.tinetti.score9
        console.log(sitting)
        // this.state.sitting = sitting
        this.setState({sitting: sitting})

        let gait= this.state.tinetti.score10 + this.state.tinetti.score11 + this.state.tinetti.score12 + this.state.tinetti.score13 + this.state.tinetti.score14 +
         this.state.tinetti.score15 + this.state.tinetti.score16 + this.state.tinetti.score17+this.state.tinetti.score18 + this.state.tinetti.score19
        console.log(gait)
       this.setState({gait: gait})

        let total=sitting + gait
        console.log(total)
        // this.state.total = total
        this.setState({total: total})

        setTimeout(function(){
            document.getElementById("answer").scrollIntoView();
            console.log("Happy")
        },500
        );
        
    }



    render(){
        return(
     
         <div id = "test">
            <div className="pic">
                <img className="man" src="https://media1.tenor.com/images/5e91951a2b88c8d55d667e736b88d3b7/tenor.gif" alt ="man waling"/>
                <h1>Tinetti Assessment</h1>
            </div>
            <form  onSubmit={this.submit}>
         <div className="container">
             <div className="row">
                <div className="col">

                        <h2>Balance Section</h2>

                    {/* https://getbootstrap.com/docs/4.1/layout/grid/
                        //balance  and gait section */}
                     <span><b>Sitting Balance</b></span><br />
                    <input type="radio" id="leans" name="score" value="0" onChange={this.handleInputChange} required/>
                    <label> Leans/slides in chair (0pts)</label><br />

                    <input type="radio" id="safe" name="score" value="1" onChange={this.handleInputChange} />
                    <label >Steady, safe (1pt)</label><br />

                    <br />


                    <span><b>Rises from chair</b></span><br />
                    <input type="radio" id="help" name="score1" value="0" onChange={this.handleInputChange} required/>
                    <label >Unable without help (0pts)</label><br />

                    <input type="radio" id="arms" name="score1" value="1" onChange={this.handleInputChange}/>
                    <label >Able, uses arms(1pt)</label><br />

                    <label ><input type="radio" id="without" name="score1" value="2" onChange={this.handleInputChange}/>
                    Able without use of arms (2pts)</label> <br />

                


                    <br /><span><b>Attempts to rise</b></span><br />

                    <input type="radio" id="unable" name="score2" value="0" onChange={this.handleInputChange} required />
                    <label>Unable without help (0pts)</label><br />

                    <label ><input type="radio" id="required" name="score2" value="1" onChange={this.handleInputChange}/>
                    Able, requires > 1 attempt(1pt)</label><br /> 

                    <label ><input type="radio" id="able" name="score2" value="2" onChange={this.handleInputChange}/>
                    Able without use of arms (2 pts)</label><br /> 

                    <br />


                    <span><b>Immediate standing balnce 1st 5 secs</b></span><br />

                    <label ><input type="radio" id="unsteady" name="score3" value="0" onChange={this.handleInputChange} required />
                    Unsteady(staggers, moves feet, trunk sway)(0 pts)</label><br />

                    <label ><input type="radio" id="walker" name="score3" value="1" onChange={this.handleInputChange}/>
                    Steady but uses walker or other support(1pt) </label><br />

                    <label ><input type="radio" id="able" name="score3" value="2" onChange={this.handleInputChange}/>
                    Steady without walker or other support(2pts)</label><br />

                    <br />


                    <span><b>Standing Balance</b></span><br />

                    <input type="radio" id="balance" name="score4" value="0" onChange={this.handleInputChange} required />
                    <label >Unsteady(0 pts)</label><br />

                    <label ><input type="radio" id="wide" name="score4" value="1" onChange={this.handleInputChange}/>
                    Steady but wide stance/uses support(1pt)</label><br />

                    <label ><input type="radio" id="narrow" name="score4" value="2" onChange={this.handleInputChange}/>
                    Narrow stance without support(2pts)</label><br />

                    <br />


                    <span><b>Nudged</b></span><br />

                    <input type="radio" id="fall" name="score5" value="0" onChange={this.handleInputChange} required />
                    <label >Begins to fall(0pt)</label><br />

                    <label ><input type="radio" id="stagger" name="score5" value="1" onChange={this.handleInputChange}/>
                    Staggers, grabs, catches self(1pt)
                    </label><br />

                    <input type="radio" id="narrow" name="score5" value="2" onChange={this.handleInputChange}/>
                    <label >Steady(2pts)</label><br />

                    <br />


                    <span><b>Eyes Closed</b></span><br />

                    <input type="radio" id="eyes" name="score6" value="0" onChange={this.handleInputChange} required />
                    <label >Unsteady (0pts)</label><br /> 

                    <input type="radio" id="steady" name="score6" value="1" onChange={this.handleInputChange}/>
                    <label >Steady (1pt)
                    </label><br />

                    <br />


                    <span><b>Turning 360 degrees:Steps</b></span><br />

                    <input type="radio" id="steps" name="score7" value="0" onChange={this.handleInputChange} required />
                    <label >Discontinuous steps(0pts)</label><br />
                    <input type="radio" id="continuous" name="score7" value="1" onChange={this.handleInputChange}/>
                    <label >Continuous steps(1pt)</label><br />

                    <br />


                    <span><b>Turning 360 degrees:Steadiness</b></span><br />

                    <label ><input type="radio" id="turning" name="score8" value="0" onChange={this.handleInputChange} required/>
                    Unsteady(grabs/staggers) (0 pts)</label><br />
                    <input type="radio" id="continuous" name="score8" value="1" onChange={this.handleInputChange}/>
                    <label >Steady (1 pt)</label><br />

                    <br />


                    <span><b>Sitting Down</b></span><br />

                    <label ><input type="radio" id="sitting" name="score9" value="0" onChange={this.handleInputChange} required/>
                   Unsafe (misjudged distance, falls into chair)(0 pts)</label><br />

                    <label ><input type="radio" id="not" name="score9" value="1" onChange={this.handleInputChange}/>
                    Uses arms or not a smooth motion(1pt)
                    </label><br />

                    <input type="radio" id="smooth" name="score9" value="2" onChange={this.handleInputChange}/>
                    <label >Safe, smooth motion (2pts)</label><br />

                    <br />
            </div>

            <div className="col">
                <h2>Gait Section</h2>


                <span><b> Indication of gait</b></span><br />

                <label ><input type="radio" id="attempts" name="score10" value="0" onChange={this.handleInputChange} required />
               Any hesitancy or multiple attempts (0pts)</label><br />

                <input type="radio" id="nohesitancy" name="score10" value="1" onChange={this.handleInputChange}/>
                <label >No Hesitancy(1pt)
                </label><br />

                <br />


                <span><b>Step length and height: Right</b></span><br />

                <input type="radio" id="right" name="score11" value="0" onChange={this.handleInputChange}required/>
                <label >Step to (0pts)</label><br />

                <input type="radio" id="left" name="score11" value="1" onChange={this.handleInputChange}/>
                <label>Step through R(1pt)
                </label><br />
                

                <br />


                <span><b> Step length and height: Left</b></span><br />

                <input type="radio" id="length" name="score12" value="0" onChange={this.handleInputChange} required/>
                <label 
                >Step to (0pts)</label><br />

                <input type="radio" id="height" name="score12" value="1" onChange={this.handleInputChange}/>
                <label 
                >Step through L(1pt)
                </label><br />

                <br />


                <span><b> Foot clearance: Right</b></span><br />

                <input type="radio" id="clearance" name="score13" value="0" onChange={this.handleInputChange} required/>
                <label >Foot drop(0pts)</label><br />

                <input type="radio" id="foot" name="score13" value="1" onChange={this.handleInputChange}/>
                <label >R foot clears floor L(1pt)
                </label><br />

                <br />


                <span><b> Foot clearance: Left</b></span><br />

                <input type="radio" id="drop" name="score14" value="0" onChange={this.handleInputChange} required/>
                <label >Foot drop (0pts)</label><br />  

                <input type="radio" id="foot" name="score14" value="1" onChange={this.handleInputChange}/>
                <label >L foot clears floor (1pt)
                </label><br />


                <br /><span><b> Step Symmetry </b></span><br />

                <label ><input type="radio" id="not" name="score15" value="0" onChange={this.handleInputChange} required/>
               Right and left step lengths not equal (0pts)</label><br />

                <label ><input type="radio" id="equa;" name="score15" value="1" onChange={this.handleInputChange}/>
                Right and left step lengths appear equal (1pt)
                </label><br />

                <br />


                <span><b> Step Continuity</b></span><br />

                <label ><input type="radio" id="not" name="score16" value="0" onChange={this.handleInputChange} required/>
                Stopping/discontinuity between steps (0pts)</label><br />

                <label ><input type="radio" id="equal" name="score16" value="1" onChange={this.handleInputChange}/>
                Steps appear continuous (1pt)
                </label><br/> 

                <br />


                <span><b> Path </b></span><br />

                <input type="radio" id="marked" name="score17" value="0" onChange={this.handleInputChange} required/>
                <label >Marked deviation(0pts)</label><br />

                <label ><input type="radio" id="mild" name="score17" value="1" onChange={this.handleInputChange}/>
                Mild/moderate deviation or uses AD(1pt)
                </label><br />

                <input type="radio" id="without" name="score17" value="2" onChange={this.handleInputChange}/>
                <label >Straight without AD (2pts)</label><br />

                <br />


                <span><b> Trunk </b></span><br />
                <label ><input type="radio" id="sway" name="score18" value="0" onChange={this.handleInputChange} required />
               Marked sway or uses AD(0pts)</label><br />

               <label ><input type="radio" id="knees" name="score18" value="1" onChange={this.handleInputChange}/>
                No sway but flex knees or back or uses arms for stability(1pt)
                </label><br />

                <label ><input type="radio" id="without" name="score18" value="2" onChange={this.handleInputChange}/>
                No sway, flex, use of arms or AD (2pts)</label><br />

                <br />


                <span><b> Walk Time</b></span><br />

                <input type="radio" id="time" name="score19" value="0" onChange={this.handleInputChange} required/>
                <label >Heels apart (0pts)</label><br /> 

                <label ><input type="radio" id="foot" name="score19" value="1" onChange={this.handleInputChange}/>
                Heels almost touching while walking (1pt)
                </label><br />

                <br />
                                       
                <div className="form-row">
                            <div className="col-md-12 text-center">
                                <button type="submit" className="btn btn-primary">Submit</button> <span>&nbsp;</span>
                             
                               <button onClick= {this.reset} type="reset" className="btn btn-primary">Clear</button>
                              
                            
                                </div>
                        </div>        
                </div>
            </div>
        </div>
        </form>
        {(this.state.shownResults===true) ?       
        <Result answerbalance = {this.state.sitting} answergait={this.state.gait}
          totalanswer={this.state.total}/> : ''}
      </div>
     );
   };
}     
 

