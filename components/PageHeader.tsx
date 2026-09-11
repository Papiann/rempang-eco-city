"use client";

export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="bg-white py-16 md:py-20 border-b border-border-color">
      <div className="container-content">
        <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-blue mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-lg text-text-secondary max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
