{
    // 
    // Nullable type. 

    // Sometime we want to use a specefic string for searching. when user doesn't give us any. we want to display all items, Like this situation we can use nullable time. 
    const search = (searchInput: string | null) => {
        const searchResult = searchInput ? "Searching..." : "No search result";
        // console.log(searchResult);
    }

    search(null);


    // Unknow: sometime we arrive in a situation where we exacly don't know the value of a parameter or an input. we don't know what people will give us. Dipending on that we want to calculate a numbers meter per second.

    const calculteMeter = (searchText: unknown) => {
        // If it's a Strinv to remove units and unnecessery unit.
        const extractNumber = (typeof searchText === 'string') ? searchText.replace(/[^\d.]/g, '').trim() : `${searchText} is not valid a search input.`

        const convertToNum = parseFloat(extractNumber);
        console.log({ convertToNum })

        const covertToMeter = (typeof convertToNum === 'number') ? (convertToNum * 1000) / 3600 : `Please eneter a valid number.`

        // console.log({ covertToMeter });

    }

    calculteMeter(null);


    // Never: When we know a function returns nothing it'll just throw an error. we can give it's return type never. We'll use never when we know the function wouldn't reach it's end point. 
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError("Hi hello");



    // 
}