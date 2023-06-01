"use client"
import dynamic from 'next/dynamic';
import '@module-federation/nextjs-mf/src/include-defaults';

const Title = () => {
  const SampleComponent = dynamic(() => import('walcomponent/title'), {
    ssr: false,
  });

  return <SampleComponent/>
}

export default Title
