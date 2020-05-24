import React from 'react';

class Details extends React.Component {

    render() { 
      return (
      <div className="details">
          <h2>Weather Details</h2>
          {this.props.details.tempareature && <p><span>Tempareature</span>: <span> {this.props.details.tempareature} </span></p>}
          {this.props.details.city && <p><span>City</span>: <span> {this.props.details.city} </span></p>}
          {this.props.details.country && <p><span>Country</span>: <span> {this.props.details.country} </span></p>}
          {this.props.details.humidity && <p><span>Humidity</span>: <span> {this.props.details.humidity} </span></p>}
          {this.props.details.description && <p><span>Description</span>: <span> {this.props.details.description} </span></p>}
          {this.props.details.error && <p><span>Error</span>: <span> {this.props.details.error} </span></p>}
      </div>
    );
}
}

export default Details;
