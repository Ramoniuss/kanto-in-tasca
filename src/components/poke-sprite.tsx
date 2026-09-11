import { spriteUrl } from "@/data/pokemon";

export function PokeSprite({ name, size = 40 }: { name: string; size?: number }) {
  const src = spriteUrl(name);
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm bg-forest-soft"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt=""
          width={size}
          height={size}
          className="pixelated size-full object-contain"
          style={{ imageRendering: "pixelated" }}
        />
      ) : (
        <span className="text-[10px] font-medium text-forest">{name.slice(0, 2)}</span>
      )}
    </span>
  );
}
