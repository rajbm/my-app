// export const ADD_USER = "ADD_USER";

export function addNum(){
    console.log("ddddddddddddddddddddd");
    const action ={
        type: "ADD_NUM",
        payload: 7
    }
    return action;
}

export function subNum(){
    const action ={
        type: "SUB_NUM",
        payload: 7
    }
    return action;
}