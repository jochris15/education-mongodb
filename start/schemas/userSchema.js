// Schema, berisi deskripsi data yang kita punya
const userTypeDefs = `#graphql
  # "Type"

  # "Query" 

  # "Input type"  


  # "Mutation" 

`;


// Resolver seperti controller (REST API), berisi semua logic yang berhubungan untuk mendapatkan datanya
const userResolvers = {
    Query: {
    },
    Mutation: {
    }
};

export { userTypeDefs, userResolvers }