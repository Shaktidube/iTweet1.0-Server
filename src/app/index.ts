import express from "express"
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from '@apollo/server/express4';
// import { ExpressMiddleware } from "@apollo/server"
import { graphql } from "graphql";

export async function initServer(){
    const app = express()

    app.use(bodyParser.json())


    const graphqlServer = new ApolloServer ({
        typeDefs:`
        type Query{
            sayhello: String
            sayhellotome(name: String!): String
        }
        `,
        resolvers:{
            Query:{
                sayhello: () => 'hello from GraphQl Server',
                sayhellotome: (parent: any, {name}:{name:string}) => `Namste ${name}`
            },
            
        },
    });

    await graphqlServer.start();

    app.use("/graphql", expressMiddleware(graphqlServer))
    return app;
}