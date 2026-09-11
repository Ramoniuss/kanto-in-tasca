import { createFileRoute, Link } from "@tanstack/react-router";
import { LocationView } from "@/components/location-view";
import { LOCATION_BY_ID } from "@/data/guide";

export const Route = createFileRoute("/luogo/$id")({
  component: LuogoPage,
});

function LuogoPage() {
  const { id } = Route.useParams();
  const loc = LOCATION_BY_ID[id];
  if (!loc) {
    return (
      <div className="py-16 text-center">
        <p className="font-display text-2xl">Luogo non trovato</p>
        <Link to="/" className="mt-3 inline-block text-sm font-medium text-forest">
          Torna al percorso
        </Link>
      </div>
    );
  }
  return <LocationView loc={loc} />;
}
