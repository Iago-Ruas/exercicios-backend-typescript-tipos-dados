const soletrando = (palavra: string) => {
    const res: string[] = [];

    for (const letra of [...palavra]) {
        res.push(letra);
        res.push("-");
    }

    if (res.pop() === "-") {
        return res.splice(0, res.length).join("");
    }

    return res.join("");
};

console.log(soletrando("ola"));
