# Configure TypeScript

### tsconfig

### Check tsc is installed or not `tsc --version` if tsc is not found then run:

```
npm install -g typescript
```

### After installing tsc config the tsc

```
tsc --init
```

### package.json

```
npm init -y
```

```
yarn init -y
```

### nodemon

```
npm i -D nodemon
```

```
yarn add -D nodemon
```

### ts-node-dev

```
npm i ts-node-dev
```

or

```
yarn add ts-node-dev
```

### install typescript

- Global Installation

```
npm install --global typescript
```

```
yarn global add typescript
```

- Local Installation (Project wise)

```
npm install --save-dev typescript
```

```
yarn add --dev typescript
```

### Add this line under scripts in package.json file

```
"start": "ts-node-dev --respawn --transpile-only src/index.ts"
```

### Create a folder with name `src` and create a file with `index.ts` in this directory

### In the tsconfig file uncomment this line:

- "rootDir": "./src"
- "outDir": "./dist"

### Write something or console in index.ts then run the project with this command

```
npm start
```

or

```
yarn start
```
