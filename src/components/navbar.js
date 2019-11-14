(() => ({
    name: 'Navbar',
    type: 'ROW',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.root}>
                    Navbar
                </div>
            );
        } else{
         
            return(
                <div className={classes.root}>
                  Navbar
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      root: {
        background: 'black',
        color: 'white'
      },
     
    
    }),
  }))();
  