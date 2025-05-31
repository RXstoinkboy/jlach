export const Copyright = () => {
  return (
    <section className="flex justify-between items-center w-full">
      <p>Copyright {new Date().getFullYear()}</p>
      <p>
        <a href={process.env.NEXT_PUBLIC_BUILT_BY_URL} target="_blank">
          Built by Eryk Ludwin
        </a>
      </p>
    </section>
  );
};
