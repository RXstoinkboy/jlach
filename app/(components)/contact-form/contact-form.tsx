"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
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
import { RefObject, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex-1 flex justify-center md:justify-end">
      <Card className="min-w-full lg:min-w-md">
        <Form {...form}>
          <CardContent>
            <form
              className="flex flex-col gap-4 tracking-wide"
              onSubmit={form.handleSubmit(onSubmit)}
            >
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
                      <Input {...field} placeholder="jan.nowak@gmail.com" />
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
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
};
