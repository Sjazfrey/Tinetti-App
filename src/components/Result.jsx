import React, {Component} from 'react'

export default class HomeView extends Component {

    // constructor(){
    //     super()
    //     this.state ={};
    //    this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleSubmit(event){
    //     this.setState({value: event.target.value});
    // }
        render(){
            return(
                // <!-- show informatin of entry.   Bootstrap website -->
                <div className="info" id = "answer">

                    <div className="card">
                        
                        <div className="card-body">
                            
                            <div className="card-text"> 
                               
                                <div>Balance Score:
                                    {this.props.answerbalance}
                                </div>

                                <div>Gait Score:
                                   {this.props.answergait}
                                </div>

                                <div>Total Score:
                                   {this.props.totalanswer}
                                 </div>   
                                {/* <form action="/         method="GET">
                                    <input type="submit" value="Edit"/>
                                    </form>
                                    <a href= "#result"  className="btn btn-pill btn-info">Submit</a>  */}
                           </div>
                    </div>
                
                    {/* <a className "btn btn-primary" href="/assessment/all">Show all</a> */}
                
                    {/* // <!-- info from bootstrap website https://getbootstrap.com/docs/4.1/layout/grid/--> */}
                    <div class="row no-gutter">
                        <div className="col-md-3">Tinetti Score</div>
                        <div className="col-md-3">Fall Risk Interpretation</div>
                        <div className=" w-100"></div>
                        <div className="col-md-3">Below 19</div>
                        <div className=" col-md-3">Highly Fall Risk</div>
                        <div className="w-100"></div>
                
                        <div className="col-md-3">19-23</div>
                        <div className=" col-md-3">Moderate Fall Risk</div>
                        <div className="w-100"></div>
                        <div className="col-md-3">Above 23</div>
                        <div className=" col-md-3">Low Fall Risk</div>
                    </div>
                  </div>

                  </div>
               
            );
        }
}