import axios from "axios";
const crudder:any = (domain:string) => (resources:string) => {
    const url = `${domain}/${resources}`;

    return ({
        get: axios.get(url).then(response => response.data.results)
    })
}

export default crudder