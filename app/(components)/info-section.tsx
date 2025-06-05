import { Button } from "@/components/ui/button";
import type { FC, ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { Card, CardContent } from "@/components/ui/card";

type InfoSectionContentProps = {
  onClick?: () => void;
  title: string;
  children: ReactNode;
};

const InfoSectionContent: FC<InfoSectionContentProps> = ({
  children,
  onClick,
  title,
}) => {
  return (
    <article className="flex flex-col gap-4 p-6">
      <h2 className="text-3xl font-bold text-center">{title}</h2>
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

type InfoSectionProps = {
  children: ReactNode;
  id?: string;
};

export type InfoSectionComponent = FC<InfoSectionProps> & {
  Image: FC<InfoSectionImageProps>;
  Content: FC<InfoSectionContentProps>;
};

export const InfoSection: InfoSectionComponent = ({ children, id }) => {
  return (
    <Card className="p-0 overflow-hidden">
      <CardContent className="flex flex-col sm:flex-row p-0" id={id}>
        {children}
      </CardContent>
    </Card>
  );
};

InfoSection.Image = InfoSectionImage;
InfoSection.Content = InfoSectionContent;
