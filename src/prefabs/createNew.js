(() => ({
    name: 'CreateNew',
    icon: 'TextInputIcon',
    category: 'CONTENT',
    structure: [
      {
        name: 'CreateNew',
        options: [
          {
            type: "MODEL",
            value: '',
            key: "modelId",
            label: "Model"

          },
          {
            value: [],
            label: 'Properties',
            key: 'propertyId',
            type: 'PROPERTIES',
          }
        ],
        descendants: [],
      },
    ],
  }))();