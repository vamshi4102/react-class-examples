

export const Message = () =>{
  return(
    <h1>Hello</h1>
  )
}
export function Name({name="xyz",age=100}){

    return(
        <h1>name: {name}, age: {age}</h1>
    )
}
