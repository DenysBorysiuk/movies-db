import { client } from '@/lib/requestClient';
import { GetPostsEdgesDocument } from '@/generates/gql/graphql';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const getPosts = async () => {
  const { posts } = await client.request(GetPostsEdgesDocument);
  return posts?.edges;
};

const PostsList = async () => {
  const edges = await getPosts();
  return (
    <div className="flex">
      {edges?.map(edge => (
        <div key={edge?.node?.id}>
          <Card>
            <CardHeader>
              <CardTitle>{edge?.node?.title}</CardTitle>
              <CardDescription>By {edge?.node?.author?.node.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
