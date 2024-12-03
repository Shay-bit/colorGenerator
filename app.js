console.log("Welcome to Shay's Random Color Generator")

const colorOne = document.querySelector('.colorOne')
const colorTwo = document.querySelector('.colorTwo')
const colorThree = document.querySelector('.colorThree')
const colorFour = document.querySelector('.colorFour')

var red;
var green;
var blue;


// String used for concat:
// ----- <>
// var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
// ----- <> ----- <>

// Reminder to set backgroundColor in JS:
// ----- <>
// colorOne.style.backgroundColor = colorString
// ----- <> ----- <>

// How to create randon numer between 0 and 255
// ----- <>
// const randomNumber = Math.floor(Math.random() * 256)
// ----- <> ----- <>


// Generate Random Number for Red, Green, Blue:
// ----- <>
function generateRed() {
    red = Math.floor(Math.random() * 256)
    console.log(red)
    return red
}

function generateGreen() {
    green = Math.floor(Math.random() * 256)
    console.log(green)
    return green
}

function generateBlue() {
    blue = Math.floor(Math.random() * 256)
    console.log(blue)
    return blue
}

// ----- <> ----- <>

// Creates a Random Color for Red, Green, Blue
// For colorOne, colorTwo, colorThree, colorFour:
// ----- <>
function generateColorOne() {
    generateRed();
    generateGreen();
    generateBlue();
    var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorOne.style.backgroundColor = colorString
}

function generateColorTwo() {
    generateRed();
    generateGreen();
    generateBlue();
    var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorTwo.style.backgroundColor = colorString    
}

function generateColorThree() {
    generateRed();
    generateGreen();
    generateBlue();
    var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorThree.style.backgroundColor = colorString    
}

function generateColorFour() {
    generateRed();
    generateGreen();
    generateBlue();
    var colorString = 'rgb(' + red + ',' + green + ',' + blue + ')';
    colorFour.style.backgroundColor = colorString    
}

// ----- <> ----- <>

function setAllColors(){
    generateColorOne();
    generateColorTwo();
    generateColorThree();
    generateColorFour();
}

document.addEventListener('click', setAllColors)




// ---------- //
// Graveyard of Code //
// -------- //

// Working on concatanation for the rgbColor:
// ----- <>
// This didnt work because the semiColon was a quote at the end. 

// var testColor = "'rgb("+ red +", " + green + ", " + blue + ")';"
// console.log(testColor)

// var arrayColor = [red, green, blue]
// var arrayColorJoin = "'rgb(" + arrayColor.join() + ")';"
// console.log(arrayColorJoin)

// ----- <> ----- <>
