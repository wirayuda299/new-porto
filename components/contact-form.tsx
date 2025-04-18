'use client'


import { toast } from 'sonner';
import Form from 'next/form'

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FORM_FIELDS } from '@/constants/index';
import { sendMessage } from '@/actions';
import SubmitButton from './submit-btn';

export default function ContactForm() {

  async function onSubmit(formData: FormData) {
    try {
      await sendMessage(formData)
      toast.success("Your message has been sent")
    } catch (error) {
      toast.error((error as Error).message ?? "Something went wrong")
    }
  }
  return (
    <Form
      action={onSubmit}
      className='flex max-w-2xl animate-fade-left flex-col space-y-8 opacity-0'
    >
      {FORM_FIELDS.map((form_field) => (
        <div
          key={form_field.label}>
          <label className='flex flex-wrap gap-x-2 text-base text-white'>
            {form_field.title}
            <span className='text-xs font-light text-white-800 md:text-sm'>
              {form_field.subTitle}
            </span>
          </label>
          {form_field.label === 'messageText' ? (
            <Textarea
              minLength={1}
              maxLength={500}
              name='messageText'
              className='h-16 focus:ring-1!  border-none! bg-black-300! text-white focus:ring-primary-dark! focus-visible:border-0! focus-visible:ring-offset-0! resize-none'

            />
          ) : (
            <Input
              minLength={1}
              maxLength={200}
              name={form_field.label}
              autoComplete='off'
              className='h-12  focus:ring-1!  border-none! bg-black-300! text-white focus:ring-primary-dark! focus-visible:border-0! focus-visible:ring-offset-0!'
            />
          )}
        </div>
      ))}
      <SubmitButton />
    </Form>
  );
}
