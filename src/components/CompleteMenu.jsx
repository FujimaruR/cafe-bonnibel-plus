import menu from '../data/menu.json';
import { useState } from 'react';

const tabs = [
  { key: 'calientes', label: 'Bebidas calientes' },
  { key: 'frias', label: 'Bebidas frías' },
  { key: 'pan', label: 'Panadería' },
];

export default function MenuPage() {
  const [active, setActive] = useState('calientes');

  const sectionsMap = {
    calientes: menu.sections[0],
    frias: menu.sections[1],
    pan: menu.sections[2],
  };

  const section = sectionsMap[active];

  return (
    <section className="pt-28 md:pt-36 bg-beige/30 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="font-serif text-4xl text-cafe mb-6">Menú</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`px-4 py-2 rounded-xl border ${active===t.key ? 'bg-cafe text-crema border-cafe' : 'border-beige/70 text-cafe/80 hover:text-cafe'}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {section.items.map((it) => (
            <article key={it.name} className="bg-crema rounded-2xl p-4 border border-beige/70 shadow-sm">
              <div className="aspect-[4/3] rounded-xl bg-[url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mb-3" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-cafe font-semibold">{it.name}</h3>
                  <p className="text-sm text-cafe/70">{it.desc}</p>
                </div>
                <span className="text-cafe/90 font-bold">${it.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
