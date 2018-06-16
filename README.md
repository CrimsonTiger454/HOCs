Higer Order Component
- A function that take a component as an argument and returns a new component(and does NOT mutate original component)

  ```js
  const EnhancedComponent = higherOrderComponent(WrappedComponent);


  let HOC = (WrappedComponent) => {
    return class extends React.Component {
      //functionality / code / styling / behavior / etc
      render () {
        return (
          <div>
          <WrappedComponent {...this.props} />
          </div>
        )
      }
    }
  }

  let newComponent = HOC(SomeComponent);
  ```
# Render Props
 - goal is to share functionality / behavior / etc ... similar to HOCs.
 - A function being passed to a component through props that affects  what is render

 ```js 
 <Component>
 {
   (data) => (
     //JSX utilizing data passed through props.children invoked
   )
 }
 </Component>

 =====

 return (
   <div>
   {this.props.children(data)}
   </div>
 )
 ```
