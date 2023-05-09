| Input        | Output                 |
| ------------ | ---------------------- |
| 1            | 1 integer              |
| 1.1          | 1 integer              |
| true  (bool) | 1 integer              |
| false (bool) | 0 integer              |
| "string"     | ⚠️ Must be type of int |
| [1,2,3]      | ⚠️ Must be type of int |
| null         | ⚠️ Must be type of int | 

| Input        | Output                   |
| ------------ | ------------------------ |
| 1            | 1 double                 |
| 1.1          | 1.1 double               |
| true  (bool) | 1 double                 |
| false (bool) | 0 double                 |
| "string"     | ⚠️ Must be type of float |
| [1,2,3]      | ⚠️ Must be type of float |
| null         | ⚠️ Must be type of float | 

| Input        | Output                  |
| ------------ | ----------------------- |
| 1            | 1 boolean               |
| 1.1          | 1 boolean               |
| true  (bool) | 1 boolean               |
| false (bool) | boolean                 |
| "string"     | 1 boolean               |
| [1,2,3]      | ⚠️ Must be type of bool |
| null         | ⚠️ Must be type of bool | 

| Input        | Output                    |
| ------------ | ------------------------- |
| 1            | "1" string                |
| 1.1          | "1.1" string              |
| true  (bool) | "1" string                |
| false (bool) | " " string                |
| "string"     | "string" string           |
| [1,2,3]      | ⚠️ Must be type of string |
| null         | ⚠️ Must be type of string | 

| Input        | Output        |
| ------------ | ------------- |
| 1            | ⚠️            | 
| 1.1          | ⚠️            |
| true  (bool) | ⚠️            |
| false (bool) | ⚠️            |
| "string"     | ⚠️            |
| [1,2,3]      | [1,2,3] array |
| null         | ⚠️            |

| Input        | Output |
| ------------ | ------ |
| 1            |   ⚠️     |
| 1.1          |   ⚠️     |
| true  (bool) |   ⚠️     |
| false (bool) |   ⚠️     |
| "string"     |   ⚠️     |
| [1,2,3]      |   ⚠️     |
| null         |   ⚠️     |

| Input        | Output |
| ------------ | ------ |
| 1            | ⚠️     |
| 1.1          | ⚠️     |
| true  (bool) | ⚠️     |
| false (bool) | ⚠️     |
| "string"     | ⚠️     |
| [1,2,3]      | ⚠️     |
| null         | ⚠️     | 
