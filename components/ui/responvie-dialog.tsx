import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  Drawer,
} from "./drawer";
import { useMedia } from "react-use";

export function ResponsiveDialog({
  children,
  description,
  title,
  content,
}: {
  children: ReactNode;
  description: string;
  title: string;
  content: ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMedia("(min-width: 768px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[95%] w-3xl">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {content}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer noBodyStyles open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">{content}</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
