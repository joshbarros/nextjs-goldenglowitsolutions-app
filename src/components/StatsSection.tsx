const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "8-12", label: "Weeks Average Delivery" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$5M+", label: "Raised by Our Clients" },
];

export function StatsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
