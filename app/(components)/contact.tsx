import { Facebook, Mail, Phone } from "lucide-react";

export const ContactBar = () => {
  return (
    <section id="contact">
      <ul className="flex gap-2">
        <li>
          <a
            className="flex items-center gap-2"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          >
            <Mail />
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2"
            type="tel"
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_FULL}`}
          >
            <Phone />

            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </a>
        </li>
        <li>
          <a href={process.env.NEXT_PUBLIC_FACEBOOK}>
            <Facebook />
          </a>
        </li>
      </ul>
    </section>
  );
};
