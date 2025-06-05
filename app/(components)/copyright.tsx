import { Separator } from "@/components/ui/separator";

export const Copyright = () => {
  return (
    <section className="flex justify-end items-center w-full gap-3 text-neutral-400">
      <p>Copyright {new Date().getFullYear()}</p>
      <Separator orientation="vertical" />
      <p>
        <a href={process.env.NEXT_PUBLIC_BUILT_BY_URL} target="_blank">
          Built by Eryk Ludwin
        </a>
      </p>
    </section>
  );
};
