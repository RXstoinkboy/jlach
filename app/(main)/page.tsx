import { Hero } from "../(hero)/hero";
import { InfoSection } from "../(components)/info-section";
import { Building2, Car, Check, HeartPulse, House, Plane } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="flex flex-col gap-4 sm:gap-8 w-full max-w-7xl p-2 sm:p-0 mt-8">
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
            <ol className="flex flex-col gap-3 pt-5 pl-3">
              <li className="flex gap-2 font-semibold text-lg">
                <Check className="text-primary w-7 h-7" />
                Doradztwo bez zobowiązań
              </li>
              <li className="flex gap-2 font-semibold text-lg">
                <Check className="text-primary w-7 h-7" />
                Współpraca z wieloma towarzystwami
              </li>
              <li className="flex gap-2 font-semibold text-lg">
                <Check className="text-primary w-7 h-7" />
                Jasne warunki, prosty język
              </li>
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
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
              <li className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex gap-3 items-center">
                      <HeartPulse className="w-7 h-7" /> Życie i zdrowie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Ochrona Twoich bliskich na wypadek nieprzewidzianych
                    zdarzeń.
                  </CardContent>
                </Card>
              </li>

              <li className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex gap-3 items-center">
                      <House className="w-7 h-7" /> Dom i mieszkanie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Zabezpiecz swój majątek przed ogniem, zalaniem, kradzieżą.
                  </CardContent>
                </Card>
              </li>

              <li className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex gap-3 items-center">
                      <Plane className="w-7 h-7" /> Podróż
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Spokojna głowa na urlopie – na całym świecie.
                  </CardContent>
                </Card>
              </li>

              <li className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex gap-3 items-center">
                      <Car className="w-7 h-7" /> OC/AC komunikacyjne
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Najlepsze warunki bez ukrytych kosztów.
                  </CardContent>
                </Card>
              </li>

              <li className="h-full">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex gap-3 items-center">
                      <Building2 className="w-7 h-7" /> Firmowe (opcjonalnie)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    Ubezpieczenia grupowe, OC zawodowe, sprzęt.
                  </CardContent>
                </Card>
              </li>
            </ol>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
        <InfoSection id="cooperation">
          <InfoSection.Title>Jak wygląda współpraca</InfoSection.Title>
          <InfoSection.Subtitle>Prosty proces</InfoSection.Subtitle>
          <InfoSection.Content>
            <ol className="flex flex-col gap-3 pt-5 pl-10">
              <li className="list-decimal font-semibold marker:text-4xl text-primary">
                <h4 className="text-foreground text-lg">
                  Konsultacja i analiza potrzeb
                </h4>
                <p className="text-foreground font-normal mt-2">
                  Rozmawiamy – Ty mówisz, ja słucham. Poznaję Twoją sytuację.
                </p>
              </li>
              <li className="list-decimal font-semibold marker:text-4xl text-primary">
                <h4 className="text-foreground text-lg">
                  Dobór i prezentacja ofert
                </h4>
                <p className="text-foreground font-normal mt-2">
                  Przygotowuję kilka opcji – Ty decydujesz, co najlepsze.
                </p>
              </li>
              <li className="list-decimal font-semibold marker:text-4xl text-primary">
                <h4 className="text-foreground text-lg">
                  Finalizacja i wsparcie
                </h4>
                <p className="text-foreground font-normal mt-2">
                  Pomagam w formalnościach, a później jestem do dyspozycji.
                </p>
              </li>
            </ol>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto" />
        <InfoSection id="about">
          <InfoSection.Title>O mnie</InfoSection.Title>
          <InfoSection.Subtitle>
            Cześć, jestem Jerzy – agent, który naprawdę słucha.
          </InfoSection.Subtitle>
          <InfoSection.Content>
            <p>
              Od ponad 20 lat pomagam ludziom i rodzinom czuć się bezpieczniej.
              Działam uczciwie, tłumaczę w prostych słowach i doradzam, jakbym
              ubezpieczał swoich bliskich.
            </p>
          </InfoSection.Content>
        </InfoSection>
        <Separator className="max-w-10/12 mx-auto mb-8" />
      </section>
    </>
  );
}
