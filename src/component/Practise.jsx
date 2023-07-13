const statusBtn = (status)=>{
  if (status) {
    return <button>Logout</button>
  } else {
    return <button>Login</button>;
  }
}

const Practise = () => {
  let city = ["Dhaka", "Sylhet", "Delhi", "London", "NSW"];

  return (
    <div>
      {/* {
                (() => {
                    if ((mark >= 80) & (mark <= 100)) {
                      return <h1>A+</h1>;
                    } else if ((mark >= 70) & (mark < 80)) {
                      return <h1>A</h1>;
                    } else if ((mark >= 60) & (mark < 70)) {
                      return <h1>A-</h1>;
                    }
                    else {
                         return <h1>Fail</h1>;
                    }
                        
                }
                
                )()
            } */}
      

      {/* <ol>
        {city.map((item, i ) => {
          return <li key={i.toString}>{item}</li>;
        })}
      </ol> */}
      <h2>Status Btn</h2>
      {statusBtn(true)}
    </div>
  );
};

export default Practise;
