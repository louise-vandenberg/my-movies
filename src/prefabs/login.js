(() => ({
    name: 'Login',
    icon: 'PasswordInputIcon',
    category: 'AUTH',
    structure: [
      {
        name: 'Login',
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