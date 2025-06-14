import { Facebook, Mail, Phone } from "lucide-react";

export const ContactBar = () => {
  return (
    <section className="flex-1 flex sm:py-4">
      <ul className="flex flex-col gap-4">
        <li className="flex gap-2 flex-col pb-4">
          <p className="font-bold">{process.env.NEXT_PUBLIC_FULL_NAME}</p>
          <p>{process.env.NEXT_PUBLIC_ADDRESS_LINE_1}</p>
          <p>{process.env.NEXT_PUBLIC_ADDRESS_LINE_2}</p>
        </li>
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
