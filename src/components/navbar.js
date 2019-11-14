(() => ({
    name: 'Navbar',
    type: 'ROW',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.builderMode}>
                    Navbar
                </div>
            );
        } else{
            const {HomeEndpoint} = options;
         
            return(
                <div className={classes.root}>
                    <li className={classes.link}>
                        <B.Link endpointId = {HomeEndpoint} className={classes.linkItem}>Home</B.Link>
                    </li>
                    <li className={classes.link}>
                         <B.Link className={classes.linkItem}>New Movie</B.Link>
                    </li>
                  
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
        builderMode: {
            width: '100%',
            border: '1px solid #ccc',
            textAlign: 'center',
            height: '30px',
            background: 'black',
            color: 'white',
            fontFamily: 'Arial Black',
            fontSize: '25px',
            padding: '20px',

        },
      root: {
        background: 'black',
        position: 'fixed',
        top: '0',
        width: '100%',
        padding: '20px',
        height: '30px',
        textAlign: 'center',
        [`@media (max-height: 813px)`]: {
            height: '20px',
            padding: '15px',
          }
      
      },
      link: {
        listStyleType: 'none',
        display: 'inline',
        paddingRight: '50px'
      },
      linkItem: {
        textDecoration: 'none',
        color: 'white',
        fontFamily: 'Arial Black',
        fontSize: '25px',
        background: 'rgba(121,9,9,1)',
        padding: '5px',
        borderRadius: '5px',
        boxShadow: "0 0 8px 8px #6e1414 inset",
        [`@media (max-height: 813px)`]: {
            fontSize: '15px'
          }
      }
     
    
    }),
  }))();
  