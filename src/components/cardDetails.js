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
              console.log(id);
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
                            <p>Fetched a record with ID: {id}.</p>
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
      
      
      },
   
    
    }),
  }))();
  