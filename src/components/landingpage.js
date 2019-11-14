(() => ({
  name: 'Landingpage',
  type: 'ROW',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: <div className={classes.root}>
          <div className={classes.container}>
              <div className={classes.content}>
                  <h1 className={classes.heading}>Movies</h1>
                 <h3 className={classes.subHeading}>Welcome to my movie app, created using page builder</h3>
                  <B.Link endpointId={options.endpointId}><button className={classes.btn}>View</button></B.Link>
              </div>
              
          </div>
    </div>,
  styles: B => ({ typography }) => ({
    root: {
     
      height: '100%',
      width: '100%',
      backgroundImage: "url('https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80')",
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',

    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '35%', 
      width: '100%',
      backgroundImage: "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80')",
      
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      boxShadow: "0 0 8px 8px #6e1414 inset",
      [`@media (max-height: 813px) and (max-width: 1317px)`]: {
        height: '50%'
      }
    },
    content: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    heading: {
      color: 'white',
      fontSize: '40px',
      textShadow: '2px 2px 4px #000000',
      [`@media (max-height: 813px) and (max-width: 1317px)`]: {
        fontSize: '25px'
      }
    },
    subHeading: {
      textAlign: 'center',
      [`@media (max-height: 813px) and (max-width: 1317px)`]: {
        fontSize: '15px'
      }
    },

    btn: {
      backgroundColor: '#6e1414',
      border: 'none',
      color: 'white',
      padding: '15px 32px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      borderRadius: '10px',
      cursor: 'pointer',
      marginTop: '30px',
      marginBottom: '30px',
      [`@media (max-height: 813px) and (max-width: 1317px)`]: {
        fontSize: '15px'
      }
    },
  
  }),
}))();
