// import "./App.css";
import Categories from "../categorys";
import Names from "../names";
import Category from "../../components/category";
import { Message, Name } from "../../components/Message";
import Button from "../../components/Button";
import Container from "../../components/Container";
function App() {
  const fruits = [
    "banana",
    "grape",
    "apple",
    "apple",
    "apple",
    "apple",
    "sefsdf",
    "23324",
  ];
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  const fruitsDynamic = [
    { id: 1, name: "🍎 Apple" },
    { id: 2, name: "🍌 Banana" },
    { id: 3, name: "🍇 Grape" },
  ];
  let content;
  const isLoggedIn = true;
  if (isLoggedIn) {
    content = <p>Welcome back!</p>;
  } else {
    content = <p>Please log in ifelse.</p>;
  }
  const data = [
    {
      title: "Fruits",
      items: ["Apple", "Banana", "Mango"],
    },
    {
      title: "Vegetables",
      items: ["Carrot", "Spinach", "Potato"],
    },
  ];
  // const data = [];
 return (
    <>
    {/* <h1 className="heading" style={{color:'green'}}>Welcome to react js </h1> */}
      {/* <Message /> */}
      {/* <Name name="hanuman" age={500} />
      <Name  />
      <Button title="click me" onClick={()=> alert("clicked")} />
      <Button title="press me" onClick={()=> alert("pressed")} />
      <Container>
      <Name name="sita" age={850+145472} />
      <h1 style={{color:'green'}}>children</h1>
      <h1 style={{color:'red'}}>children</h1>
      <h1 style={{color:'yellow'}}>children</h1>
      <h1 style={{color:'orange'}}>children</h1>
      <h1 style={{color:'black'}}>children</h1>
      <h1 style={{color:'gray'}}>children</h1>
      <h1 style={{color:'blue'}}>children</h1>
      </Container> */}
      {/* <Names /> */}
     {/* <Categories /> */}
     {/* class 4.2 */} 
     
     {/* <li>banana</li>
        <li>grape</li>
        <li>apple</li>
        <li>banana</li>
        <li>grape</li>
        <li>apple</li>
        <li>banana</li>
        <li>grape</li>
        <li>apple</li>
        <li>banana</li>
        <li>grape</li>
        <li>apple</li> */}
      <h1>rendering methods</h1>
      <ul>
        {/* {content}
        {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in -ternary.</p>}
        {!isLoggedIn && <p>Welcome back!</p>} */}
        {
          data.length > 0 ?
          <div>
            {data.map((cat, index) => (
              <div>
                <h3>{cat.title}</h3>
                {cat.items.map((item, i) => (
                  
                  <li style={{ color: "orange" }} key={i}>
                   <Category name={item} />
                  </li>
                ))}
              </div>
            ))}
          </div>
          :
        <p>Data ledhu nana :)</p>
        }
        {/* {
          fruitsDynamic.map((fruit) => 
            <li style={{color:'orange'}} key={fruit.id}>{fruit.name} </li>
          )
        }
        {
          numbers.map((number,index)=> 
            <li style={{color:'blue'}}>{number}</li>
          )
        } */}
      </ul>
    </>
  );
}

export default App;
