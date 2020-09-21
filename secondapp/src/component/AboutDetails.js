import React from 'react';

const Details = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3>Details Page of {props.match.params.topic}</h3>
            </div>
            <div className="panel-body">
                <p>
                    {props.match.params.topic} page is crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs, PHP), design (working closely with designers), front-end development (AngularJs, Angular2, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), Server Administrator(AWS, IBM, Azure),database(MongoDB,cassendra,Mysql), load balancing (Varnish and Memcached)
                </p>
            </div>
        </div>
    )
}

export default Details;