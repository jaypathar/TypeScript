// declaring a class user.
class User {
    // private variable - accessible only within the class.
    private name = ""

    // setName(): to assign value to 'name'.
    setName(name: string) {
        this.name = name
    }
    // to get 'name'.
    getName() {
        console.log(this.name)
    }
    // printing length of string. && can't access outside the class
    private getNameLength() {
        console.log(this.name.length)
    }

}

const user = new User()
user.setName("John")
user.getName()


