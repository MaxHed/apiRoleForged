module.exports = function () {
    const getResultDice = async (req, res, next) => {
        try {

            const dice = req.params.dice;
            // example : dice = 2d6+3 => 2d6 = 2 dice with 6 faces + 3
            // regex to check if dice is valid
            let regex = /[0-9]+d[0-9]+/i;
            let regexBonus = /[0-9]+d[0-9]+\+[0-9]+/i;
            let regexValid = regex.test(dice) || regexBonus.test(dice);

            if (regexValid) {
                let nbDice = dice.split("d")[0];
                let diceFaces = dice.split("d")[1];
                let bonus = dice.split("+")[1];
                let result = 0;
                for (let i = 0; i < nbDice; i++) {
                    result += Math.floor(Math.random() * diceFaces) + 1;
                }
                bonus = bonus ? parseInt(bonus) : 0;
                result = result + bonus;
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

