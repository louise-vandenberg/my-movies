(() => ({
    name: 'Card',
    type: 'CARD',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
       

        if(B.env === 'dev'){
            
            return (
                <div className={classes.builderMode}>
                      <div className={classes.heading}>
                      *****************Heading Variable*****************
                    </div>
                    <div className={classes.imageC}>
                        Image Variable
                    </div>
                    <div className={classes.subtitle1}>
                       Genre Variable
                    </div>
                    <div className={classes.subtitle2}>
                       Votes Variable
                    </div>
                    <div className={classes.description}>
                    *******************Description Variable*******************
                    </div>
                   
                    
                </div>
            );
        } else{
            // console.log(options.headingVariable);
            const heading = B.useText(options.headingVariable);
            // console.log(heading);
            const image = B.useText(options.imageVariable);
            let description = B.useText(options.descriptionVariable);
            description = description.substring(0, 200) + "...";
            const genre = B.useText(options.genreVariable);
            const votes = B.useText(options.votesVariable);
            const id = B.useText(options.idVariable);

            // const endpointId = options.EndpointId;
            // console.log(endpointId);
            // const getMoreLink = B.getEndpoint(endpointId);
            // console.log(getMoreLink.url);

            // let url = getMoreLink.url.substring(0, getMoreLink.url.indexOf(":"));

            const url = "/movies/"
           
            
            return(
                <div className={classes.main}>
                    <div className={classes.heading}>
                        {heading}
                    </div>
                    <div className={classes.imageC}>
                         <img className={classes.image} src={image}></img>
                    </div>
                    <div className={classes.subtitle1}>
                        {genre}
                    </div>
                    <div className={classes.subtitle2}>
                        {votes}
                    </div>
                    <div className={classes.description}>
                       {description}
                    </div>
                    <div className={classes.footer}>
                       <B.Link to={url+id}>View more</B.Link>
                    </div>
                    
           </div>
    
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      builderMode: {
        width: '100%',
       
        textAlign: 'center',
        
        color: 'black',
        fontFamily: 'Arial Black',
        fontSize: '25px',
        padding: '20px',
        background: 'aliceblue',
        display: 'grid',
        gridTemplateAreas: `"content header header" 
                            "content subtitle1 subtitle2" 
                            "content description description"
                            "content footer footer"`,
        border: 'solid black 5px'

    },
      main: {
          backgroundColor: "aliceblue",
          fontFamily: "Raleway",
          padding: '15px',
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            display: 'grid',
            gridGap: '20px',

            gridTemplateAreas: `"content header header" 
                                 "content subtitle1 subtitle2" 
                                 "content description description"
                                 "content footer footer"`,

            [`@media (max-height: 813px)`]: {
                gridTemplateAreas: 
                   `"content content" 
                    "header header" 
                    "subtitle1 subtitle2"
                    "description description"
                    "footer footer"`,
            }
      },
      heading: {
        gridArea: 'header',
        fontSize: '20px',
        fontWeight: 'bold',
        [`@media (max-height: 813px)`]: {
            fontSize: '18px',
          }
      },

      imageC: {
        gridArea: 'content',
        justifySelf: 'center',
       
      },
      image: {
        height: '250px',
        width: '200px',
        [`@media (max-height: 813px)`]: {
           
            width: '150px',
            height: '120px',
          }
      },
      subtitle1: {
          gridArea: 'subtitle1',
          fontSize: '15px',
          [`@media (max-height: 813px)`]: {
            fontSize: '12px',
          }
      },
      subtitle2: {
        gridArea: 'subtitle2',
        fontSize: '15px',
        [`@media (max-height: 813px)`]: {
            fontSize: '12px',
          }
    },
      description: {
        gridArea: 'description',
        fontSize: '17px',
        [`@media (max-height: 813px)`]: {
            fontSize: '14px',
          }
    },
    footer: {
        gridArea: 'footer',
        fontSize: '15px',
        justifySelf: 'end',
        [`@media (max-height: 813px)`]: {
            fontSize: '12px',
          }
    }
  
    
    }),
  }))();
  