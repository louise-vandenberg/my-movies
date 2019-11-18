(() => ({
    name: 'Edit',
    icon: 'TextInputIcon',
    category: 'CONTENT',
    structure: [
      {
        name: 'Edit',
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