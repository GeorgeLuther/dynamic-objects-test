//This idea might be dumb and redundant but I can't tell right now.
// You can call a function on initialization of an object instance and later get the name of the function used.
// You can call a function directly and later get the name of the function used.
// You can call a function by changing the string name of the function property and later get the name of the function used.


// Class and its functions
class MyClass {
    constructor(existingProperty, myFunc) {
        this.existingProperty = existingProperty
        this.newProperty = null
        this._myFunc = myFunc
        if (!myFunc === null) this[myFunc]()
    }
    get myFunc() {
        return this._myFunc
    }
    set myFunc(newFunc) {
        this._myFunc = newFunc
        this[newFunc]()
    }
    sum() {
        this.resultProperty = this.newProperty + this.existingProperty
        this.myFunc = 'sum'
    }
    multiply() {
        this.resultProperty = this.newProperty * this.existingProperty
        this.myFunc = 'multiply'
    }
}

// Memory
const locoParentis = {}
let nameField = ''
let propField = 0

// Name of new/accessed object instance of myClass (for example: type dogs into the brower/HTML "name" input)
document.querySelector('#name').addEventListener('change', (e)=>{
    nameField = e.target.value
})
// Add the new object instance to the memory location (for example: click 'add new object' to create an object called dogs with an existingProperty of 5)
document.querySelector('#new').addEventListener('click', ()=>{
    locoParentis[nameField] = new MyClass(5)
    console.log(locoParentis)
})
// Create/set a new property in object instance (for example: typing 9 in the property value input sets dogs' newProperty to 9)
document.querySelector('#property').addEventListener('input', (e)=>{
    locoParentis[nameField].newProperty = Number(e.target.value)
    console.log(locoParentis)
})

// Apply functions on object instance (for example: chosing sum outputs 14 into the console.)
document.querySelector('#functions').addEventListener('change', (e)=>{
    console.log(e.target.value) 
    locoParentis[nameField].myFunc = [e.target.value]
    console.log(locoParentis[nameField].resultProperty)
})

