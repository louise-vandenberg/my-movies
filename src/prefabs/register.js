(() => ({
    name: 'Register',
    icon: 'PasswordInputIcon',
    category: 'AUTH',
    structure: [
      {
        name: 'Register',
        options: [
            {
                type: "MODEL",
                value: "",
                key: "modelId",
                label: "Model"
    
              },
              {
                type: "PROPERTIES",
                value: [],
                key: "properties",
                label: "Properties"
    
              },
        ],
        descendants: [],
      },
    ],
  }))();