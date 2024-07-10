const argvs = process.argv
// importing crypto module
let crypto = require('crypto')
const { buffer } = require('stream/consumers')
// getting command line arguments and operation
const argv = argvs.slice(2)
// console.log(argv, 'two data sliced after that this data')
const operation = argv[0]

// retreving command line value
const operation1 = parseInt(argv[1])
const operation2 = parseInt(argv[2])

// function to generate random number

const generateRandomNumber = (numgerLength) => {
    if (!numgerLength) {
        console.log('provide random number length')
    } else {
        let cryptoBytes = crypto.randomBytes(numgerLength, (er, Buffer) => {
            if(er){
                console.log(er)
                return
            }
            console.log(parseInt(Buffer.toString('hex'),16))
        })

    }
}


// performing the operation given in the question
if (argv.length < 1) {
    console.log('Invalid number of arguments')
} else {
    if (operation == 'add') {
        if (argv.length < 3 || argv.length > 3) {
            console.log('Invalid number of arguments for addition')
        } else {
            console.log(operation1 + operation2, 'final output')
        }
    } else if (operation === 'sub') {
        if (argv.length < 3 || argv.length > 3) {
            console.log('Invalid number of arguments for subtraction')
        } else {
            console.log(operation1 - operation2)
        }

    } else if (operation === 'mult') {
        if (argv.length < 3 || argv.length > 3) {
            console.log('Invalid number of arguments for multiplication ')
        }
        console.log(operation1 * operation2)
    } else if (operation === 'divide') {
        if (argv.length < 3) {
            console.log("Invalid number of arguments for division")
        } else {
            console.log(operation1 / operation2)
        }
    } else if (operation === 'sin') {
        if (argv.length !== 2) {
            console.log('Invalid number of arguments for sine')
        } else {
            console.log(Math.sin(argv[1]))
        }
    } else if (operation == 'cos') {
        if (argv.length !== 2) {
            console.log('invalid number of arguments for cosine')
        } else {
            console.log(Math.cos(argv[1]))
        }
    } else if (operation == 'tan') {
        if (argv.length !== 2) {
            console.log('invalid number of arguments for tangent')
        } else {
            console.log(Math.tan(argv[1]))
        }
    } else if (operation == 'random') {
        if (argv.length !== 2) {
            console.log('invalid number of arguments for generation random number')
        } else {
            generateRandomNumber(parseInt(argv[1]))
        }
    }

}


