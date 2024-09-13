
const animais = 
[ {especie: "Leão", tamanho: 3, bioma: ["savana"], carnivoro: true},
    {especie: "Leopardo", tamanho: 2, bioma: ["savana"], carnivoro: true},
    {especie: "Crocodilo", tamanho: 3, bioma: ["rio"], carnivoro: true},
    {especie: "Macaco", tamanho: 1, bioma: ["floresta","savana"], carnivoro: false},
    {especie: "Gazela", tamanho: 2, bioma: ["savana"], carnivoro: false},
    {especie: "Hipopotamo", tamanho: 4, bioma: ["rio", "savana"],carnivoro: false}
]
const recintos = 
[ {numero: "Recinto 1", bioma: ["savana"], tamanhototal: 10, animaisexistentes: 3, tipo: "Macaco"},
    {numero: "Recinto 2", bioma: ["floresta"], tamanhototal: 5, animaisexistentes: 0, tipo: ""},
    {numero: "Recinto 3", bioma: ["rio", "savana"], tamanhototal: 7, animaisexistentes: 1, tipo: "Gazela"},
    {numero: "Recinto 4", bioma: ["rio"], tamanhototal: 8, animaisexistentes: 0, tipo: ""},
    {numero: "Recinto 5", bioma: ["savana"], tamanhototal: 9, animaisexistentes: 1, tipo: "Leão"},

];

class RecintosZoo {

  analisaRecintos(animal, quantidade) {

    
    let animalarray;
    let recintoArray = [];
    let recintoEspecie = [];
    let recintoViavel = [];
    let recintosViaveis = [];
    
    

    conferirAnimal();

    function conferirAnimal()
    {
    for(var i = 0; i <= animais.length; i++)
    {
    try
    {
            if(animal == animais[i].especie)
        {
            animalarray = [i];
            break;
        }
    } 
    catch(e) 
    {  
     return console.log("Animal Inválido");
    }
    try{
        quantidade > 0;    
    }
    catch(e)
    {
        return console.log("Quantidade Inválida");  
    }
    }
    conferirBioma();
    }
    

    function conferirBioma() 
    {

    let animalarraynum = parseInt(animalarray);
    
    
    let bioma1 = [];
    let bioma2 = [];

    for(let i = 0; i < recintos.length; i++)
        {
            for(let j = 0; j < 2; j++)
            {
           if(animais[animalarraynum].bioma[0] == recintos[i].bioma[j])
           {
             bioma1 = recintos[i];
             recintoArray.push(bioma1);
           }
        }
        
    }
        for(let i = 0; i < recintos.length; i++)
            {
            for(let j = 0; j < 2; j++)
                {
           if(animais[animalarraynum].bioma[1] == recintos[i].bioma[j])
            {
              bioma2 = recintos[i]; 
              recintoArray.push(bioma2);
            }
        } 
        }
      conferirEspecie();  
    }

    

    function conferirEspecie()
    {
        let animalarraynum = parseInt(animalarray);

        
        for(var i = 0; i < recintoArray.length; i++)
            {
            if(animais[animalarraynum].carnivoro == false && recintoArray[i].tipo != "Leão" | "Leopardo" | "Crocodilo")
             {
               recintoEspecie.push(recintoArray[i]);
             }
            }
            for(let i = 0; i < recintoArray.length; i++)
            {
            if(animais[animalarraynum].carnivoro == true && recintoArray[i].tipo == "Leão" | "Leopardo" | "Crocodilo" | "");
             {
                recintoEspecie.push(recintoArray[i]);
             }
            }
            
            for(let i = 0; i < recintoArray.length; i++)
            {
            if(animal == "Macaco" && quantidade == 1 && recintoArray[i].animaisexistentes == 0)
             {
                if(recintoArray = [])
                {
                return console.log("Macacos não podem ficar sozinhos")
                }
             }
            
            }

            conferirTamanho();
        }
    

    function conferirTamanho()
    { 
        let animalarraynum = parseInt(animalarray);

       for(let i = 0; i < recintoEspecie.length; i++)
       {
        if(animais[animalarraynum].especie != recintoEspecie[i].tipo)
        {
           recintoEspecie[i].animaisexistentes += 1;  
        }
        }
        
       for(let i = 0; i < recintoEspecie.length; i++)
        {
         if(animais[animalarraynum].especie == null)
         {
            recintoEspecie[i].animaisexistentes -= 1;  
         }
         }

         for(let i = 0; i < recintoEspecie.length; i ++)
        {
            try{
                if((animais[animalarraynum].tamanho * quantidade) <= (recintoEspecie[i].tamanhototal + recintoEspecie[i].animaisexistentes))
                {
                    recintoViavel.push(recintoEspecie[i]);
                }
            }
            catch(e)
                {
                  return console.log("Não há recinto viável");
                } 
        }

        for(let i = 0; i < recintoViavel.length; i++)
            {
             recintosViaveis.push([`${recintoViavel[i].numero} (espaço livre: ${recintoViavel[i].animaisexistentes += (animais[animalarraynum].tamanho * quantidade)} espaço total: ${recintoViavel[i].tamanhototal})`]);
            } 
        
    }
    
    return recintosViaveis;
    
}

}


export { RecintosZoo as RecintosZoo };
