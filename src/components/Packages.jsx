import { packages } from "../data/packages";
import PackageCard from "./PackageCard";

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <h2 className="packages__title">Nuestros paquetes</h2>

        <div className="packages__grid">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              highlight={pkg.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
