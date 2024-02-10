export class MercurySM {
  original = {}
  sketch   = {}

  constructor(path) {

    const content = std.loadFile(path)
    const file    = std.open(path, "w")

    if (content == null) {
       console.log(`MercurySM error in constructor: path ${path} does not exist`)
    } 
    else {

      try {
        this.sketch = {...this.original} = JSON.parse(content)
      } catch(e) {
        this.original = {}
      
        file.puts("{}")
        file.flush()
        file.close()
        }
    }
  }

  exists(item) {
    return this.sketch[item] !== undefined ? true : false
  }

  get(item) {
    return this.sketch[item] !== null ? this.sketch[item] : undefined
  }

  delete(item) {
    delete this.sketch[item]
  }

  setValue(item, value) {
    this.sketch[item] = value
  }

  saveIn(path) {
    const file = std.open(path, "w")
    if (file !== null) {
      file.puts(JSON.stringify(this.sketch))
      file.flush()
      file.close()
    } 
    else {
      console.log(`MercurySM error in method saveIn: path ${path} does not exist`)
    }
  }

  undo() {
    this.sketch = this.original
  }
}
