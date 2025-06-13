import { Button } from "@/components/ui/button";
import type { FC, ReactNode } from "react";
import Image, { ImageProps } from "next/image";

type InfoSectionContentProps = {
  onClick?: () => void;
  children: ReactNode;
};

const InfoSectionContent: FC<InfoSectionContentProps> = ({
  children,
  onClick,
}) => {
  return (
    <article className="flex flex-col">
      <p className="text-md">{children}</p>
      {onClick ? <Button onClick={onClick}>Read more</Button> : null}
    </article>
  );
};

type InfoSectionImageProps = {
  src: ImageProps["src"];
  alt: string;
};

const InfoSectionImage: FC<InfoSectionImageProps> = ({ src, alt }) => {
  return (
    <Image
      className="object-cover sm:max-w-1/2 max-sm:-order-1"
      src={src}
      alt={alt}
    />
  );
};

type TitleProps = {
  children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className="text-3xl font-bold text-center">{children}</h2>;
};

type SubititleProps = {
  children: ReactNode;
};

const Subtitle: FC<SubititleProps> = ({ children }) => {
  return (
    <p className="text-primary font-bold text-center flex-1">{children}</p>
  );
};

type InfoSectionProps = {
  children: ReactNode;
  id?: string;
};

export type InfoSectionComponent = FC<InfoSectionProps> & {
  Image: FC<InfoSectionImageProps>;
  Content: FC<InfoSectionContentProps>;
  Title: FC<TitleProps>;
  Subtitle: FC<SubititleProps>;
};

export const InfoSection: InfoSectionComponent = ({ children, id }) => {
  return (
    <section className="flex flex-col gap-6 px-4 py-4" id={id}>
      {children}
    </section>
  );
};

InfoSection.Image = InfoSectionImage;
InfoSection.Title = Title;
InfoSection.Subtitle = Subtitle;
InfoSection.Content = InfoSectionContent;
