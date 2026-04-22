interface BotaoAdicionarProps {
  onClick: () => void
}

export default function BotaoAdicionar({ onClick }: BotaoAdicionarProps) {
  return (
    <button
      className="w-full mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onClick}
    >
      Adicionar
    </button>
  )
}