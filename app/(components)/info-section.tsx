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
    <article className="info-section-content flex flex-col sm:py-4">
      <div className="flex gap-4">{children}</div>
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
    <div className="info-section-image h-full max-sm:-order-1 sm:max-w-2/5 rounded-2xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/40 to-background/50" />
      <Image
        className="h-full object-cover object-center"
        src={src}
        alt={alt}
      />
    </div>
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

type InfoSectionBodyProps = {
  children: ReactNode;
};

const Body: FC<InfoSectionBodyProps> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-evenly items-start">
      {children}
    </div>
  );
};

type InfoSectionProps = {
  children: ReactNode;
  id?: string;
};

export type InfoSectionComponent = FC<InfoSectionProps> & {
  Image: FC<InfoSectionImageProps>;
  Content: FC<InfoSectionContentProps>;
  Body: FC<InfoSectionBodyProps>;
  Title: FC<TitleProps>;
  Subtitle: FC<SubititleProps>;
};

export const InfoSection: InfoSectionComponent = ({ children, id }) => {
  return (
    <section className="flex flex-col gap-6 p-4" id={id}>
      {children}
    </section>
  );
};

InfoSection.Image = InfoSectionImage;
InfoSection.Title = Title;
InfoSection.Subtitle = Subtitle;
InfoSection.Content = InfoSectionContent;
InfoSection.Body = Body;
