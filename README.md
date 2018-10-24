## **Commitify**
[![npm version](https://badge.fury.io/js/commitify.svg)](https://badge.fury.io/js/commitify)

### Easy git commit message with meaning
#

#### Install
```sh
npm install -g commitify
```

#### Usage
Inside any git repo:
```sh
$ commitify

? Do you want to add changes before commit (`git add .`)? Yes
? Choose commit type: fix
? Choose commit scope: client
? Enter commit message: this is a bug fix
? Do you want to push your commit? Yes
```

That will push a new commit with the message:  
`fix(client): this is a bug fix`

#### Options
You can extend the list of the commit types and scopes ([example here](.commitifyrc)).  
Create a `.commitifyrc` file in your project root in the format:

```json
{
    "types": [
        "custom"
    ],
    "scopes": [
        "custom"
    ]
}
```

MIT License