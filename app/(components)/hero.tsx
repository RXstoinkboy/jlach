export const Hero = () => {
  return (
    <section className="flex h-[80vh] w-full justify-center items-center">
      <article className="flex w-full flex-col gap-4 max-w-6xl justify-start">
        <h1 className="text-7xl font-black">
          {process.env.NEXT_PUBLIC_FULL_NAME}
        </h1>
        <h2 className="text-2xl font-semibold">Twój agent ubezpieczeniowy</h2>
      </article>
    </section>
  );
};
