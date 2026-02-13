
// Neste código busco desenvolver um "sensor"
//  que analise sensações fisicas e traduza em sentimentos
// o intuito é auxiliar individuos com alexitima 
// (A alexitimia é um condição neurodivergente onde o individuo possui dificuldade em compreender e detectar as proprias emoções)
// o intuito é ajudar a compreender, identificar , gerir e reagir melhor as proprias emoções



function tradutorDeSentimentos(sinalFisico, intensidade) {
   

    switch (sinalFisico) {
        case "nó na garganta":
            if (intensidade >= 7) {
                return {
                    emocao: "Tristeza Profunda ou Vontade de chorar",
                    instrucao: "O sistema precisa de liberação de pressão. Procure um lugar seguro para chorar."
                };
            } else {
                return {
                    emocao: "Angústia leve ou peso por algo que foi ou não dito",
                    instrucao: "Tente escrever o que aconteceu no dia de hoje, tente identificar algum possivel gatilho."
                };
            }

        case "peito apertado":
             if (intensidade >= 7) {
                return {
                    emocao: "Desespero / Pãnico",
                    instrucao: "O sistema tem que voltar ao funcionamento básico urgentemente. Procure um lugar seguro. Converse com alguém."
                };
            } else {
            return {
                emocao: "Ansiedade ou Sobrecarga",
                instrucao: "Reduza os estímulos sensoriais. Busque silêncio e o escuro. \n Ative o modo de respiração profunda e retorne ao momento presente."
            };
        }

        case "mãos agitadas":
            if (intensidade >= 5) {
                return {
                    emocao: "Agitação Sensorial ou Estresse",
                    instrucao: "Use um objeto de regulação (fidget toy) ou faça alguma atividade que estimule suas mãos."
                };
            } else {
                return {
                    emocao: "Empolgação / Alegria (Stimming)",
                    instrucao: "O seu sistema está em um pico de energia positiva. Aproveite esse momento! ISSO É BOM!"
                };
            }

          
        default:
            return {
                emocao: "uma Emoção não reconhecida",
                instrucao: "Beba água, busque silêncio e faça um scan corporal da cabeça aos pés. \n VAMOS ENTENDER ISSO! CALMA!"
            };
    }
}


// Testando o sensor ======================================================================================================================================================================



const meuSentimento = tradutorDeSentimentos("mãos agitadas", 5);

 console.log ( ` 
    === ANALISANDO SINAIS CORPORAIS ===
    
    EMOÇÃO: Neste momento você está sentindo ${meuSentimento.emocao}
    Lembre-se que esse sentimento também irá passar, assim como todos os outros.

    O QUE FAZER?: ${meuSentimento.instrucao}

    ` ) 
