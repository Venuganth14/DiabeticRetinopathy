import { useEffect } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent: any) => {
  const ComponentWithAuth = (props: any) => {
    const router = useRouter();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/signin');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  // Assign a displayName for better debugging
  ComponentWithAuth.displayName = `WithAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return ComponentWithAuth;
};

export default withAuth;
