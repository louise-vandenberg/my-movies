(() => ({
    name: 'CardDetails',
    type: 'ROW',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.builderMode}>
                    Card Details
                </div>
            );
        } else{
            const { getVariable } = B;
            const { movieId, modelId } = options;
            const variable = getVariable(movieId[1].id);
            let id;
            if (variable) {
              const params = useParams();
              const value = params[variable.name];
              id = parseInt(value, 10);
              
            }
         
            return(
                <div className={classes.root}>
                    <B.GetOne modelId={modelId} byId={id}>
                    {({ loading, error, data }) => {
                        if (loading) {
                        return <span>Loading...</span>;
                        }

                        if (error) {
                        return <span>Something went wrong: {error.message} :(</span>;
                        }

                        const { id } = data;
                        console.log(data);
                        return (
                        <div>
                           
                            <div className={classes.heading}>
                                 {data.title}
                            </div>
                            <div className={classes.imageC}>
                                <img className={classes.image} src={data.image}></img>
                            </div>
                            <div className={classes.subtitle1}>
                                {data.genre}
                            </div>
                            <div className={classes.subtitle2}>
                                {data.votes}
                            </div>
                            <div className={classes.description}>
                                 {data.description}
                            </div>
                          
                            </div>
                        );
                }}
                </B.GetOne>
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
        builderMode: {
        },

      root: {
        backgroundColor: "aliceblue",
        fontFamily: "Raleway",
        margin: '20%',
        padding: '10%',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          display: 'grid',
          

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
  