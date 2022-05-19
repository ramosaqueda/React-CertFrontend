import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actFetchProductsRequest();
  }
  render(
    <div className="row" style={{marginTop:'10px'}}>
    <div className="col-md-12">
        <div className="row">
            {
                _products.map((item,index)=>(
                    <div key={index} className="col-md-2" style={{marginBottom:'10px'}}>
                        <img src={item.image} className="img-resposive" style={{width:'100%',height:'100px'}}/>
                        <h5>{item.name}</h5>
                        <span className="badge badge-primary" style={{cursor:'pointer'}} onClick={()=>this.props.AddCart(item)}>Add Cart</span>
                    </div>
                ))
            }
        </div>
    </div>
</div>
) 
}
return(
<div className="row">
<h2>Loading...!</h2>
</div>
)
  )  
}
