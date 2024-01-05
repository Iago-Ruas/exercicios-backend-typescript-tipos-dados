type Usuario = {
    nome: string;
    idade: number;
    status: boolean;
};

const usuarios: Usuario[] = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
];

const filtrarUsuarioPorNome = (nome: string, array: Usuario[]): Usuario[] => {
    const res: Usuario[] = [];

    for (const usuario of array) {
        if (usuario.nome.toLowerCase().includes(nome.toLowerCase())) {
            res.push(usuario);
        }
    }

    return res;
};
