(() => ({
    name: 'Navigation Bar',
    icon: 'NavbarIcon',
    category: 'NAVIGATION',
    structure: [
      {
        name: 'Navbar',
        options: [
          {
            type: "ENDPOINT",
            value: '',
            key: "HomeEndpoint",
            label: "Home Link"

          },
          {
            type: "ENDPOINT",
            value: '',
            key: "MoviesEndpoint",
            label: "Movies Link"

          },
          {
            type: "ENDPOINT",
            value: '',
            key: "CreateEndpoint",
            label: "Create Movies Link"

          }

          


        ],
        descendants: [],
      },
    ],
  }))();