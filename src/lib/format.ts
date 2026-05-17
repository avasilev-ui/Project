const kcalFormatter = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 0,
})

const kgFormatter = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 1,
})

export function formatKcal(value: number): string {
  return `${kcalFormatter.format(Math.round(value))} ккал`
}

export function formatKg(value: number): string {
  return `${kgFormatter.format(value)} кг`
}
