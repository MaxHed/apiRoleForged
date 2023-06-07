module.exports = function () {
    const getResultDice = async (req, res, next) => {
        try {
            const dice = req.params.dice;
            let regex = /[0-9]+d[0-9]+/i;
            let regexBonus = /[0-9]+d[0-9]+\+[0-9]+/i;
            let regexValid = regex.test(dice) || regexBonus.test(dice);
            if (regexValid) {
                // check nb dice, type dice, bonus and init result
                let nbDice = dice.split("d")[0];
                let typeDice = dice.split("d")[1];
                let typeDiceRegex = /[0-9]+\+[0-9]+/i;
                if (typeDiceRegex.test(typeDice)) {
                    typeDice = typeDice.split("+")[0];
                }
                let bonus = dice.split("+")[1] || 0;
                let resultDice = 0;

                // roll dice
                for (let i = 0; i < nbDice; i++) {
                    resultDice += Math.floor(Math.random() * typeDice) + 1;
                }

                // parse int bonus and result
                bonus = parseInt(bonus);
                resultDice = parseInt(resultDice);

                // add bonus
                let result = resultDice + bonus;

                res.status(200).json({
                    result
                })
               
            } else {
                res.status(400).json({
                    error: "Invalid dice"
                })

            }
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error
            })
        }

    }


  
    return {
        getResultDice
    }
}

