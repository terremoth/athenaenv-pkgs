# AthenaEnv Packages

![AthenaEnv Packages](https://github.com/terremoth/athenaenv-pkgs/blob/main/athena-pkgs.png)

Main repository for packages of the [Athena Environment](https://github.com/DanielSant0s/AthenaEnv) to be used with [Zeus Package Manager](https://github.com/terremoth/zeus-pm)  

Feel free to send via pull request your package  

#### Standard template to push your pkg:  
- create a directory in the root folder in this repo, with the exact name you want for the package (all lowercase with no spaces, spaces in the name should have - (hyphen) separating
- this root folder that lies your package should have a file called "`description.txt`" written what your lib does, so the package manager command "search" could list and read from these files
- put your pkg files inside this directory

The zeus package manager should then find the package with:

```sh
$ python zeus.py --search pkg-name
```
