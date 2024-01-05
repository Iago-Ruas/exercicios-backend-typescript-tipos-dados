const tabuada = (array: number[]): string[] => {
    const res: string[] = [];
    for (const numero of array) {
        for (let i: number = 0; i <= 10; i++) {
            const resultado: number = i * numero;
            res.push(`${numero} * ${i} = ${resultado}`);
            if (resultado === numero * 10) res.push("----------------------");
        }
    }
    return res;
};

console.log(tabuada([52, 12, 3]));
