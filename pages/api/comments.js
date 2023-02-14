import {GraphQLClient,gql} from "graphql-request"

const graphqlAPI=process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function comments(req,res){
    console.log("req",req)
    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
          authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
      });
    /* mutation is for update and new things */
    const query =gql `
    mutation CreateComment($name:String!,$email:String!,$comment:String!,$slug:String!) {
        createComment(data:{name:$name,email:$email,comment:$comment,post:{connect:{slug:$slug}}}){id}
    }
    `
    const result=await graphQLClient.request(query,req.body)
    try {
        return res.status(200).send(result);
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
    
}