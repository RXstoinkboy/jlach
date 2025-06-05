import { Facebook, Mail, Phone } from "lucide-react";

export const ContactBar = () => {
  return (
    <section className="flex-1 flex items-center">
      <ul className="flex flex-col gap-4 pl-8">
        <li className="flex gap-2">
          <span className="flex items-center gap-2 font-bold">
            <Mail />
            Email:
          </span>
          <a
            className="flex items-center gap-2"
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </a>
        </li>
        <li className="flex gap-2">
          <span className="flex items-center gap-2 font-bold">
            <Phone />
            Telefon:
          </span>
          <a
            className="flex items-center gap-2"
            type="tel"
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_FULL}`}
          >
            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-2 font-bold"
            href={process.env.NEXT_PUBLIC_FACEBOOK}
          >
            <Facebook />
            Facebook
          </a>
        </li>
      </ul>
    </section>
  );
};
