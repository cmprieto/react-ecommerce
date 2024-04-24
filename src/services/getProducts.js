import products from "../assets/data.json";

const getProducts = () => {
    const task = new Promise((resolve) => {
        // tarea
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });

    task.then((result) => {
        console.log(result);
    });
    return task;
};

export default getProducts;



/* import data from './data';


const getproducts = () => {
    const task = fetch(data);
    task.then(result => result.json);
    task.then(result => { console.log(result); })
    return task;
}

export default getproducts;
 */