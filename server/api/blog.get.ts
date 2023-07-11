export default defineEventHandler(async (event) => {

    // const body = await readBody(event)
    const { limit, showCategories, page, category, post } = getQuery(event)
    const config = useRuntimeConfig()

    const loadCategories = showCategories == null || showCategories
    const loadPosts = post == null

    let entry
    let pages = 0
    let posts = []
    let categories = []
    let empty = false



    if( loadCategories ){
        // @ts-ignore
        categories = await $fetch(`${config.backendServer}/client/v1/blog/categories?domain=${config.domain}`)
    }

    let uri = `${config.backendServer}/client/v1/blog/`
    // Carregar categoria
    if( category != null ){
        uri = uri + category
    }

    if( loadPosts ){
        uri = uri + `?&domain=${config.domain}&size=10`
        if( page != null ){
            uri= uri + `&page=${page < 1 ? page : page -1}`
        }
        const postsResponse = await $fetch(uri)
        posts = postsResponse.content
        pages = postsResponse.pages
        empty = postsResponse.empty
    }else{
        uri = uri + `/${post}?domain=${config.domain}`
        entry = await $fetch(uri)
    }

    return {
        posts,
        categories,
        post : entry,
        pages,
        empty
    }
})
