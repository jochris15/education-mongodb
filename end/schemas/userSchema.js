import User from '../models/User.js'

// Schema, berisi deskripsi data yang kita punya
const userTypeDefs = `#graphql
  # "Type"
  type User {
    _id : String
    name : String
    age : Int
    email : String
  }


  # "Query" 
  type Query {
    users: [User]
    user(userId : ID) : User
  }

  # "Input type"  
  input UserInput {
    name : String
    age : Int
    email : String
  }

  # "Mutation" 
  type Mutation {
    addUser(payload : UserInput): String
  }
`;


// Resolver seperti controller (REST API), berisi semua logic yang berhubungan untuk mendapatkan datanya
const userResolvers = {
  Query: {
    users: async () => {
      try {
        const users = await User.findAll()
        return users
      } catch (error) {
        throw error
      }

    },
    user: async (parent, args, contextValue, info) => {
      try {
        const { userId } = args
        const user = await User.findOne(userId)

        return user
      } catch (error) {
        throw error
      }
    }
  },
  Mutation: {
    addUser: async (parent, args, contextValue, info) => {
      try {
        const { payload } = args

        const message = await User.create(payload)

        return message
      } catch (error) {
        throw error
      }
    }
  }
};

export { userTypeDefs, userResolvers }