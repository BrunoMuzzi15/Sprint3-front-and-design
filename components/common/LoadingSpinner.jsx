export default function LoadingSpinner({ texto = 'Carregando...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 text-slate-400">
      <div className="w-10 h-10 border-4 border-slate-700 border-t-purple-500 rounded-full animate-spin" />
      <p>{texto}</p>
    </div>
  )
}
