{
    // 
    // Acyncrounous TypeScript.

    // Promise.

    const createPromise = () : Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "something";
            if (data) {
                resolve(data)
            }
            else {
                reject("Failed to load data");
            }
        })
    }

    // Calling createPromise function.

    const showData = async () : Promise<string> => {
        const data : string = await createPromise();
        return data;
        // console.log(data);
    }

    // showData();

    type FetchData = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }


    // Fetching data from API.
    const fetchData = async (): Promise<FetchData> =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json();
        return data;
        // console.log(data);
    }

    fetchData();


    // 


}