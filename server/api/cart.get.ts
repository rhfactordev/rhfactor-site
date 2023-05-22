export default defineEventHandler(async (event) => {

    const items = []
    const total = 400;

    // @ts-ignore
    for (let i = 0; i < 5; i++) {
        items.push(
            {
                name: `Item ${i} - Mapa astral digital muitos caracteres`,
                price: 12.3,
                quantity: i,
                total: 43.2,
                image: `https://picsum.photos/id/${i*10}/674/338`,
                target: `/loja/departamento-${i*10}/${i}/nome-do-produto`
            }
        )
    }

    // await new Promise(resolve => setTimeout(resolve, 500));

    return {
        items,
        total
    }
})
