"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, type RefObject } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

type ContactFormProps = {
  nameInputRef: RefObject<HTMLInputElement | null>;
};

export const ContactForm = ({ nameInputRef }: ContactFormProps) => {
  const [isSending, setIsSending] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    try {
      setIsSending(true);

      await fetch("/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("Wiadomość wysłana");
    } catch (error) {
      toast.error("Nie udało się wysłać wiadomości");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex-1 flex justify-center md:justify-end">
      <Card className="min-w-full lg:min-w-md">
        <Form {...form}>
          <CardContent>
            <form className="flex flex-col gap-4 tracking-wide">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Imię i nazwisko:</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Jan Nowak"
                        ref={nameInputRef}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="jan.nowak@mymail.com" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wiadomość:</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        className="min-h-40"
                        placeholder="Witam, proszę o kontakt w celu omówienia oferty..."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              disabled={isSending}
              onClick={form.handleSubmit(onSubmit)}
            >
              Wyślij wiadomość
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
};
