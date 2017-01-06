    import React from 'react';
    import request from 'superagent' ;
	import api from './test/stubAPI';
	import { Link } from 'react-router';

  var Specification = React.createClass({
      render: function(){
            var player = this.props.player ;             
            var age = player.age.map(function(avb,index) {
              return (
                       <dd key={index}>{avb}</dd>
                     ) ;
                }) ;
            var dimensions = 
player.sizeAndWeight.dimensions.map(function(dim,index) {
              return (
                        <dd key={index}>{dim}</dd>
                     ) ;
                }) ;
          var display = (
              <div>
                 <ul className="specs">
				 <p>
				<b> <h2> Player Profile: </h2> </b>
				
				</p>
				 
                  <li >
				  
				  
                   <h4> <span><u><b>Age:</b></u></span></h4>
                    <dl>
                     
                         {age}
                    </dl>
                  </li>
				  
                  <li>
                    <h4><span><u><b>Position:</b></u></span></h4>
                    <dl>
                   
                      <dd>{player.position.type}</dd>
                    
                    </dl>
                  </li>    
                 
                  
                  <li>
                    <h4><span><u><b>Career Goals:</b></u></span></h4>
                    <dl>
                      <dt>Real Madrid Goals:</dt>
                      <dd>{player.goals.realmadridgoals}</dd>
                      <dt>International Goals:</dt>
                      <dd>{player.goals.internationalgoals}</dd>
                    </dl>
                  </li>
                  <li>
                    <h4><span><u><b>Height and Weight:</b></u></span></h4>
                    <dl>
                    
                          {dimensions}
                    
                    </dl>
                  </li>    
                 
                  
                  <li>
                    <h4><span><u><b>Nationality:</b></u></span></h4>
                    <dd>{player.nationality}</dd>
                  </li>              
                  </ul>  
				  
				  <h4><u><b> Click the link below to go to the Real 
Madrid fan community comments page: </b></u></h4>
			<li>	  
          <u><b><Link to={'/commentPage/'}>Comments Page (link) 
</Link></b></u>
		  
		  </li>
            </div>
           )
            return (
                 <div>
                  {display}

              </div>
             );
      }
  });

 
    var ImagesSection = React.createClass({
		
      render: function(){
		  
            var thumbImages = 
this.props.player.images.map(function(img,index) {
              return (
                  <li>
                   <img key={index} src={"/playerSpecs/" + img}
                       alt="missing" />
                </li>
                ) ;
                } );
				
            var mainImage = (
              <div className="player-images">
             
                   
                   
            </div>
            ) ;
			
              return (
                  <div>
                   {mainImage}
                   <h2><i>{this.props.player.name}</i></h2>
                   <p>{this.props.player.description}</p> 
				   
                   <ul className="player-thumbs">
                       {thumbImages}
					   
                   </ul>
                  </div>
				  
                  );
          }
    })

    var PhoneDetail = React.createClass({
		
       getInitialState: function() {
           return { player: null };
       },
	   
	   
      componentDidMount: function() {
		   
		   var url = '/playerSpecs/players/players/' + 
this.props.params.id + '.json';
		   console.log(url);   
          request.get(
             url, function(err, res) {
                 window.resp = res;
				 var json = JSON.parse(res.text);
                if (this.isMounted()) {
                    this.setState({ player : json});
          }
        }.bind(this));
      } ,
	  
     render: function(){
		  
var display;

            var player = this.state.player ;
          if (player)
		  {
           display =  (
                <div>
                   <ImagesSection player={player} />
                   <Specification  player={player} />       
                </div>
                ) ;
             }
			 else
			 {
			display = <p> no player details</p> ; 
			 }
			 
            return (
                <div>
				
               {display}
			   
			
            </div>
            );
      }
    });

    export default PhoneDetail;
	