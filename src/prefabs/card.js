(() => ({
    name: 'Card',
    icon: 'GridIcon',
    category: 'CONTAINER',
    structure: [
      {
        name: 'Card',
        options: [{
            type: 'VARIABLE',
            label: 'Heading Variable',
            key: 'headingVariable',
            value: ["{{ Movie.title }}"],
            configuration: {
              dependsOn: 'model'
            }
          },
         
          {
            type: 'VARIABLE',
            label: 'Description Variable',
            key: 'descriptionVariable',
            value: ["{{ Movie.description }}"],
            configuration: {
              dependsOn: 'model'
            }
          },
          {
            type: 'VARIABLE',
            label: 'Genre Variable',
            key: 'genreVariable',
            value: ["{{ Movie.genre }}"],
            configuration: {
              dependsOn: 'model'
            }
          },
          {
            type: 'VARIABLE',
            label: 'Votes Variable',
            key: 'votesVariable',
            value: ["{{ Movie.votes }}"],
            configuration: {
              dependsOn: 'model'
            }
          },
          {
            type: 'VARIABLE',
            label: 'Image Variable',
            key: 'imageVariable',
            value: ["{{ Movie.image }}"],
            configuration: {
              dependsOn: 'model'
            }
          },
          {
            type: 'VARIABLE',
            label: 'Id Variable',
            key: 'idVariable',
            value: ["Movie.id"],
            configuration: {
              dependsOn: 'model'
            }
          },
          {
            type: "ENDPOINT",
            value: '',
            key: "EndpointId",
            label: "Movie details endpoint"

          },
            
        ],
        descendants: [],
      },
    ],
  }))();
  