<h2>What is hooks</h2>
<p>Hooks are special function,that allow us to use state and other React features in functional Compoments.</p>
<p>Earlier,when we used to create react app using functional component,then we didn't have access to the state management and life cycle methods</p>
<p>To access these feature we had to add class components ,so this was the problem with functional component</p>
<p>But After introducing react hooks from version  16.8 ,we can now use statemanagement  and  other react features  without writing  class components.</p>
<i>In other works hooks,are the functions that make functional components work like class components.</i>
<h2>Most commonly used hooks are </h2>
<h3>useState</h3>
<p>
It is a react hook ,which creates an state variable.
which helps us to track state in components & updates the user interface when state changes.
</p>
<h3>useEffect</h3>
<p>
It is a react hook allow you to perform side effects in your components.
eg:1.fetching data from api
2.directly updating DOM
3.Timers like SetTimeOut & SetInterval
</p>

<h3>useRef</h3>
<p>
It is a react hook that allow us to create mutable variables, which will not re-render the component.
useRef is also used for accessing DOM elements.
</p>

<h3>useMemo</h3>
<p>
The react useMemo hooks returns a memorized value.(it's like caching a value so it doesn't need to be recalculated.)
The useMemo Hook only runs When one of its dependencies gets updated.
This can improve the performance of the application.There is one or more hooks in react to improve Performanace of the application.There is one more hooks in react to improve performance,that is useCallback hook.</p>
<p>
The useMemo & useCallback Hooks are similar.The maim difference is:
UseMemo hooks returns a memorized value.
UseCallback hooks returns a memorized function.
</p>


<h3>useCallback</h3>
<p>
usecallback is a reacthook that lets you cache a function definition between re-renders.
it means ,when we use the callback hook,it doesn't multiple instance of same  function when re-render happens.instead of creating new instance of the function,it provides the cached function on re-render of the component
</p>

<h3>useContext</h3>
<p>
usecontext is a react hook allow you to access data from any components without explicity passing it down through Props at every level.
usecontext is used to manage Global data in react App.
</p>

<h3>useReducer</h3>
<p>
useReducer is similar to userstate,But instead of providing state & setter function .it Provides state and dispatch function
</p>
<p>
the useReducer Hook accepts 2 arguments 
-Reducer function
-initial state
and return : Current state and Dispatch Method
</p>
<p>
The reducer function specifies how the state gets updated.
</p>

<h3>useLayoutEffect</h3>
<p></p>

<h4>Custom Hooks</h4>
<p></p>