import z from "zod";

const formSchema = z.object({
  name: z.string().min(3, "Please add name"),
  email: z.string().email("This is not valid email"),
  messageText: z.string().min(2, "Please add message"),
  senderContact: z.string().email().or(z.string().min(10)),
});

export type FormSchema = z.infer<typeof formSchema>;

export { formSchema };
