import { makeExecutableSchema, } from 'graphql-tools';
import { IResolvers, ITypedef } from "graphql-tools/dist/Interfaces";
import { resolvers as sourceResolvers } from "../resolvers/resolvers.index";
import { types } from "../types/types.index";

const typeDefs: ITypedef[] = types.map(type => type.schema);
const resolvers: IResolvers = sourceResolvers;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
