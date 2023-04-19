// Object cloning

    // By Iteration
    /*
        let source = {
            name:"Vinayak Vispute",
            age : 19,
            girlfriend : undefined
        }

        let destination = {}

        for( let keys in source){
            destination[keys] = source[keys]
        } 
        console.log(destination);
        source["age"]=22;
        source["girlfriend"]="Still Not";
        console.log(source);
        console.log(destination);
        */
    
        
    // By Assign Opeator
        
        let source = {
            name:"Vinayak Vispute",
            age : 19,
            girlfriend : undefined
        }

        let destination = {};
        Object.assign(destination,source);
        console.log(destination)
        console.log("After Changing:\n");
        source.age = 22;
        source.girlfriend="Not Yet LOL";
        console.log(source);
        console.log(destination);
    

    // By Spread Operator
    /*
    let source = {
        name:"Vinayak Vispute",
        age : 19,
        girlfriend : undefined
    }

    let destination = {... source};
    console.log(destination)
    console.log("After Changing:\n");
    source.age = 22;
    source.girlfriend="Not Yet LOL and Never will";
    console.log(source);
    console.log(destination)
    */