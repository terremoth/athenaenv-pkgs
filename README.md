# AthenaEnv Libs and Modules
Libraries and Modules for the AthenaEnv PS2  

Feel free to send via pull request your library or module  

Standard template to push your lib:  
- create a directory in the root folder in this repo, with the exact name you want for the lib/module (all lowercase with no spaces, spaces in the name should have - (hyphen) separating
- this root folder that lies your library should have a file called "description.txt" written what your lib does, so the package manager command "search" could list and read from these files
- put your lib files inside this directory

The zeus package manager should then find the package with:
```sh
$ zeus search lib-name
```
