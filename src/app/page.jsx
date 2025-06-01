export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';

import { auth } from 'auth';


import Wrapper from '@/component/Wrapper/Wrapper';

export default async function HomePage() {
  const session = await auth();
  if (!session || !session.user || session.user === 'user')
    return redirect('/singIn');

  return <Wrapper user={session.user} />;
}
