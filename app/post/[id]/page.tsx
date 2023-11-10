import { GetPostDocument } from '@/generates/gql/graphql';
import { client } from '@/lib/requestClient';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const getPost = async (id: string) => {
  const { post } = await client.request(GetPostDocument, { id });
  return post;
};

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPost(id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
        <CardDescription>By {post.author?.node.name}</CardDescription>
      </CardHeader>
      <CardContent className="relative h-96">
        {edge.node.featuredImage?.node.sourceUrl && (
          <Image
            src={post.featuredImage?.node.sourceUrl}
            alt={post.featuredImage?.node.altText || 'Image description'}
            fill
          />
        )}
      </CardContent>
      <CardFooter className="mt-6">
        {edge.node.date ? new Date(edge.node.date).toLocaleDateString('uk-UA') : 'Unknown date'}
      </CardFooter>
    </Card>
  );
};

export default Page;
