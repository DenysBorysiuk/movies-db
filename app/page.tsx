import PostsList from '@/components/PostsList';

export default async function Home() {
  return (
    <main className=" container mx-auto mt-6">
      <PostsList />
    </main>
  );
}
