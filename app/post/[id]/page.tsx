import { GetPostDocument } from '@/generates/gql/graphql';
import { client } from '@/lib/requestClient';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

const getPost = async (id: string) => {
  const { post } = await client.request(GetPostDocument, { id });
  return post;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  const post = await getPost(id);

  return {
    title: post?.title,
  };
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const post = await getPost(id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post?.title}</CardTitle>
        <CardDescription>
          By {post?.author?.node.name}{' '}
          {post?.date ? new Date(post?.date).toLocaleDateString('uk-UA') : 'Unknown date'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative h-96">
          {post?.featuredImage?.node.sourceUrl && (
            <Image
              src={post?.featuredImage?.node.sourceUrl}
              alt={post?.featuredImage?.node.altText || 'Image description'}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post?.content ? post.content : '' }}
          className="mt-6"
        ></div>
      </CardContent>
    </Card>
  );
};

export default Page;
