function Person(age, name, gender) {
  this.age = age
  this.name = name
  this.gender = gender
}

Person.prototype.run = () => {
  console.log('run')
}

Person.prototype.talk = () => {
  console.log('talk')
}

Person.prototype.fuck = () => {
  console.log('fucks')
}
