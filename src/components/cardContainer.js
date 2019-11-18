(() => ({
    name: 'CardContainer',
    type: 'ROW',
    allowedTypes: ["CARD"],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.builderMode}>
                    {children.length < 1? "Card Container" : children}
                </div>
            );
        } else{
          const {GetAll} = B;
          const {modelId} = options;          
            return(
                <div className={classes.root}>
                    <GetAll modelId={modelId}>
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
                                  <div className={classes.cardGrid}></div>
                                  <div className={classes.cardGrid}></div>
                                  <div className={classes.cardGrid}></div>
                            </div>
                          );
                        }}
                    </GetAll>
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
      builderMode: {
        width: '100%',
       
        textAlign: 'center',
        height: '300px',
        top: '30px',
        color: 'white',
        fontFamily: 'Arial Black',
        fontSize: '25px',
        padding: '20px',
        background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',

    },
      root: {
        background: 'rgb(2,0,36)',
        background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
        display: 'block',
        overflow: 'auto',
        height:'100%'

      },
      container: {
        padding: '70px 5% 5% 5%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        // '&::after': {
        //   content: "''",
        //   flex:'auto'
        // },
        [`@media (max-height: 813px)`]: {
          padding: '70px 10px 50px 10px',
        }
      },
      cardGrid: {
        padding: '10px',
        width: '500px',
        height: '284px',
        [`@media (max-height: 813px)`]: {
          width: '280px',
          height: '380px',
        }
      }
    
    }),
  }))();
  