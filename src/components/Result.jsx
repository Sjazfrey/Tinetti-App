import React, {Component} from 'react'

export default class HomeView extends Component {

  
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
                                
                           </div>
                    </div>
                
                   
                
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