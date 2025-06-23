"use client";

import { redirect } from "next/navigation";
import { InfoSection } from "../_components/info-section";

export default function About() {
  return (
    <InfoSection.Body>
      <InfoSection.Content
        onClick={() => redirect("/")}
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
  );
}
