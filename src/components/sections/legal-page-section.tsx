'use client';

interface LegalSection {
  heading: string;
  content: string;
}

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPageSection({ title, lastUpdated, sections }: LegalPageProps) {
  return (
    <section className="min-h-screen py-20 pt-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
              <div className="space-y-3 text-muted-foreground">
                {section.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
