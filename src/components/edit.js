(() => ({
    name: 'Edit',
    type: 'ROW',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (()=> {
        if(B.env === 'dev'){
          
            return (
                <div className={classes.builderMode}>
                    Edit
                </div>
            );
        } else{
            const {propertyId, modelId} = options;
            const {getProperty, getModel, GetOne} = B;
            const modelObj = getModel(modelId);
            const movieId = 1;
            const url = "https://my-movies-developer.bettywebblocks.com/"+ modelObj.name+"/edit/"+movieId ;
            
            const MyForm = props => {
                const [state, setState] = useState(props.data);

                return(
                    
                    <form action={url} method="post" enctype="multipart/form-data">
                         {propertyId.map((property)=>{
                             
                              const name = getProperty(property).name;
                             
                                // console.log(state[name]);
                                return <div className={classes.new}>
                                   <label className={classes.label}>{name}</label>
                                   <input className={classes.inputBox}  
                                         value={state[name]}
                                            type="text" name={name} 
                                            id="id"
                                            onChange={event => {
                                                let newValue = event.target.value;
                                                setState(prev => ({
                                                  ...prev,
                                                  [name]: newValue,
                                                }));
                                              }}
                                        />
                                </div>
                                                    
                                })}
                                <button className={classes.button}>Submit</button>
                       
                    </form>
                );
            }
           
            return(
                <div className={classes.main}>
                   <div className={classes.root}>
                       <h1>Edit movie</h1>
                       <br/>
                       {/* <Input propertyId={propertyId} /> */}
                       <GetOne modelId={modelId} byId={movieId}>
                           {({loading, error, data})=> {
                               if(loading){
                                   return <span>Loading....</span>
                               }
                               if(error) {
                                   return <span>Something went wrong: {error.message}</span>
                               }
                               return (
                                   <MyForm data={data}/>                   
                               );

                           }}
                      
                       </GetOne>
                   </div>
                </div>
            );
        }
      
    })(),
    styles: B => ({ typography }) => ({
        builderMode: {
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
            height:'200px',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
          },
  
          main: {
            background: 'rgb(2,0,36)',
            background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
            height:'100%',
            // textAlign: 'center',
          },
  
        root: {
          backgroundColor: "aliceblue",
          fontFamily: "Raleway",
          margin: '70px 10% 40px 10%',
          padding: '40px',
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          [`@media (max-height: 813px)`]: {
            fontSize: '20px',
          }
          
      },

      new: {
        textTransform: 'capitalize',
        display: 'grid',
        gridTemplateColumns: '20% auto',
        paddingBottom: '15px',
        [`@media (max-height: 813px)`]: {
            gridTemplateColumns: '30% auto',
          }

      },

      label:{

        [`@media (max-height: 813px)`]: {
            fontSize: '14px',
          }
      },

      inputBox : {
        // height: '30px',
        padding: '10px',
        fontSize: '16px',
        [`@media (max-height: 813px)`]: {
            padding: '7px',
            fontSize: '14px',
          }
      },

      button: {
        
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
          border: 'none',
          color: 'white',
          padding: '15px 32px',
          textAlign: 'center',
          textDecoration: 'none',
          display: 'block',
          fontSize: '16px',
          marginRight: '0',
          marginLeft: 'auto',
          [`@media (max-height: 813px)`]: {
            padding: '10px 27px',
            fontSize: '12px',
          }

      }

     
    
    }),
  }))();
  