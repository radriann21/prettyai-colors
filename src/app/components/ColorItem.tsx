import { copyToClipboard } from "@/utils/copyToClipboard"

export const ColorItem = ({ color, width, height }: { color: string, width?: string, height?: string }) => {
  return (
    <div className="tooltip" data-tip="Copy">
      <div onClick={() => copyToClipboard(color, 'Color copied!')} className={`relative ${width} ${height} border-[2px] border-transparent transition-all duration-200 hover:border-slate-800 cursor-pointer`} style={{ backgroundColor: color }}>
        <span className="absolute -bottom-6 text-sm font-semibold">{color}</span>
      </div>
  </div>
  )
}