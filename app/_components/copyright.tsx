import { Separator } from "@/components/ui/separator";

export const Copyright = () => {
  return (
    <section className="flex justify-end items-center w-full gap-3 text-neutral-500 px-4">
      <p className="text-xs">Copyright {new Date().getFullYear()}</p>
      <Separator orientation="vertical" />
      <p className="text-xs">
        <a href={process.env.NEXT_PUBLIC_BUILT_BY_URL} target="_blank">
          Built by Eryk Ludwin
        </a>
      </p>
    </section>
  );
};
