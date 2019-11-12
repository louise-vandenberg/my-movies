(() => ({
    name: 'Card',
    type: 'CARD',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
       

        if(B.env === 'dev'){
            
            return (
                <div className={classes.root}>
                     <div className={classes.heading}>
                         TITLE
                     </div>
                     <div className={classes.image}>
                         IMAGE
                     </div>
                </div>
            );
        } else{

            const heading = B.useText(options.headingVariable);
            const image = B.useText(options.imageVariable);
            let description = B.useText(options.descriptionVariable);
            description = description.substring(0, 100) + "...";
            const genre = B.useText(options.genreVariable);
            const votes = B.useText(options.votesVariable);
            
            return(
                <div className={classes.main}>
                    <div className={classes.heading}>
                        <label>{heading}</label>
                    </div>
                    <div className={classes.imageC}>
                         <img className={classes.image} src={image}></img>
                    </div>
                    <div className={classes.subtitle}>
                        <label>{genre}{votes}</label>
                    </div>
                    <div className={classes.description}>
                        <label>{description}</label>
                    </div>
                    
           </div>
    
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      main: {
          backgroundColor: "aliceblue",
          padding: '10px',
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            display: 'grid',
            gridGap: '10px',

            gridTemplateAreas: `"content header header" 
                                 "content subtitle subtitle" 
                                 "content description description"`,

  
      },
      heading: {
        gridArea: 'header'
      },

      imageC: {
        gridArea: 'content',
       
      },
      image: {
        height: '200px',
        width: '200px'
      },
      subtitle: {
          gridArea: 'subtitle'
      },
      description: {
        gridArea: 'description'
    }
  
    
    }),
  }))();
  