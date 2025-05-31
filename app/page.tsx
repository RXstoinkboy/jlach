import { Hero } from "./(components)/hero";
import { InfoSection } from "./(components)/info-section";
import agremeentImage from "@/public/agreement.jpg";
import familyImage from "@/public/family.jpg";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-16 w-full max-w-7xl">
        <InfoSection id="about">
          <InfoSection.Content title="O mnie">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.Lore
          </InfoSection.Content>
        </InfoSection>
        <InfoSection id="offer">
          <InfoSection.Content title="Oferta">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </InfoSection.Content>
        </InfoSection>
        <InfoSection id="insurance">
          <InfoSection.Image src={agremeentImage} alt="Umowa" />
          <InfoSection.Content title="Ubezpieczenia">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </InfoSection.Content>
        </InfoSection>
        <InfoSection id="savings">
          <InfoSection.Content title="Produkty oszczędnościowe">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos.
          </InfoSection.Content>
          <InfoSection.Image src={familyImage} alt="Szczęśliwa rodzina" />
        </InfoSection>
      </section>
    </>
  );
}
