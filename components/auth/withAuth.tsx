// components/withAuth.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/signin');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
