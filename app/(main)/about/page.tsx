"use client";

import { InfoSection } from "@/app/_components/info-section";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <InfoSection id="about" className="pt-24">
      <InfoSection.Title>O mnie</InfoSection.Title>
      <InfoSection.Subtitle>
        Cześć, jestem Jerzy – agent, który naprawdę słucha.
      </InfoSection.Subtitle>
      <InfoSection.Body>
        <InfoSection.Content
          onClick={() => router.back()}
          actionButtonText="Powrót do strony głównej"
        >
          <div className="flex flex-col gap-4">
            <p>
              Od ponad 20 lat pomagam ludziom i rodzinom czuć się bezpieczniej.
              Działam uczciwie, tłumaczę w prostych słowach i doradzam, jakbym
              ubezpieczał swoich bliskich.
            </p>
            <p>
              Od ponad 20 lat pomagam ludziom i rodzinom czuć się bezpieczniej.
              Działam uczciwie, tłumaczę w prostych słowach i doradzam, jakbym
              ubezpieczał swoich bliskich.
            </p>
            <p>
              Od ponad 20 lat pomagam ludziom i rodzinom czuć się bezpieczniej.
              Działam uczciwie, tłumaczę w prostych słowach i doradzam, jakbym
              ubezpieczał swoich bliskich.
            </p>
            <p>
              Od ponad 20 lat pomagam ludziom i rodzinom czuć się bezpieczniej.
              Działam uczciwie, tłumaczę w prostych słowach i doradzam, jakbym
              ubezpieczał swoich bliskich.
            </p>
          </div>
        </InfoSection.Content>
      </InfoSection.Body>
    </InfoSection>
  );
}
