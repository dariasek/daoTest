const data = [
    {id:0, weight:'500', price:'500', active:false},
    {id:1, weight:'100', price:'150', active:true},
    {id:2, weight:'50', price:'90', active:false},
];

export default data;

export const changeActive = (id) => {
    for (let key of data){
        if (key.id == id){
            key.active = true;
        } else{
            key.active = false;
        }
    }
    console.log(data)

}

export const findActive = () => {
    for (let key of data){
        if (key.active){
           return key;
        }
    }
}

export const findActivePrice = () => {
    for (let key of data){
        if (key.active){
           return key.weight;
        }
    }
}

export const findActiveWeight = () => {
    for (let key of data){
        if (key.active){
           return key.price;
        }
    }
}