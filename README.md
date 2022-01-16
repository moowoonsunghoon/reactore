welcome to reactore

reactore is simple global state store for React

## Install

```sh
npm i reactore
# or
yarn add reactore
```

## Usage

### App.tsx

```tsx
import React from "react";
import { ReactoreClient, ReactoreProvider } from "reactore";
import Counter from "./Counter";

export interface Reactore {
  count: number;
  liked?: boolean;
}

const reactore = new ReactoreClient({
  count: 0,
});

const App = () => {
  return (
    <ReactoreProvider reactore={reactore}>
      <Counter />
    </ReactoreProvider>
  );
};

export default App;
```

### Counter.tsx

```tsx
import React from "react";
import { useReactore } from "reactore";
import { Reactore } from "./App";

const Counter = () => {
  const { data, modify } = useReactore<Reactore>();

  return (
    <div>
      <p
        onClick={() => {
          modify({
            count: data.count + 1,
          });
        }}
      >
        {data.count}
      </p>
      <p
        onClick={() => {
          modify({
            liked: !data.liked,
          });
        }}
      >
        {data.liked ? "liked" : "unliked"}
      </p>
    </div>
  );
};

export default Counter;
```
