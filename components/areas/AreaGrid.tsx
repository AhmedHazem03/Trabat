import { areas } from "@/lib/areas";
import AreaCard from "./AreaCard";

export default function AreaGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {areas.map((area) => (
        <AreaCard key={area.slug} name={area.name} slug={area.slug} />
      ))}
    </div>
  );
}
