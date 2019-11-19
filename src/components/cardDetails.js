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

            const UpdateVotesForm = (props)=>{
              const urlUpvote = "https://my-movies-developer.bettywebblocks.com/movies/upvote/";
              const urlDownvote = "https://my-movies-developer.bettywebblocks.com/movies/downvote/";
              let {votes, id} = props.data;
              const [state, setState] = useState(parseInt(votes, 10));
            
              return (
                      <div className={classes.subtitle2}>
                      
                           <iframe className={classes.iframeclass} name="iframe"></iframe>
                      
                       
                          <form onSubmit={(e)=> {
                              setState(prevState=> {
                                return prevState-1;
                              });
                            return false;
                          }}  target="iframe" className={classes.form} action={urlDownvote + id} method="post" enctype="multipart/form-data">
                              <button type="submit" className={classes.buttons}>-</button>
                          </form>
                        {state} 
                        <span>
                          <form onSubmit={(e)=> {
                              setState(prevState=> {
                                return prevState+1;
                              });
                            return false;
                          }}  target="iframe" className={classes.form} action={urlUpvote + id} method="post" enctype="multipart/form-data">
                              <button type="submit" className={classes.buttons}>+</button>
                          </form>
                        </span>
                    </div>
              );

            }
         
            return(
                <div className={classes.main}>
                    <B.GetOne modelId={modelId} byId={id}>
                    {({ loading, error, data }) => {
                        if (loading) {
                        return <span>Loading...</span>;
                        }

                        if (error) {
                        return <span>Something went wrong: {error.message} :(</span>;
                        }

                        const { id } = data;
                        const urlDelete = "https://my-movies-developer.bettywebblocks.com/movies/delete/";

                       
                        return (
                        <div className={classes.root}>
                           
                            <div className={classes.heading}>
                                 {data.title}
                            </div>
                            <div className={classes.imageC}>
                                <img className={classes.image} src={data.image}></img>
                            </div>
                            <div className={classes.subtitle1}>
                                {data.genre}         
                            </div>
                            <UpdateVotesForm data={data}/>
                            <div className={classes.description}>
                                 {data.description}
                            </div>
                            <div className={classes.footer}>
                              

                                  <B.Link to={"/movies/edit/" + data.id}><button className={classes.buttons}>Edit</button></B.Link>
                                 <form className={classes.form} action={urlDelete + data.id} method="post" enctype="multipart/form-data">
                        
                                     <button className={classes.buttons}>Delete</button>
                                </form>
                               
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
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
         
          height:'400px',
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
        },

        main: {
          background: 'rgb(2,0,36)',
          background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
          // display: 'block',
          // overflow: 'auto',
          height:'100%',
          // width: '100%',
          textAlign: 'center',
        },

      root: {
        backgroundColor: "aliceblue",
        fontFamily: "Raleway",
        margin: '70px 10% 40px 10%',
        // maxWidth: '800px',
        
        padding: '40px',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        display: 'grid',
        justifyItems: 'center',

          gridTemplateAreas: `"content header" 
                               "content subtitle1" 
                               "content subtitle2"
                               "content description"
                               "content footer"`,

          [`@media (max-height: 813px)`]: {
              gridTemplateAreas: 
                 `"content" 
                  "content"
                  "header" 
                  "subtitle1"
                  "subtitle2"
                  "description"
                  "footer"`,
          },
         
    },
    heading: {
        gridArea: 'header',
        fontSize: '40px',
        fontWeight: 'bold',
        justifySelf: 'center',
        [`@media (max-height: 813px)`]: {
            fontSize: '18px',
          }
      },

      imageC: {
        gridArea: 'content',
        justifySelf: 'center',
        marginRight: '40px',
        [`@media (max-height: 813px)`]: {
           
          marginRight: '0px',
        }
      },
      image: {
        height: '450px',
        width: '300px',
        [`@media (max-height: 813px)`]: {
          height: '200px',
          width: '150px',
            // width: '150px',
            // height: '100px',
            // marginRight: '20px',
            // justifySelf: 'center',
          }
      },
      subtitle1: {
          gridArea: 'subtitle1',
          fontSize: '25px',
          justifySelf: 'center',
          [`@media (max-height: 813px)`]: {
            fontSize: '12px',
          }
      },
      subtitle2: {
        gridArea: 'subtitle2',
        fontSize: '25px',
        justifySelf: 'center',
        [`@media (max-height: 813px)`]: {
            fontSize: '12px',
          }
    },
      description: {
        gridArea: 'description',
        fontSize: '20px',
        [`@media (max-height: 813px)`]: {
            fontSize: '14px',
          }
    },
    footer: {
        gridArea: 'footer',
        fontSize: '20px',
        justifySelf: 'end',
        display: 'inline',
        [`@media (max-height: 813px)`]: {
            fontSize: '12px',
            justifySelf: 'center',
          }
    },
    form: {
      display:'inline',

    },
    buttons: {
      background: 'rgb(2,0,36)',
      background: 'linear-gradient(90deg, rgba(50,3,3,1) 0%, rgba(121,9,9,1) 47%, rgba(205,54,54,1) 100%)',
      color: 'white',
      fontSize: '14px',
      padding: '10px',
      fontWeight: 'bold',
      marginLeft: '5px',
      "&:hover": {
        background: 'black',
        textDecoration: 'none',
        cursor: 'pointer'
      },
      [`@media (max-height: 813px)`]: {
        fontSize: '12px',
        padding: '8px',
        justifySelf: 'center',
        marginTop:'10px'
      },
      
    },
    iframeclass: {
      display: 'none',
     
    }
    }),
  }))();
  