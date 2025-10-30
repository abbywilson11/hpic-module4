// React component to display sickle-cell disease brochures and info links
import React from "react";

export default function ResourcesSection() {
  // Static list of your 6 brochures
  const resources = [
    {
      id: 1,
      title: "A guide for people with sickle cell disease",
      link: "/brochures/qs-sickle-cell-disease-patient-guide-en.pdf",
    },
    {
      id: 2,
      title: "Un guide pour les personnes atteintes de drepanocytose",
      link: "/brochures/qs-sickle-cell-disease-patient-guide-fr.pdf",
    },
    {
      id: 3,
      title: "Caring for people of all ages",
      link: "/brochures/qs-sickle-cell-disease-quality-standard-en.pdf",
    },
    {
      id: 4,
      title: "Soins aux personnes de tous ages",
      link: "/brochures/qs-sickle-cell-disease-quality-standard-fr.pdf",
    },
    {
      id: 5,
      title: "So my child has sickle cell disease...",
      link: "/brochures/So my child has Sickle Cell Disease - SCAGO v1-2019.pdf",
    },
    {
      id: 6,
      title: "Mon enfant est donc atteint d'anemie falciforme...",
      link: "/brochures/so-my-child-has-sickle-cell-disease-scagov3_fr.pdf",
    },
  
  ];

  // Render the list of brochures
  return (
    <section className="resources">
      <h2>Educational Resources</h2>
      <p>Explore these brochures and guides to learn more about Sickle-Cell Disease:</p>

      <div className="resources-list">
        {resources.map((item) => (
          <div key={item.id} className="resource-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              📄 Voir la Brochure / View Brochure
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}