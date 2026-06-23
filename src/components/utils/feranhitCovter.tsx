export function feranHitCovter(value: number): string {
    const feranhit = ((value * 9) / 5 + 32).toFixed(2)
    return (`${feranhit}°F
`)
}