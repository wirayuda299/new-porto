"use server";

import emailjs from "@emailjs/nodejs";

import { formSchema } from "@/validation";

export async function sendMessage(formData: FormData) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID!,
      templateId = process.env.EMAILJS_TEMPLATE_ID,
      publicKey = process.env.EMAILJS_PUBLIC_KEY,
      privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      throw new Error("Missing credential");
    }

    const { data, success } = formSchema.safeParse({
      name: formData.get("name"),
      email: formData.get("email"),
      senderContact: formData.get("senderContact"),
      messageText: formData.get("senderContact"),
    });
    if (!success) {
      throw new Error("Invalid input");
    }

    const templateParams = {
      to_name: data.name,
      to_email: data.email,
      to_message: data.messageText,
      to_contact: data.senderContact,
    };
    await emailjs.send(serviceId, templateId!, templateParams, {
      publicKey,
      privateKey,
    });
  } catch (error) {
    throw error;
  }
}
