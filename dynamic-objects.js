// Class and its functions
function myClass() {
    this.existingProperty = 5 
}
myClass.prototype.myFunction = function () {
    this.resultProperty = this.newProperty + this.existingProperty
}
myClass.prototype.myFunction2 = function () {
    this.resultProperty = this.newProperty * this.existingProperty
}

// Memory
const locoParentis = {}
let nameField = ''
let propField = 0

// Name of object instance of myClass (for example: type dogs into the brower/HTML "name" input)
document.querySelector('#name').addEventListener('change', (e)=>{
    nameField = e.target.value
})
// Add the new objeect instance to the array (for example: click add new object to create an object called dogs with an existingProperty of 5)
document.querySelector('#new').addEventListener('click', ()=>{
    locoParentis[nameField] = new myClass()
    console.log(locoParentis)
})
// Create/set new property in object instance (for example: typing 9 in the property value input sets dogs' newProperty to 9)
document.querySelector('#property').addEventListener('input', (e)=>{
    locoParentis[nameField].newProperty = Number(e.target.value)
    console.log(locoParentis)
})

// Apply prototypical functions on object instance (for example: chosing sum outputs 14 into the console.)
document.querySelector('#functions').addEventListener('change', (e)=>{
    console.log(e.target.value) 
    locoParentis[nameField][e.target.value]()
    console.log(locoParentis[nameField].resultProperty)
})

