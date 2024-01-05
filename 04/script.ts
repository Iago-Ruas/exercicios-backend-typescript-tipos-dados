type Produto = {
    produto: string;
    lote: number;
    ano: number;
    qtd: number;
};

const gerarEtiqueta = (obj: Produto): string[] => {
    const res: string[] = [];

    for (let i = 1; i <= obj.qtd; i++) {
        const qtdParaRes: string = String(i).padStart(3, "0");
        res.push(`${obj.lote}-${obj.ano}-${qtdParaRes}`);
    }

    return res;
};

console.log(
    gerarEtiqueta({
        produto: "Mouse",
        lote: 244,
        ano: 2011,
        qtd: 10,
    })
);
