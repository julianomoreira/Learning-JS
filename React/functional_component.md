# Function or Stateless component

Take this example:

```
const VideoGallery = ({videos}) => {

return (
    <div>
      <h1>Hello world!</h1>;
    </div>
  )

}
```

## Advantage of stateless component

- It avoid the confusion around `this` keyword.
- No class needed

If you need lifecycle methods, refs, or want to optimize performance using `shouldComponentUpdate`.
