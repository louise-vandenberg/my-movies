(() => ({
    name: 'CardContainer',
    type: 'ROW',
    allowedTypes: ["CARD"],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
            return (
                <div className={classes.root}>
                    bleh
                </div>
            );
        } else{
            return(
                <div className={classes.root}>
                    
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      root: {
            display: 'grid',
            gridTemplateAreas: "'header header header' 'content content content'",

  
      },
      heading: {
        gridArea: 'header'
      },

      image: {
        gridArea: 'content'
      }
  
    
    }),
  }))();
  