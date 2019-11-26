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
          const take = parseInt(options.take);   
          const [page, setPage] = useState(1);
          const [totalPages, setTotalPages] = useState(1);

          const PaginationTag = props=>{
            const totalCount = props.data.totalCount;
          
            setTotalPages(Math.ceil(totalCount/take), ()=>console.log(totalPages));
           
            return(
              <div className={classes.pagination}>        
            
                    <button className={classes.button} onClick={()=>{
                       (page===1)? true : setPage((prev)=>{return prev-1})
                        }}>Previous</button>
                     <button className={classes.button} onClick={()=>{
                       (page<totalPages)? setPage((prev)=>{return prev+1}): true
                        }}>Next</button>
                      <br/>
                  </div>
            );
           
          }

            return(
                <div className={classes.root}>
                  
                          
                    <GetAll modelId={modelId} skip={(page-1)*take} take={take}>
                        {({loading, error, data, refetch})=>{
                          if(loading){
                            return <div>Loading</div>
                          }
                          if(error){
                            return <div>Error: {error.message}</div>
                          }
                          const {results} = data;

                          
                          return(
                            <div>
                              <PaginationTag data={data}/>
                              <div className={classes.container}>
                              
                                {results.map(item => 
                                  <div className={classes.cardGrid}>
                                    <B.GetOneProvider key={item.id} value={item}>
                                        {children}
                                    </B.GetOneProvider>
                                  </div>)}
                                  {/* <div className={classes.cardGrid}></div>
                                  <div className={classes.cardGrid}></div>
                                  <div className={classes.cardGrid}></div> */}
                              </div>
                              <div className={classes.footer}>
                                  Page {page} of {totalPages}
                              </div>
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
        padding: '20px 5% 5% 5%',
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
      },
      pagination: {
        display: 'block',
        paddingTop: '80px',
        textAlign: 'center'
      },
      button: {
        
        background: 'aliceblue',
        border: 'none',
        marginRight: '10px',
        color: 'black',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
       
        fontSize: '16px',
        '&:hover': {
          cursor: 'pointer'
        },
     
        [`@media (max-height: 813px)`]: {
          padding: '10px 27px',
          fontSize: '12px',
        }

    },
    footer: {
      // background :'aliceblue',
      color: 'white',
      fontSize: '25px',
      fontWeight: 'bold',
      textAlign: 'center',
      // padding: '30px',
      marginLeft: '30%',
      marginRight: '30%'
    }


    
    }),
  }))();
  