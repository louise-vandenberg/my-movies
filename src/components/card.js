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
            return(
                <div className={classes.root}>
                    Hello
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      root: {
            display: 'grid',
            gridTemplateAreas: "'header header header''content content content'",

  
      },
      heading: {
        gridArea: 'header'
      },

      image: {
        gridArea: 'content'
      }
  
    
    }),
  }))();
  