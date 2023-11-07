import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { GetPostsEdgesQuery, RootQueryToPostConnectionEdge } from '@/generates/gql/graphql';
import Image from 'next/image';

type Props = {
  edge: NonNullable<GetPostsEdgesQuery['posts']>['edges'][number];
};

const CardItem = ({ edge }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{edge?.node?.title}</CardTitle>
        <CardDescription>By {edge?.node?.author?.node.name}</CardDescription>
      </CardHeader>
      <CardContent className="relative h-96">
        {edge.node.featuredImage?.node.sourceUrl && (
          <Image
            src={edge?.node?.featuredImage?.node.sourceUrl}
            alt={edge?.node?.featuredImage?.node.altText || 'Image description'}
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

export default CardItem;
