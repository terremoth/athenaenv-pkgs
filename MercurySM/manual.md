   MercurySM(Mercury Save Manager)

Author: GustavoFurtad2 (github.com/GustavoFurtad2)

# How to start?
  In the top of your code can you import like this:
  ```js
  import {MercurySM} from "./mercurysm.js"
  ```
  And create a class in this way:
  ```js
  let MySave = new MercurySM("mysavefile.json")
  ```

# Methods

  exists(name) - String value, return true if the specified item exists else it will return false

  get(name) - String value, Get the value of the specified item

  delete(name) - String value, Delete the specified item

  setValue(itemName, itemValue) - (itemName - String) (itemValue - Value) Change the itemName specified by itemValue if the item does not exist, it will create
  saveIn(path) - String value, save a sketch in the specified file

  undo() - Undo the sketch to the original file

# Example

```js
import {MercurySM} from "./mercurysm.js"

let MySave = new MercurySM("mysavefile.json")
MySave.setValue("playerPoints", 1)
MySave.saveIn("mysavefile.json")
while (true)
 Screen.clear()
 Screen.flip()
}
```
