const convertToKiloFormat = (value) => {
  if (value > 999) {
    const convertedValue = value / 1000
    return `${convertedValue.toFixed(1)}k`
  }
  return value
}

export { convertToKiloFormat }