# Random Password Generator

## Description

This is a command-line tool that generates random passwords with various complexity levels. You can specify the length and complexity of the password as command-line options.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)

## Installation

### Clone the Repository
To get started, clone this repository to your local machine using the following command:

```bash
git clone https://github.com/AbdurrahmanSogbesan/random-pw-cli.git
```

### Clone the Repository
Navigate to the cloned directory:
```bash
cd random-pw-cli
```

Install the required dependencies:
```bash
npm install -g
```

## Usage

To generate a random password, use the following command:

```bash
random-pw -l <length> -c <complexity>
```

## Options

- `-l, --length <length>`: Length of the password (required).
- `-c, --complexity <complexity>`: Complexity level of the password (optional, default is "medium"). Available options: "weak," "medium," "strong."

### Examples

1. Generate a medium strength password with a length of 12 characters:
```bash 
random-pw -l 12 -c medium
```

2. Generate a strong password with a length of 16 characters:
```bash 
random-pw -l 16 -c strong
```

3. Generate a weak password with a length of 8 characters:
```bash 
random-pw -l 8 -c weak
```

