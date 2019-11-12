(() => ({
    name: 'CardContainer',
    type: 'ROW',
    allowedTypes: ["CARD"],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.root}>
                    bleh {children}
                </div>
            );
        } else{
          const {GetAll} = B;
          const {modelId} = options;
            return(
                <div className={classes.root}>
                    <GetAll modelId={modelId} skip={0} take={10}>
                        {({loading, error, data, refetch})=>{
                          if(loading){
                            return <div>Loading</div>
                          }
                          if(error){
                            return <div>Error: {error.message}</div>
                          }
                          const {results} = data;
                          
                          return(
                            <div className={classes.container}>
                                {results.map(item => 
                                  <div className={classes.cardGrid}>
                                    <B.GetOneProvider key={item.id} value={item}>
                                        {children}
                                    </B.GetOneProvider>
                                  </div>)}
                            </div>
                          );
                        }}
                    </GetAll>
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      root: {

        padding: '10%',
        height: '100%',
       width: '100%'
  
      },
      container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      },
      cardGrid: {

        width: '400px'
      }
    
    }),
  }))();
  