'use client';

export function AchievementsSection() {
  const achievements = [
    { icon: '🏆', label: 'Awards Won', value: '45+' },
    { icon: '🌟', label: 'Happy Clients', value: '500+' },
    { icon: '💼', label: 'Projects Completed', value: '1000+' },
    { icon: '📈', label: 'Years in Business', value: '12' },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Recognized for excellence in digital design and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {achievements.map((achievement) => (
            <div key={achievement.label} className="text-center">
              <div className="mb-3 text-5xl">{achievement.icon}</div>
              <div className="mb-2 text-3xl font-bold text-electric">
                {achievement.value}
              </div>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
