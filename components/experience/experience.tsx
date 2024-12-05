import Background from './background';

export default function Experience() {
  return (
    <section className=' mt-20 size-full !overflow-hidden  bg-black-200'>
      <div className='mx-auto flex w-full max-w-1400 flex-col items-start justify-center gap-6 p-5 bg-black-200 lg:flex-row lg:p-14'>

        <div className='justify-center-center flex aspect-square max-h-500 w-full flex-col rounded-lg p-11 text-white bg-black sm1:p-24 md:h-full md:p-16 lg:p-24'>
          <h2 className='relative z-[1] w-max  text-4xl font-bold sm:text-5xl'>
            Work{' '}
            <span className='block before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-4 before:!w-1/2 before:bg-secondary'>
              Experience
            </span>
          </h2>
          <p className='pt-6 text-sm font-normal sm:text-base'>
            Progress and milestones: A simple walkthrough of roles, projects, and
            achievements in my career.
          </p>
          <div className='flex items-center pt-10'>
            <div className='h-0.5 w-full  bg-white' />
            <div className='rounded-full ring-1 ring-white dark:ring-black'>
              <div className='m-2 size-8 rounded-full  bg-white dark:bg-black'></div>
            </div>
          </div>
        </div>
        <div className='flex w-full flex-col justify-between gap-8 '>
          <Background />
        </div>
      </div>
    </section>
  );
}
