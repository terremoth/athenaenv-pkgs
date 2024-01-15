/*

   ___      _                                                
   /   \__ _| |_ __ _    /\/\   ___ _ __ ___ _   _ _ __ _   _ 
  / /\ / _` | __/ _` |  /    \ / _ | '__/ __| | | | '__| | | |
 / /_/| (_| | || (_| | / /\/\ |  __| | | (__| |_| | |  | |_| |
/___,' \__,_|\__\__,_| \/    \/\___|_|  \___|\__,_|_|   \__, |
                                                        |___/ 

  Credits: https://github.com/GustavoFurtad2/DataMercury
*/

export class Data {
    sketch = {}
    path;
    constructor(path) {
      var file = std.open(path, "r");
      if (file == null) console.log("Data mercury error in constructor: " + path + " don't exist.");
      else {
        this.path = path;
        var content = file.readAsString();
        file.close();
        this.sketch = JSON.parse(content);
      }
    }

    exists(item) {
        if (this.sketch[item]) {return true}
        else {return false}
    }

    get(item) {
        return this.sketch[item] != null && this.sketch[item] || null
    }

    delete(item) {
        delete this.sketch[item]
    }

    setValue(item, value) {
        this.sketch[item] = value
    }

    saveIn(path) {
        var file = std.open(path, "w");
        if (file != null) {
           file.puts(JSON.stringify(this.sketch));
           file.flush();
           file.close();
        } else {console.log("Data mercury error in saveIn: " + path + " don't exist.")}
    }

    undo() {
        var file = std.open(this.path, "r");
        var content = file.readAsString();
        file.close();
        this.sketch = JSON.parse(content);
    }
}
