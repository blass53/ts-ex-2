export function transform(old: { [key: string]: string[] }) {
    const act: {[key: string]: number } = {}
    for(const point in old) {
        for(const i in old[point]) {
            const c = old[point][i].toLowerCase()
            act[c] = Number(point)
        }
    }
    return act
}