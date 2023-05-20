export default defineEventHandler(async (event) => {

    const items = []

    // @ts-ignore
    for (let i = 0; i < 5; i++) {
        items.push(
            {
                name: `Item ${i}`,
                price: 12.3,
                quantity: i
            }
        )
    }

    await new Promise(resolve => setTimeout(resolve, 200));

    return {
        items,
    }
})
