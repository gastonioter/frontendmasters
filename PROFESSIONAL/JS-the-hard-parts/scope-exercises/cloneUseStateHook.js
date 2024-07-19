
const React = (function React(){
    let state;

    function render(component){
        return component();
    }
    
    function useState(init){
        
        state = state ?? init
        
        function setState(newValue){
            
            if(typeof newValue == 'function'){
                state = newValue(state);
                return;
            }

            state = newValue;
        }

        return [state, setState];
    }

    return {useState, render};
}
)()


const myComponent = () => {
    
    const [num,  setNum] = React.useState(0);

    //setNum(1);
    // 0+1
    setNum((num)=>num+1) // no obtengo inmediatamente el nuevo valor de 'num'

    // 1 + 1 = 2
    setNum((num)=>num+1)

    //setNum((currentNum) => currentNum + 1);
    //setNum((currentNum) => currentNum + 1);
    // No voy a obtener el nuevo valor de num hasta el re-render;
    
    
    console.log(num);


}

React.render(myComponent);

React.render(myComponent);

React.render(myComponent);


