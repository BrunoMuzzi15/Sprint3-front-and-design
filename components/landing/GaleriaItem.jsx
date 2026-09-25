export default function GaleriaItem({ src, alt, legenda }) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        className="w-full h-90 object-cover rounded-xl bg-slate-800"
      />
      <figcaption className="mt-3 text-slate-300">{legenda}</figcaption>
    </figure>
  )
}
