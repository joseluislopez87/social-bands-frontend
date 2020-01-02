export default {
  'en-US': {
    application: {
      loading: "Loading..."
    },
    NavBar: {
      explore: 'Explore',
      messages: 'Messages',
      friends: 'Friends',
      settings: 'Settings',
    },
    components: {
      FriendsNav: {
        friends: 'Friends',
        requests: 'Requests',
      },
    },
    containers: {
      explore: {
        title: 'Explore'
      },
      settings: {
        title: 'Settings',
        inputs: {
          username: {
            label: 'Username',
            placeholder: 'Ex. EricClapton1337',
            notice: 'Used as your loggin, between 5 and 16 characters, no special characters allowed.'
          },
          email: {
            label: 'Email',
            placeholder: 'me@email.com',
            notice: 'You\'ll have to confirm your email address again.'
          }
        }
      }
    },
  },
  'fr-FR': {
    application: {
      loading: "Chargement..."
    },
    NavBar: {
      explore: 'Découvrir',
      messages: 'Messages',
      friends: 'Amis',
      settings: 'Paramètres',
    },
    components: {
      FriendsNav: {
        friends: 'Amis',
        requests: 'Requêtes',
      },
    },
    containers: {
      explore: {
        title: 'Découvrir'
      },
      settings: {
        title: 'Settings',
        inputs: {
          username: {
            label: 'Nom d\'utilisateur',
            placeholder: 'Ex. EricClapton1337',
            notice: 'Vous permet de vous connecter, entre 5 et 16 caractères, caractères spéciaux non-autorisé.'
          },
          email: {
            label: 'Email',
            placeholder: 'moi@email.com',
            notice: 'Vous devrez de nouveau valider votre adresse mail.'
          }
        }
      }
    },
  },
}
