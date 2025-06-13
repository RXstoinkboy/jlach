import { Hero } from "../(hero)/hero";
import { InfoSection } from "../(components)/info-section";
import { Building2, Car, HeartPulse, House, Plane } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-4 sm:gap-8 w-full max-w-7xl p-2 sm:p-0">
        <InfoSection id="why-me">
          <InfoSection.Title>
            Dlaczego warto ze mną współpracować
          </InfoSection.Title>
          <InfoSection.Subtitle>
            Ponad 20 lat doświadczenia, setki zadowolonych klientów
          </InfoSection.Subtitle>
          <InfoSection.Content>
            Nie jestem zwykłym agentem – słucham, doradzam, tłumaczę. Pomagam
            zrozumieć, co naprawdę się liczy w ubezpieczeniu – i jak nie
            przepłacać.
            <ol>
              <li>Doradztwo bez zobowiązań</li>
              <li>Współpraca z wieloma towarzystwami</li>
              <li>Jasne warunki, prosty język</li>
            </ol>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
        <InfoSection id="offer">
          <InfoSection.Title>Jakie ubezpieczenia oferuję</InfoSection.Title>
          <InfoSection.Subtitle>
            Ubezpieczenia dopasowane do Twoich potrzeb
          </InfoSection.Subtitle>
          <InfoSection.Content>
            <ol>
              <li>
                <h4>
                  <HeartPulse className="w-4 h-4" /> Życie i zdrowie
                </h4>
                <p>
                  Ochrona Twoich bliskich na wypadek nieprzewidzianych zdarzeń.
                </p>
              </li>

              <li>
                <h4>
                  <House className="w-4 h-4" />
                  Dom i mieszkanie
                </h4>
                <p>
                  Zabezpiecz swój majątek przed ogniem, zalaniem, kradzieżą.
                  Ochrona Twoich bliskich na wypadek nieprzewidzianych zdarzeń.
                </p>
              </li>

              <li>
                <h4>
                  <Plane className="w-4 h-4" /> Podróż
                </h4>
                <p>Spokojna głowa na urlopie – na całym świecie.</p>
              </li>

              <li>
                <h4>
                  <Car className="w-4 h-4" />
                  OC/AC komunikacyjne
                </h4>
                <p>Najlepsze warunki bez ukrytych kosztów</p>
              </li>

              <li>
                <h4>
                  <Building2 className="w-4 h-4" /> Firmowe (opcjonalnie)
                </h4>
                <p>Ubezpieczenia grupowe, OC zawodowe, sprzęt.</p>
              </li>
            </ol>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
        <InfoSection id="cooperation">
          <InfoSection.Title>Jak wygląda współpraca</InfoSection.Title>
          <InfoSection.Subtitle>Prosty proces</InfoSection.Subtitle>
          <InfoSection.Content>
            <ol>
              <li>
                <h4>Konsultacja i analiza potrzeb</h4>
                <p>
                  Rozmawiamy – Ty mówisz, ja słucham. Poznaję Twoją sytuację.
                </p>
              </li>
              <li>
                <h4>Dobór i prezentacja ofert</h4>
                <p>Przygotowuję kilka opcji – Ty decydujesz, co najlepsze.</p>
              </li>
              <li>
                <h4>Finalizacja i wsparcie</h4>
                <p>Pomagam w formalnościach, a później jestem do dyspozycji.</p>
              </li>
            </ol>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
        <InfoSection id="about">
          <InfoSection.Title>O mnie</InfoSection.Title>
          <InfoSection.Content>
            Cześć, jestem Jerzy – agent, który naprawdę słucha. Od ponad 20 lat
            pomagam ludziom i rodzinom czuć się bezpieczniej. Działam uczciwie,
            tłumaczę w prostych słowach i doradzam, jakbym ubezpieczał swoich
            bliskich.
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
      </section>
    </>
  );
}
