import { SERVICES } from '@/constants/index';
import ServiceCard from './card';
import Title from '@/components/title';

export default function Services() {
  return (
    <section className='size-full min-h-500 py-20'>
      <div className='mx-auto max-w-1400'>
        <Title text='Services' />
        <div className='mt-10 flex flex-wrap justify-center gap-x-5 gap-y-14 px-5 md:px-0'>
          {SERVICES.map((service) => (
            <ServiceCard {...service} key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
